function inArray(array1,array2){
    let res = array1.filter((elem) => {
            return array2.find(elem2 => {
              return elem2.includes(elem)
            })
      })
      return res.sort()
  }