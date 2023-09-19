function Time() {
  const date = new Date();
  return <div>
    The time is: <strong>{date.toTimeString()}</strong>
  </div>;
}

export default Time;