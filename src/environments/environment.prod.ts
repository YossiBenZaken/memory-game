export const environment = {
  production: true,
  Count: 1,
};
export enum Colors {
  red,
  green,
  blue,
  orange,
  cyan,
  purple,
}
export const sleepTimer = async (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
