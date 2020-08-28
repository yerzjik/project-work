'use strict';

console.log('arr' + " - object"); //строка 
console.log(4 + +"5"); //(+унарный)перед аргументом строкой превращает в числовой тип данных
//инкремент и декремент
let incr = 10,
    decr = 10;

// incr++; //postfix
// decr--;
//++incr;  prefix
//--decr;
console.log(incr++);
console.log(decr--);

console.log(5 % 2);

console.log(2 * 4 == 8); //znak ravenstva
console.log(2 * 4 == '8'); //prevrashaem 8 vstroku sravnenye po znacheniu a ne po tipu dannyh
console.log(2 * 4 === 8); //strogoe ravenstva 
//logic.operatory и(&&)и это правда и это правдо ,или(||) или это правдо или этоправда ит.д

const isCheked = true, //присваиваем значение правды
    isClose = false;
console.log(isCheked && isClose); // опреатор && возвращает правду если оба выражение верны 
console.log(isCheked || isClose); // хотябы одиниз аргументов правдивы
console.log(isCheked || !isClose); //оператор отрицания

console.log(2 + 2 * 2 != "6") // != переводится как неравен
console.log(2 + 2 * 2 !== "6") // !== строго по типу неравен