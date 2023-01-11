export const uppercase = (word: string) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const unixToHours = (unix: number) => {
  let date = new Date(unix * 1000);
  let hours = date.getUTCHours();
  let minutes = '0' + date.getUTCMinutes();
  return hours + ':' + minutes.substr(-2);
};
