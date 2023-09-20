// inspired by:
// https://www.section.io/engineering-education/how-to-build-a-clock-with-javascript-and-svg/

function AnalogClock({ date }) {
  const hourPosition = ((date.getHours() * 360) / 12 + (date.getMinutes() * (360 / 60)) / 12) + 3 / 360;
  const minutePosition = ((date.getMinutes() * 360) / 60 + (date.getSeconds() * (360 / 60)) / 60) + 6 / 60;
  const secondPosition = ((date.getSeconds() * 360) / 60) + 6;

  return <svg id="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <g id="face">
      <circle className="circle" cx="300" cy="300" r="253.9" />
      <path className="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6" />
      <circle className="mid-circle" cx="300" cy="300" r="16.2" />
    </g>
    <g id="hour" style={{transform: 'rotate(' + hourPosition + 'deg)'}}>
      <path className="hour-arm" d="M300.5 298V142" />
      <circle className="sizing-box" cx="300" cy="300" r="253.9" />
    </g>
    <g id="minute" style={{transform: 'rotate(' + minutePosition + 'deg)'}}>
      <path className="minute-arm" d="M300.5 298V67" />
      <circle className="sizing-box" cx="300" cy="300" r="253.9" />
    </g>
    <g id="second" style={{transform: 'rotate(' + secondPosition + 'deg)'}}>
      <path className="second-arm" d="M300.5 350V55" />
      <circle className="sizing-box" cx="300" cy="300" r="253.9" />
    </g>
  </svg>;
}

function Clock() {
  const date = new Date();
  return <AnalogClock date={date} />;
}

export default Clock;