function noop() {}

export default function(url, options) {
  options = options || {};

  let ws,
    wsMethods = {},
    ms = options.timeout || 1e3,
    num = 0,
    self = this,
    max = options.maxAttempts || Infinity;

  wsMethods.onmessage = options.onmessage || noop;

  wsMethods.onclose = e => {
    e.code !== 1e3 && e.code !== 1005 && self.reconnect(e);
    (options.onclose || noop)(e);
  };

  wsMethods.onerror = e => {
    e && e.code === "ECONNREFUSED"
      ? self.reconnect(e)
      : (options.onerror || noop)(e);
  };

  wsMethods.onopen = e => {
    num = 0;
    (options.onopen || noop)(e);
  };

  self.open = () => {
    ws = new WebSocket(url, options.protocols);
    for (let method in wsMethods) ws[method] = wsMethods[method];
  };

  self.reconnect = e => {
    num++ < max
      ? setTimeout(_ => {
          (options.onreconnect || noop)(e);
          self.open();
        }, ms)
      : (options.onmaximum || noop)(e);
  };

  self.json = x => {
    ws.send(JSON.stringify(x));
  };

  self.send = x => {
    ws.send(x);
  };

  self.close = (x, y) => {
    ws.close(x, y);
  };

  self.open(); // init

  return self;
}
