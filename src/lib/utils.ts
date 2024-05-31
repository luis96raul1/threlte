/**
 * Web components take all arguments as strings. To parse our JSON into an object, we have to parse it.
 * This function prevents bad JSON from crashing our code by using a try/catch
 * @template T - The expected return type
 * @param {string} input - Our string of JSON to convert to type <T>
 */
export const safelyParseJson = <T>(input: string): T | null => {
  try {
    return JSON.parse(input) as T
  } catch (e) {
    console.warn(e)
    return null
  }
}
