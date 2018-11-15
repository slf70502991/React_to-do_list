class Person{
    constructor(name = 'Anonymous', location, age=0){
        this.name = name;
        this.location = location || 'elsewhere';
        this.age = age;
    }
    getGreeting(){
        return 'Hi ' + this.name + '!';
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// Create child class of Person
class Student extends Person{
    constructor(name, age, major){
        super(name, age); // child class 承繼 parent class 的 variables
        this.major = major || 'undecided';
    }

    hasMajor(){
        return !!this.major; // !!undefined 的結果為 false
    }
    getDescription(){ // 重寫一個getDescription函式來覆蓋parent class的版本
        let description = super.getDescription(); //繼承 parent class 中的設定
        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.location = homeLocation || 'anywhere';
    }
    getGreet(){
        let greeting = super.getGreeting();
        if(this.location){
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Sharon Lin', 26, 'London');
console.log(me.getGreet());

const other = new Traveler();
console.log(other.getGreet());