export const delayLoading = (
  setState: React.Dispatch<React.SetStateAction<boolean>> | any,
  delay: number
) =>
  setTimeout(() => {
    setState;
  }, delay);
