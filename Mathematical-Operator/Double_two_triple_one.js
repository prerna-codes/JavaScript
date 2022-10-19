/* Double Two Triple One 
Description
You are given four numbers, stored in the variables with the following names
one, two, three, four
Perform the following operations on the four numbers

The value stored in one and two is doubled, such that, if it was 2 initially, it becomes 4
The value stored in three is multiplied by 3, such that, if it was 4, it becomes 12
The value stored in four, is increased by 4, such that if it was 7 initially, it becomes 11
Find the sum of the values stored inone, two, three, four, after the above operations are performed

Input
The first and the only line of the input contains the values stored in variablesone, two, three, four

Output
Print the sum of the values stored inone, two, three, four, after the required operations are performed

Sample Input 1 
1 2 3 4
Sample Output 1
23 */

let one=1
let two=2
let three=3
let four=4

console.log(one*2+two*2+three*3+(four+4))
