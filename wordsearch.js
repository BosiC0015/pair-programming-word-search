const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let str = '';
    letters.forEach(ls => {
      str += ls[i];
    });
    verticalJoin.push(str);
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;