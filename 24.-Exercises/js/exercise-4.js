//3) Program a function that, given a String, returns an Array of texts separated by a certain character, eg. myFunction ('hello what's up', '') will return ['hello', 'what', 'so'].
const stringToArray=(text="",separator=undefined)=>(!text)?console.warn("Please introduce a String value"):(separator===undefined)?console.warn("You have to introduce the Separtor"):console.log(text.split(separator));

stringToArray("Hi CxrlosMX"," ");
stringToArray("1,2,3,4,5,6",",");