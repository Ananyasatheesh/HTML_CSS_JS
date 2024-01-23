//Objects
//Declartion - 3 ways (var a = new Object(), var a = {}, key-value pair)

//WAY 1
var studentDetails = {
    "Name": "Sherin",
    "Dept": "ECE",
    "Clg": "KEC", //comma at end of key-value pair is optional
}
console.log(studentDetails);
studentDetails["Rollno"] = "21ECR040"; //adding etc key-value pair
console.log(studentDetails);


//WAY 2
var studentDetails1 = {}
studentDetails1["Name"] = "Ananya";
studentDetails1["Age"] = "19";
studentDetails1["Clg"] = "KEC";
console.log(studentDetails1)

//WAY 3
var prodDetails = new Object();
prodDetails["Name"] = "Airpods"
prodDetails["Price"] = 12000
prodDetails["Brand"] = "Boat"
prodDetails["Colour"] = "Black"
console.log(prodDetails);
console.log(prodDetails.Brand); //path of accessing value throght key is "."
console.log(prodDetails["Brand"]);


//CONTROL/ LOOPING STATEMENT

//WHILE
var sum =0
var i = 0
while(i<10){
    sum+=i
    i++;
}
console.log(sum)

//DO...WHILE
var sum1=0;
var i1=0
do{
    sum1+=i1
    i1++;
}while(i1<10);
console.log(sum1)

//for in array {JS CAN HOLD ALL DATATYPES IN FUNCTION IN ARRAY6}
var arr = [10,20,30]
var arr1 = [10, 10.23, 50]
var arr2 = [10, 10.23, true, false]
var arr3 = [10,"String",30,false]

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("Array with int and float datatype")
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
console.log("Array with int and true datatype")
for(var i=0;i<arr2.length;i++){
    console.log(arr2[i])
}
console.log("Array with int, boolean, String datatype")
for(var i=0;i<arr3.length;i++){
    console.log(arr3[i])
}

//FOR IN - index and value
var arr4 = [10,"String",30,false]
console.log("For in loop")
for (const index in arr4) {
    console.log("Value in", index , "index is", arr4[index]);
}

//FOR OF, FOR EACH - ACCESS VALUES DIRECTLY
//FOR OF
var arr5 = [20, 30, "Hii"]
console.log("For Of Loop")
for (const value of arr5) {
    console.log(value)   
}

//FOR EACH
var arr6 = [90, 78, "Heloo"]
console.log("For Each Loop")
arr6.forEach(element => {
    console.log(element)
}); 

//FOR IN USING OBJECT
var studentDetails2 = {}
studentDetails2["Name"] = "Anan";
studentDetails2["Age"] = "28";
studentDetails2["Clg"] = "PSG";
console.log("For in using Obj")
for (const key in studentDetails2) {
    console.log(key,":", studentDetails2[key]) 
}

