// function reverseInPlace (input){
// let revRes = ""
//     for(let i=input.length - 1; i>=0; i --){
// revRes += input[i] + " "
//     }


//     console.log(revRes);
// }
// reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);

// Splve2:

function reverseInPlace(input) {
    let revRes = input.reverse()

    console.log(revRes);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);
