var shoppingCart = {
    book : 'sunglass',
    sunglass : 3,
    keyboard : 6,
    mouse: 1,
    pen: 22,
    shoes: 9
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

for (var i = 0; i < keys.length; i++){
        var propertyName = keys[i];
        var propertiesValue  = shoppingCart[propertyName];
        console.log(propertyName, propertiesValue);
}