//тернарный оператор
/*let a = 5;
let b = a > 4 ? 'больше' : 'меньше';
console.log(b);*/
/*let acsess = +prompt(
);
let age = acsess > 18 ? 'доступ разрешен' : 'подрасти';
console.log(age);*/
/*let age = +prompt();*/
/*let acsess = +prompt();
switch (acsess) {
    case 1:
    case 2:
    case 3:
    case 17:
        console.log('подрасти');
        break;
    case 18:
    console.log('ну ладно');
    break;
    default:
    console.log('подходит');

}
/*for (let i = 0; i < 10; i++) {
    console.log (i);
    
}*/
/*let array = [1, 2, 3];*/
/*for (let i = 0; i < 10; i++) {
    let a=i%2;
    if(!a){
        console.log(i);
    }
}*/
/*let fact = +prompt();
let b=fact;
let a=1;
for(a;a<b; a++){
    fact = fact * a;
    console.log(fact);
}*/
/*let a= +prompt('Кончное число');
let i=+prompt("Начальное число");
while(i>a){
    i=+prompt('Введите число которое меньше конечного числа', a);
}
let sum=0;
while (i < a) {
  i++;
if(i%2==0){
    // sum=sum+i;
    sum+=i;
    
}

}
alert(sum);*/
/*let a= confirm('Сигнализация включина');
let i= confirm("Дверь открыта");
console.log(a, i);
if(a==true&&i==true){
    
    alert("Нас взамывают");
} else if(a==false&&i==true){
    alert("Мы работаем");
} else if(a==true){
    alert('Все ок');
} else if(a==false||i==true){
    alert('Забыли включить сигнализацию');
}else{
    alert("Ошибка");
}*/
let fact = +prompt();
let i=1;
while(i<100){
    i++;
    fact=fact+i;
    console.log(fact);
}
