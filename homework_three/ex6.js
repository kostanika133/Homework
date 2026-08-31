let age = Number(prompt('enter your age: '));
let name = prompt('enter your name: ').trim();

if (age<18){
    console.log('you can not enter');
}else if(name==='nino' && age>=21){
    console.log('welcome, WIP');
}else if (age % 2===0 || name==='giorgi'){
    console.log('you get a free drink');
} else{
    console.log('welcome in. enjoy your evning');
}