import ws from "./ws.js";

const messageCointainer = document.querySelector('#message');

ws.onopen = (event) => {};
ws.onclose = (event) => {};
ws.onerror = (error) => console.error(error);
ws.onmessage = (event) => {
  if(messageCointainer) {
    messageCointainer.innerHTML = event.data;
  }
};

console.log(ws);