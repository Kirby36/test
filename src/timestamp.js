function timestamp(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hours = a.getHours();
  var hours12 = hours >= 12 ? hours - 12 : hours;
  var min = a.getMinutes();
  if (min === 0) {
    min = min + "0";
  }
  var sec = a.getSeconds();
  if (sec === 0) {
    sec = sec + "0";
  }
  var ampm = hours >= 12 ? "PM" : "AM";
  var time =
    year +
    " " +
    month +
    " " +
    date +
    " " +
    hours12 +
    ":" +
    min +
    ":" +
    sec +
    ampm;
  return time;
}

export default timestamp;
