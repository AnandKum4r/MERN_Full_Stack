/*
1. Declare an array named `teaFlavors` that contains the string `"green tea"`,`"black tea"` and `"oolong tea"`.
    Access the first element of the array and store  it in a variable named `firstTea`.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
// An array with 3 strings (tea flavors)
const firstTEA = teaFlavors[0];
// Access the first item in the array using index 0 and store it in 'firstTEA'
console.log(firstTEA);
// Output: "green tea"

/*
2. Declare an array named `cities` containing `"London"`,`"Tokyo"`,`"Paris"` and `"New York"`.
    Acces the third element in the array and store it in a variable named `favoriteCity`
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
// An array of 4 city names
const favoriteCity = cities[2];
// Access the city at index 2 → which is "Paris"
// (Remember: arrays start at index 0)
console.log(favoriteCity);
// Prints: Paris

/*
3. You have an array named `teaTypes` containing '"herbal tea"',`"white tea"`and `masala tea`
    Change the second element of array to `"jasmine tea"`
*/
let teaTypes = ["herbal tea", "white tea", "masala tea"];
// An array with 3 types of tea
teaTypes[1] = "jasmine tea";
// Replaces the element at index 1 ("white tea") with "jasmine tea"
console.log(teaTypes);
// Prints the updated array

/*
4. Decalre an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`
    Add `"Berlin"` to the array using the `push` method
*/

// 1st method
/*
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[2] = "Berlin"; //problem is that it will not push agar length se kam index diya to overide kar dega
console.log(citiesVisited);
*/

// 2nd Method
/*
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[citiesVisited.length]="Berlin" //it will push element at max length of array
console.log(citiesVisited);
*/

//3rd Method
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); //by using push method easy way to do
console.log(citiesVisited);

/*
5. You have an array named `teaOrders` with `"chai"`,`"iced tea"`,`matcha` and `"earl grey"`
    Remove the last element of the array using the `pop` method and stiore it in variable named `lastOrder`
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// const lastOrder = teaOrders.pop(3);
const lastOrder = teaOrders.pop(); //pop will automatically pop the last element no need to give index
console.log(teaOrders);
console.log(lastOrder);

/*
6. You have an array named `popularTeas` containing `"green tea"`,`"oolong tea"` and `"chai"`
    Create a soft copy of this array named `softCopyTeas`
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
// let var1 = 5;
// let var2 = var1; //var2 will get copy of var1
// var1 = 9; //it wil still print 5 not 9
// // varibale value changes when we try to do same kind of activity with the array
// console.log(var2);

let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
//any changes is done in the original vaiable the soft copy also reflect those changes
console.log(popularTeas);

/*
7. You have an array named `topCities` containing `"Berlin"`,`"Singapore"` and `"New York"`.
    Create a hard copy of this array named `hardCopyCities`
*/
let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"` 
    Merge these two array into a new array named `worldCities`
*/
let europeanCities = ["Paris", "Rome", "asianCities"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/*
9. You have an array named `teaMenu` containing `"masala tea"`,`"oolong tea"`,`"green tea"` and `"earl grey"`
    Find the leght of the array and store it in a variable named `menuLength`
*/
let teaMenu = ["Masala Tea", "Oolong tea", "Green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

/*
10. You have an array named `cityBucketList` containing `"Kyoto"`.`"London"`,`"Cape Town"`,and `"Vancouver"`
    check if `"londer"` is in the array and store the result in a variable named `isLondonInList`
*/
let cityBucketList = ["kyoto", "London", "Cape Twon", "Vancouver"];
let isLondonInList = cityBucketList.includes("London"); //true
// let isLondonInList = cityBucketList.includes("london");  //false because it will check exact match
console.log(isLondonInList);
