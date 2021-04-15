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
    new Promise<T>((resolve, reject) =>
      setTimeout(() => {
        if (shouldErr()) {
          reject(null);
        } else {
          resolve(value);
        }
      }, Math.random() * 1000 * delay)
    )
  );
};
/**
 * 1 in 10 requests will be rejected - hopefully a bit more frequent
 * than a prod app
 */
const shouldErr = () => Math.random() > 0.9;
