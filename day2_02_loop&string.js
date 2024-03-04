/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

const { listenerCount } = require("process");

console.log("Looping Starts");

function sum(n)
{
    let s=0;
    for(let i=0;i<=n;i++)
    {
        s=s+i;
    }
    
    return s;

}

function lengthofLastWord(word){
    
console.log("length of the last word in the string");
let splitword = word.split(" ");
console.log("Length of last word:" +splitword[splitword.length-1].length);
}

function anagram(word1,word2)
{
   
    
// 1) convert the input into characters
let charword1 = word1.split("").sort();
console.log("converted character" +charword1);
let charword2 = word2.split("").sort();
console.log("converted character" +charword2);
if(charword1.length != charword2.length)
return false;
if(charword1.join("")==charword2.join("")) 
return true;
else
return false;
}
let isanagrams = anagram("listen","silent");
if (isanagrams == true)
{
 console.log("Yes its an anagram");
}
else if (isanagrams == false)
{
    console.log("No its not an anagram");
}
// Function Calls
// Loop
let finalsum = sum(10);
console.log("Final Sum",+finalsum   );
// String 1
lengthofLastWord("Im learning Javascript");
// String Reverse
function reverse(yourName)
{
    let rev=[];
    
    for (let j=yourName.length-1; j>=0; j--)
    {
        console.log(yourName.charAt(j));
        rev[j]=yourName.charAt(j);
    }
    let rev_Name=rev.join("");
   
    return rev_Name;

}

// 3) concate the string
let yourName = "madam"
// 4) print the new string	
let reversed_Name =reverse(yourName);

if (reversed_Name == yourName)
{
 console.log("Yes its an Palindrome");
}
else
{
    console.log("No its an Palindrome");
}






















