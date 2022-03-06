// Question 1
function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
      var curr = key(i);
      if (curr >= maximum) {
        maximum = curr;
      }
    }
    return maximum;
  }

// Question 2
const reverser = (i) => -i;

// Question 4
function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      object[key].append(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      object[key] = value;
    }
    return null;
  }


// Question 5
  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        await(a)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = console.log(5)
    console.log(five)
    return five
}