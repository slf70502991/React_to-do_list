var nameVar = 'Sharon';
var nameVar = 'Shelly';
console.log('nameVar',nameVar);

let nameLet = 'Jan';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

const fullName = 'Sharon Lin';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);