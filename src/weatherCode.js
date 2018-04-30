function weatherCode(code) {
  if (code >= 200 && code <= 232) {
    return "11d.png";
  }
  if (code >= 300 && code <= 321) {
    return "09d.png";
  }
  if (code >= 500 && code <= 504) {
    return "10d.png";
  }
  if (code === 511) {
    return "13d.png";
  }
  if (code >= 520 && code <= 531) {
    return "09d.png";
  }
  if (code >= 600 && code <= 622) {
    return "13d.png";
  }
  if (code >= 701 && code <= 781) {
    return "50d.png";
  }
  if (code === 800) {
    //need to set day nite
    return "01d.png";
  }
  if (code > 800 && code <= 804) {
    return "03d.png"; // set day nite and cloud variations
  }
}

export default weatherCode;
