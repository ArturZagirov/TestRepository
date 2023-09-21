function findEvenIndex(arr)
{
  for (let index = 0; index < arr.length; index++) {

    let arrLeft = arr.slice(0,index).reduce(((acc,current) => acc + current),0)
    let arrRight = arr.slice(index + 1, arr.length).reduce(((acc,current) => acc + current),0)
    if (arrLeft === arrRight) {
        return index
    }
  }
  return -1
}
console.log(findEvenIndex([1,2,3,4,5,6]));