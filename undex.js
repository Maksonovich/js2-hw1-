// TASK 1
// let patternPhonKG = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/
// let patternPhonRu = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/

// const input = document.querySelector('#PhoneInp');
// const btn = document.querySelector('button')
// const flag = document.querySelector('#flag')

// btn.addEventListener('click', e => {
//     if(patternPhonKG.test(input.value)) {
//         flag.innerHTML = `
//             <div class="RU" >😀KG</div>
//         `
//     }else if (patternPhonRu.test(input.value)) {
//         flag.innerHTML = `
//             <div class="RU">😀RU</div>
//         `
//     }else {
//         console.log("number is not defined");
//     }
// })

// TASK2

// function printArrayValues(arr) {
//  for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], 'array');
//  }
// }
// printArrayValues([1, 2, 3]);

// 
// let arr = 0;

// function printArrayValues () {
//     arr ++;
//     console.log(arr,"array");
//     if (arr === 3) {
//         return
//     }else {
//         return printArrayValues()
//     }
// }
// printArrayValues()

// TASK 3
// let arr = [4,5,6]
// arr.push (7,8,9,10)
// arr.unshift (1,2,3)
// console.log(arr);

// TASK 4

// let arr = [1,2,3,4,5]
// console.log(arr[4]);

// TASK 5

function countChar () {
    let count = "loremipsumdolor "
    console.log(("loremipsumdolor".match(/o/g)));
}
countChar()