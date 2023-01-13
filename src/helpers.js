
function choice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return (arr[randomIndex])
  }

  function remove(arr, obj) {
    let index = arr.indexOf(obj)
    if (index > -1) {
      arr.splice(index, 1)
      return arr
    }
    else {
      return null
    }




    // return (arr.map((obj) => {
    //   return (arr.includes(obj)? (arr.splice(arr.indexOf(obj), 1),console.log(arr)) : null
  //     )
  //   })
  // )
  }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === obj) {
//     return [ ...arr.slice(o, i), ...arr.slice(i+1) ]
//   }
// }

export {choice, remove}