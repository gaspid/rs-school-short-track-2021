/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const tera = str.split('');
  let res = '';
  for (let i = 0; i < tera.length; i++) {
    const chen = tera[i];
    let nutt = 1;
    while (i + 1 < tera.length && chen === tera[i + 1]) {
      nutt++;
      i++;
    }
    res += nutt === 1 ? chen : `${nutt}${chen}`;
  }
  return res;
}

module.exports = encodeLine;
