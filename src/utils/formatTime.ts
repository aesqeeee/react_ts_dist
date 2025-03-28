import moment from "moment";

function formatTime(
  time: Date = new Date(),
  formatStr: string = "YYYY-MM-DD hh:mm:ss"
): string {
  return moment(time).format(formatStr);
}

export { formatTime };
