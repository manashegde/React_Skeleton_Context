export const urls = {
  login: "/login",
  searchCitizen: "/citizen/searchCitizen",
  fetchExpectedFlights: "/flight/fetchExpected",
  setActualFlight: "/flight/setActual"
};

export function post({ url, data }) {
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      // "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt")
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, cors, *same-origin
    // redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  })
    .then(res => res.json())
    .catch(e => {
      console.error("-------api post:", e);
      throw e.message || "unknown post error";
    });
}

export function get(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(e => {
      console.error("--------api get:", e);
      throw e.message || "unknown get error";
    });
}
