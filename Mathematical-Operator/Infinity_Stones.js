/* Infinity Stones
Description
You are given five numbers, stored in variables with the following names
 one, two, three, four, five, six
The value stored in the variabletwo, five, sixhas been doubled, such that if initially the value was 3, it has become 6

The value stored in the variablethree, fourhas been increased three times, such that if initially it was 3, it has become 9

The value stored in the variableonehas not been changed.

Find the sum of the updated values stored inone, two, three, four, five, six

Input
The first and the only line of input contains the values stored in the variableone, two, three, four, five, six

Output
Find the sum of the updated values stored inone, two, three, four, five, six

Sample Input 1 
1 2 3 4 5 6
Sample Output 1
48 */

let one=1
let two=2
let three=3
let four=4
let five=5
let six=6

console.log((two*2)+(five*2)+(six*2)+(three*3)+(four*3)+one)