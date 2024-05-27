function cars(c1,c2,c3,c4){
    this.brand1=c1;
    this.brand2=c2;
    this.brand3=c3;
    this.brand4=c4;
}
var obj =new cars("Swift","maruti","end","gh");
console.log(obj);

var arr1=["A","B","C","D","E"]
arr1.splice(2,0,'D','E','F')
console.log(arr1);
console.log(Array.from("Hello"));

var arr2=[10,20,30]
var b=arr2.entries();
console.log(b.next().value);

var arr3=[10,29,40]
arr4=arr3.join('*')
console.log(arr4)
