/**
 * Returns a random UUID
 *
 * @param {string} format - The format of the UUID to return.
 * @returns {string} The randomly generated UUID.
 */

export default function uuid(): string {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[ 0 ] & 15 >> c / 4).toString(16)
  )
}
