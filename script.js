"use strict"

let j="jean"
let p="paul"

let result=checkName(j,p)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);