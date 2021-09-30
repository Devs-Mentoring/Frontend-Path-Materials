import axios from "axios"
// Test base function

export function add(a,b) {
    return a+b;
}

export function isNull(){
    return null;
}

export function isUndefined() {
  return undefined;
}

// Test with arrays
export function cloneArray(arr){
    return [...arr]
}

// Test with objects
export function humanFactory(sex,firstName,lastName) {
    return {
        sex,
        firstName,
        lastName
    }
}

// Test classes
export class Calculator{
    multiply(a,b){
        return a*b;
    }
    divide(a,b){
        if(b===0){
            throw new Error("Cant divide by 0");
        }
        return a/b;
    }
}

// Test async function jest
export function getUser(){
    return axios.get("https://jsonplaceholder.typicode.com/users/1").then(res=>res.data).catch(err=>'error');
}

// Test with mock

export function pow(a,b) {
    return a**b;
}

export async function makeRequest(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
}