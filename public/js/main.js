import ws from "./ws.js";

const messageCointainer = document.querySelector('#message');

ws.onopen = (event) => {
  messageCointainer.innerHTML = `<div>
  <strong style="color: green">...ws connected</strong>
</div>`;
};
ws.onclose = (event) => {
  messageCointainer.innerHTML = `<div>
    <strong style="color: red">...lost ws connection</strong>
  </div>`;
};
ws.onerror = (error) => console.error(error);
ws.onmessage = (event) => {
  if(messageCointainer) messageCointainer.innerHTML = event.data;
};