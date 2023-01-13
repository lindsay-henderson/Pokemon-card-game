
function choice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return (arr[randomIndex])
  }

  function remove(arr, obj) {
  arr.includes(obj)? arr.splice(arr.indexOf(obj), 1)
  : null
  console.log(arr)
  }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === obj) {
//     return [ ...arr.slice(o, i), ...arr.slice(i+1) ]
//   }
// }

export {choice, remove}