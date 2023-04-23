const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppings) => {
    console.log(`Order received! Baking a ${size} pizza with ${toppings}`);
})

emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log("Serving complimentry drink");
    }
});

console.log("Do work before events occurs in the system");
emitter.emit("order-pizza", "large", "mushrooms");