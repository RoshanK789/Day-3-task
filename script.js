//! Task 1: comparing the two json object:


//* Method one is stringify:
/*
let obj1={
    name:"Person 1",
    age:5
}
let obj2={
    age:5,
    name:"Perosn 1"
}
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
*/

//* Method two is using a function:
/*
let obj1={
    name:"Person 1",
    age:5
}
let obj2={
    age:5,
    name:"Perosn 1"
}
var result;
//! checking the key length for both objects:
if(Object.keys(obj1).length==Object.keys(obj2).length){
    //! enter a for loop if the condition is satisified.
    for(var key in obj1) { 
        //! check both object have the same key and value
        if(obj1[key] == obj2[key]) {
            result="Same value";
        }
        else {
            result="Different value";
        }
    }
}
else {
    result=false;
}
console.log(result);
*/

//! Task 2: XMLHTTPRequest Display  all the country flags in the console :
/*
// creating the XHR object:

var request = new XMLHttpRequest();

// opening a  conncetion to the server

request.open("GET","https://restcountries.com/v3.1/all");

// Sending a request to the server:

request.send();

// response to clinet:
request.onload= function()
{
    var data= JSON.parse(request.response);
    console.log(data);
 
//! using for loop:
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].flags.png);
    }
}

*/
//! Task 3:  XMLHTTPRequest console the country name, sub region and population:
/*
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    for(var result of data)
    {
        console.log("Country name: ",result.name.common,",Sub-Region :",result.subregion,",Population :",result.population);
    }
}
*/