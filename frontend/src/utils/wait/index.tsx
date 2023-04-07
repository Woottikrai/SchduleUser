export const wait = (ms: number) =>
  new Promise((empty: TimerHandler) =>
    setTimeout(() => {
      empty;
    }, ms)
  );

export const delay = 3000;
