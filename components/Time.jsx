function formatTime(date) {
  return date.toTimeString().slice(0, 8);
}

function Time() {
  const date = new Date();
  return <div>
    The server time is: <strong>{formatTime(date)}</strong>
  </div>;
}

export default Time;