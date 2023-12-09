const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift(name);
}
console.log(cats);

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
console.log(cats);

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
console.log(cats);

function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
console.log(newCats);
console.log(cats);

function prependCat(name){
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
console.log(newCats);
console.log(cats);

function removeLastCat(name){
    const newCats = [...cats];
    newCats.pop(name);
    return newCats;
}
console.log(newCats);
console.log(cats);

function removeFirstCat(name){
    const newCats = [...cats];
    newCats.shift(name);
    return newCats;
}
console.log(newCats);
console.log(cats);