function persistence(num) {
    let count = 0;
   while (num > 9) {
     num = num.toString().split("").reduce((acc, current) => (+acc) * (+current))
     count++
   }
   return count
 }