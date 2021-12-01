let randomNumber= Math.round(Math.random()*100+5);
const objUser={
    [`Id_${randomNumber}`]:"Random Value"
};
console.log(objUser);

const users=["Luis","Rendon","Miguel","Jose"];

users.forEach((user,index)=>objUser[`Id_${index}`]=user);
console.log(objUser);