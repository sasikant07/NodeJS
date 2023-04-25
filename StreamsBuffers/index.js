const buffer = new Buffer.from("Vishwas");

buffer.write("Codevolution");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON())