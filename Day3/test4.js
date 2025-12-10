const arr=[2, 4, 6, 8];
let double=arr.map(n=>n*2);
console.log("doubled => ", double);

const nums=[10, 25, 30, 5, 60];
let res=nums.filter(n=>n>20);
console.log("filter => ", res);

const nums2=[1, 2, 3, 4, 5];
let x=nums2.reduce((acc, val)=>acc+val, 0);
console.log("total => ", x);