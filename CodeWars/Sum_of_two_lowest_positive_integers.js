function sumTwoSmallestNumbers(numbers) {  
    let nums = numbers.sort((a,b) => a - b)
    return nums[0]+nums[1]
  }