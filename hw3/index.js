// Question 1
function max(iterable, key) {
    var maximum = 0;
    for (var i in iterable) {
      var curr = key.i;
      if (curr >= maximum) {
        maximum = curr;
      }
    }
    return maximum;
  }

console.log(max([0, 1, 2, 3]))


// Question 2
const reverser = max.reverser;

// Question 4
// function changer(object, key, value) {
//     var ______ = ______;
//     if (Array.isArray(prev)) {
//       ______;
//     } else if (typeof prev == 'object' && prev != null) {
//       ______ = ______;
//     } else {
//       ______ = ______;
//     }
//     return null;
//   }


// Question 5
//   async function promise_me(truthy) {
//     const a = new Promise((resolve, reject) => {
//         console.log(_____)
//         ______(______)
//     })
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     const five = ______ ______
//     console.log(five)
//     return five
// }