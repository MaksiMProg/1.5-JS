//1)
let str = 'mozart ';

function isMozartHere(str) {

    if (str.toUpperCase().includes('MOZART')) {
        return true;
    } else {
        return false;
    }
}
console.log(isMozartHere(str));

//2)

function showUppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(showUppercaseFirstLetter(str));

//3)
let books = ['firstbook', 'secondbook', 'thirdbook', 'forthbook'];
console.log(books.pop());
console.log(books.pop());

//4)

let javaScriptTypes = ["number", "null", "undefined", "string", {}, "boolean", 'symbol', 'bigint'];

//5)

let text = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
if (str.indexOf("451 градус по Фаренгейту")) {
    console.log("451 градус по Фаренгейту");
}

//6)
function getRandom(min, max) {

    return Math.floor(Math.random() * (max));
}
console.log(getRandom(1, 100));

//7)
let newStr = "Я учу JavaScript очень мало";
let change = newStr.replace('мало', 'много');
console.log(change);

//8)

let someText = "Дорогой, а вдруг он потеряется?"
if (someText.includes('вдруг') && someText.includes('рассвет')) {
    console.log('Включает')
} else {
    console.log('Не включает');
}

//9)

let colors = ['white', 'black', 'green', 'red'];
colors.shift();
colors.pop();
colors.push('YELLOW');
colors.unshift('BROWN');
console.log(colors);