export enum Colors {
  red,
  green,
  blue,
  orange,
  cyan,
  purple,
}
export const environment = {
  production: false,
  Count: 1,
};
export const sleepTimer = async (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
