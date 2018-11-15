const add = (a, b) =>{
    return a+b;
}

console.log(add(55,1,1001));

//this keyword

// //1. 報錯，因為第二個function中的 this.name 為 undefined
// const user = {
//     name:'Sharon',
//     cities:['NY','London','Tokyo'],
//     printVisitedPlaces: function(){
//         this.cities.forEach(function(city){
//             console.log(this.name + 'has lived in' + city)
//         });
//     }
// }

// //2. 將第二個 function移除後，便可正常運作，
// //或是在forEach method 上方加上 const that = this，且將 forEach funtion 所有的this都改成that
// const user = {
//     name:'Sharon',
//     cities:['NY','London','Tokyo'],
//     printVisitedPlaces: function(){
//         const that = this;
//         that.cities.forEach(function(city){
//             console.log(that.name + 'has lived in' + city)
//         });       
//     }
// }

// //3. 把第一個function字眼移除，使用ES6 的arrow function
// const user = {
//     name:'Sharon',
//     cities:['NY','London','Tokyo'],
//     printVisitedPlaces(){
//      
//         this.cities.forEach((city)=>{
//             console.log(this.name + 'has lived in' + city)
//         });       
//     }
// }

// //4. map method

// const user = {
//     name:'Sharon',
//     cities:['NY','London','Tokyo'],
//     printVisitedPlaces(){
//         const cityMessage = this.cities.map((city)=>{
//             return this.name + 'has lived in' + city;
//         });
//         return cityMessage;    
//     }
// }

// // 5. 更簡潔的 arrow function
const user = {
    name:'Sharon',
    cities:['NY','London','Tokyo'],
    printVisitedPlaces(){
        return this.cities.map((city)=> this.name + 'has lived in' + city);
         
    }
}

user.printVisitedPlaces();
console.log(user.printVisitedPlaces());

///// challenge area

const multiplier = {
    numbers:[1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=>number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());