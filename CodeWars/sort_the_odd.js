function sortArray(array) {
    let arrayOdd = array.filter(elem => elem % 2 !== 0).sort((a,b) => a - b)
    let res = array.forEach((elem,index,arr) => {
        if (elem % 2 !== 0) {
            arr[index] = arrayOdd[0]
         arrayOdd.shift()
        }
    });
    return array
  }

  console.log(sortArray([7,1]));