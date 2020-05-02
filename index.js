console.log("Problem 1")

const sumAll = (num)=>{
    if(num===1) return 1;
    return num + sumAll(num-1)
}

console.log(sumAll(3))

console.log("Problem 2")

const multArr=(arr)=>{
    if(arr.length===0){
            return 1;
    }else{
            return arr[0]*multArr(arr.slice(1))
    }
}
console.log(multArr([2, 3, 5]))
console.log(multArr([5, 5, 1, 2]))

console.log("Problem 3")
const concatArr =(arr)=>{
    if(arr.length===0){
            return arr;
    }else{
            return arr[0] +" "+concatArr(arr.slice(1))
    }
}

console.log(concatArr(['is', 'it', 'tomorrow']))
console.log(concatArr(['or', 'just', 'the', 'end', 'of', 'time']))

console.log("Problem 4")
const sumEvens = (arr)=>{
    if(arr.length){
        return arr;
    }else if (arr[0]%2===0){
        return arr[0] + multArr(arr.slice(1))
    }
}






















// console.log("problem 1")
// const sumAll = (num, sum =0)=>{
//     if(num<=0) return sum
//     sum+=num
//     num--;
//     return sumAll(num, sum)
// }
// console.log(sumAll(6))

// console.log("problem 2")
// const multArr = (arr,i =0, product =1) =>{
//     if(i>=arr.length) return product;
//     product*=arr[i]
//     i++
//     return multArr(arr,i,product)
// }
// console.log(multArr([5,5,1,2]))

// console.log("problem 3")
// const concatArr = (arr, i=0, str ="") =>{
//     if(i>=arr.length) return str
//     str+=(arr[i]+ " ") 
//     i++;
//     return concatArr(arr, i, str)
// }
// console.log(concatArr(["is", "it", "tomorrow"]))
// console.log(concatArr(["or", "just", "the", "end", "of", "time"]))

// console.log("problem 4")
// const sumEvens = (arr, i=0, sum=0)=>{
//     if(i>=arr.length) return sum
//     if(arr[i]%2===0){
//         sum += arr[i]
//     }
//     i++
//     return sumEvens(arr, i, sum)
// }
// console.log(sumEvens([2,3,5,6]))
// console.log(sumEvens([10,5,1,2,12]))

// console.log("problem 5")
// const range = (num1,num2, arr=[])=>{
//     if(num1>num2) return arr
//     arr.push(num1)
//     num1++;
//     return range(num1,num2, arr)
// }

// console.log(range(11,20))

// console.log("problem 6")