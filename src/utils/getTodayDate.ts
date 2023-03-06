export default function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return {
    year: year,
    month: date.getMonth() + 1,
    day: date.getDate(),
    dateStr: year + '-' + month + '-' + day, // result: yyyy-mm-dd
  };
}
