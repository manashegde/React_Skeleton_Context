(function() {
  if (typeof window.CustomEvent === "function") return false; //If not IE

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
  window.Event = CustomEvent;
})();

export function setInputValue(domElem, value) {
  const setValue = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  setValue.call(domElem, value);
  const evt = new Event("input", { bubbles: true });
  domElem.dispatchEvent(evt);
}
