
/*typeOf array....
const name=["rifat", "sifat", "saiful","sefaul","fahim"]
console.log(name.length);
console.log(name);
console.log(typeof name)


const number=[14,15,16,17,18,19,20,21,22,23]
console.log((number).number.length)
*/

//Array literal 1

const array_name=[]
array_name[0]="rifat"
array_name[1]="sifat"
array_name[2]="fahim"
array_name[3]="Abdulla"
array_name[4]="rubel"
array_name[4]="galib"

console.log(array_name);
console.log(typeof array_name);
console.log(array_name.length);

//Array literal 2
const arr_name=["rifat","sifat","fahim","junaed","sajid"]
arr_name[1]="saiful"
console.log(arr_name.length);
console.log(arr_name ,typeof arr_name);

//Array literal 3

const arrr_num=[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
arrr_num[18]=1111
console.log(arrr_num);
console.log(arrr_num.length);
console.log(typeof arrr_num);

//constructor pattern sentex.use the "new Array" key word..
const nam=new Array();
console.log(nam);

//constructor pattern 2 
const num1=new Array(1,2,3,4,5,6,7,8,9,10);
num1[2]="rifat";
num1[4]=15;
console.log(num1, num1.length);
console.log(typeof num1);

//factory patturn sentex. use the "Array" keyword...
const name1=Array("rifat","jubayer","fahim","fahid","foridul","farhad","sifat","sakoat",);
name1[8]="saiful";
name1[1]="Abdulla";
console.log(name1, name1.length, typeof name1);

//Array traverse....
const arr1=[1,2,3,4,5,6,7,8,9,10];
const a=arr1[1];
const b=arr1[3];
const c=arr1[5];
const d=arr1[7];
const e=arr1[9];
const x=2;
const y=0;
console.log(a,b);
console.log(x+y+8);
console.log(a, b, c, d, e, arr1[x],arr1[y], arr1[x]+arr1[y]);

//Array traverse for loop.....
const arr2=[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<arr2.length;i++){
    console.log(arr2[i]);
}
//......
const arr3=[1,2,3,4,5,6,7,8];
for(let i=0; i<arr3.length;i++){
    console.log(arr3[i])
}