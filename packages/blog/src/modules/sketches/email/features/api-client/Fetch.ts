import { promiseAsResource } from './Resource';

/**
 * An API client that simulates a network request and returns a `resource` which can
 * be used by React's Suspense component.
 *
 * @param value the value to return when the delay is up
 * @param delay a multiplier to adjust delay
 *
 */
export const fetch = <T>(value: T, delay = 1) => {
  return promiseAsResource(
    new Promise<T>((resolve) =>
      setTimeout(() => resolve(value), Math.random() * 1000 * delay)
    )
  );
};
