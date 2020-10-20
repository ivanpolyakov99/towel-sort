
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []; 
  } else {
    function reducer (first, second, step) {
      return first.concat(step % 2 === 0 ? second : second.reverse())
    }
  
    return matrix.reduce(reducer, [])
  }
}
