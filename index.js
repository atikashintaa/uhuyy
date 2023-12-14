console.log("Atikaaaaa uhuy ihiy");
let nama = 12 / 2;
console.log(nama);

const uang = 1;
//uang=2

console.log(uang);

let a = 5;
let b = 6;
total = a + b;
console.log(total);

/*function nilai(ipk){
    if (ipk> 3.5){
        return 'cumlaude';
            }
            else if (ipk >= 3 && ipk <= 3.5);
{
    return'Baik';
} else 

{
    return 'cukup';
}
}

const contohIPK = 3.8;
const contohGrade = tentukanGrade(contohIPK);

console.log(`Mahasiswa dengan IPK ${contohIPK} mendapatkan grade: ${contohGrade}`);*/

let nilai = 3.5;
//let nilai;
if (nilai >= 3.5 && nilai <= 4) {
  console.log("cumlaude");
} else if (nilai >= 3 && nilai < 3.5) {
  console.log("baik");
} else if (nilai < 3) {
  console.log("cukup");
} else {
  console.log("diluar batas");
}

let ipk = 3.2;
let ipk1 = "atika";
let ipk2 = true;

console.log(typeof ipk);

//let array = [1,2,3,4,5]

//console.log(array[2])
//console.log(array.length)

let array = [3, 9, 8, 5, 10];
//console.log(array[array.length - 3]);

//console.log(array.pop());
//console.log(array);

//console.log(array.push(7));
//console.log(array);

//shift-remove first array
//console.log(array.shift());
//console.log(array);

//unshift - add ney element to array (at the begining)
//console.log(array.unshift(8));
//console.log(array);

//console.log(
//  array.sort(function (a, b) {
//    return a - b;
//  })
//);

//console.log(array.reverse());

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // Jika elemen saat ini lebih besar dari elemen berikutnya, tukar posisinya
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Contoh penggunaan
const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
//bubbleSort(arrayToSort);

console.log("Array sebelum diurutkan:", arrayToSort);
console.log("Array setelah diurutkan:", bubbleSort(arrayToSort));

let aa = false; //integer
let bb = 0; //number

//console.log(aa == bb);

console.log(true ? "FAlse" : "2"); //true= sebelah kiri, false= sebelah kanan
console.log(true);
