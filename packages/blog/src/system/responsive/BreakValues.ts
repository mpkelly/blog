export type BreakValues<T> = {
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
  xxl: T;
};

export const isBreakValues = (object: any) => {
  if (new Object(object) === object) {
    const { xs, sm, md, lg, xl, xxl } = object;
    return xs || sm || md || lg || xl || xxl;
  }
  return false;
};
