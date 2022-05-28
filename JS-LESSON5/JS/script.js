// //1)
let str = 'mozart ';

function isMozartHere(str) {

    return str.toUpperCase().includes('MOZART')

}
console.log(isMozartHere(str));

//2)

function showUppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(showUppercaseFirstLetter(str));

// //3)
let books = ['firstbook', 'secondbook', 'thirdbook', 'fourbook'];
let showLastBook = books.length;
console.log(books[showLastBook - 1]);
console.log(books[showLastBook - 2]);
console.log(books.length);



// //4)

let javaScriptTypes = ["number", "null", "undefined", "string"];
javaScriptTypes.push("bigint", "boolean", "object", "symbol");

console.log(javaScriptTypes);

//5)

let texts = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
let first = texts.lastIndexOf('«');
let last = texts.lastIndexOf('»');
console.log(texts.slice(first + 1, last));


// //6)

function getRandom(min, max) {

    return Math.floor(Math.random() * (max + 1));
}
console.log(getRandom(1, 100));



//7)

let newText = "Я учу JavaScript очень мало";
let change = newText.replace('мало', 'много');
console.log(change);

// //8)

let someText = "Дорогой, а вдруг он потеряется?";
let index = 'вдруг';

function includeText(text, podtext) {
    if (text.includes(podtext)) {
        console.log(text)
    } else {
        console.log('Не включает');
    }
}
includeText(someText, index);


// //9)

let colors = ['white', 'black', 'green', 'red'];
colors.shift();
colors.pop();
colors.push('YELLOW');
colors.unshift('BROWN');
console.log(colors);