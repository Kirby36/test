function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  /*  var months = [
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
 */
  // var year = a.getFullYear();
  //  var month = months[a.getMonth()];
  //  var date = a.getDate();
  var hours = a.getHours();
  var hours12 = hours >= 12 ? hours - 12 : hours;
  var min = a.getMinutes();
  if (min % 10 == 0) {
    min = min + "0";
  }
  if (min < 10) {
    min = "0" + min;
  }
  //  var sec = a.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  var time = hours12 + ":" + min + ampm;
  return time;
}

export default timeConverter;
