// Write your solution below:
/* Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

console.log("hello world")
function makeUnique(string) {
    let mySet = new Set(string.split(''));
    console.log(mySet)
}

console.log(makeUnique("hello"))

function makeUnique2(string) {
    let strArr = string.split('');
    let result = []
    for(let i = 0; i < strArr.length; i++){
    if (!result.includes(strArr[i])){
        result.push(strArr[i])
    }
    result.join('')
}
return result
}
console.log(makeUnique2("hello"))
