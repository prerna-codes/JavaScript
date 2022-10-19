/* Operation on Numbers - 2 
Description
You are given a number stored in a variable with the nameN, and another number stored in a variable with the nameM
You have to perform the following operations on the value stored inN
    Multiply the value stored in N with 40

    Add 20 to the value stored in N

    Subtract 50 from the value stored in N

You are given another number stored in the variableM

If the value after of after performing the above operations is greater thanM, printGreater!, else if the value is equal, printEqual!, else printLesser!

For example, consider the value stored inN= 5, and the value stored inM= 10

Then, after performing the above operation, the value stored inNbecomes

     N = N * 40 = 200

     N = N + 20 = 220

     N = N - 50 = 170
Now, the value stored in M is 10, which is lesser than the value stored inN. Therefore, the output isGreater!

Input
The first and the only line of the input contains the value stored inNandM

Output
Print the output according to the condition shown in the problem statement

Sample Input 1 
5 10
Sample Output 1
Greater! */

let N=5
let M=10
    N = N * 40 

     N = N + 20 

     N = N - 50 
 if(N>M){
   console.log("Greater!")
 }
else if(N==M){
   console.log("Equal!")
}
else{
  console.log("Lesser!")
}
