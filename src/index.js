
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((acc, cur, i) => {
    cur.sort((a, b) => (i%2) ? b - a : a - b).map(e => acc.push(e));
    return acc;
  }, []);
}

