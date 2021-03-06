export const timeSince = (timeStamp) => {
    let now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return 'Just now';
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + 'm ago';
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + 'h ago';
    }
    if (secondsPast > 86400) {
      let day = timeStamp.getDate();
      let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
      let year = timeStamp.getFullYear() === now.getFullYear() ? "" : " " + timeStamp.getFullYear();
      return day + " " + month + year;
    }
  }

// const dateConvert = (date) => {
//     const prevDate = new Date(date);
//     const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
//     return prevDate.toLocaleString('en-GB', options)
// } {dateConvert(post.created)}
