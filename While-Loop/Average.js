//Print the average of even numbers from 1 to 100 (both included)
let sum=0
let avg=0
let count
for(let i=1;i<=100;i++){
  if(i%2==0){
    sum+=i
    count++
  }
}
console.log(`Sum = ${sum}`)
console.log("Avg=",sum/count)