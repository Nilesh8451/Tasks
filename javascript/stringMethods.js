var name = "Nilesh ganpat Chavan";

console.log("Length ", name.length);
console.log("Index of a ", name.indexOf("a"));
console.log("Index of k ", name.indexOf("k"));
console.log("Index of a ", name.indexOf("a", 9)); //start position is 9
console.log("Last index of a ", name.lastIndexOf("a"));
console.log("Searching for a string Ch", name.search("Ch"));

console.log("Slice ", name.slice(3, 9));
console.log("Slice ", name.slice(-9, -3));
console.log("Slice ", name.slice(3));

console.log("SubString ", name.substring(3, 9));
console.log("SubString ", name.substring(3));

console.log("Substr ", name.substr(3, 9));
console.log("SubStr ", name.substr(3));

console.log("replace ", name.replace("Cha", "NA"));

console.log("uppercase", name.toUpperCase());

console.log("lowercase", name.toLowerCase());

console.log("concat", name.concat(" is an engineer"));

console.log("trim ", name.trim());

console.log("char at 0 ", name.charAt(0));
console.log("charCode at 0", name.charCodeAt(0));

console.log("split", name.split(" "));
