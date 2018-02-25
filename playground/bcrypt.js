var bcrypt = require("bcrypt");

var result = bcrypt.hashSync("12345", 10);

console.log(result);

// $2a$10$1cLOT6Dfh4MdRb.tjNQs/Ox.wNHZ7D3/B6vhd.2ek5JkNMs.m6mWW
