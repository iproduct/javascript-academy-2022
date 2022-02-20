'use strict'
// // Expression bodies
// const evens = [2, 4, 6, 8];
// var odds = evens.map(v => v + 1);
// var nums = evens.map((v, i) => v + i);
// var pairs = evens.map(v => ({ even: v, odd: v + 1 }));
// console.log(odds);
// console.log(nums);
// console.log(pairs);


// // Statement bodies
// const evens = [1,2,3,4,5,6,7,8,9, 10];
// const fives = [];
// evens.forEach(v => {
//     if (v % 5 === 0)
//         fives.push(v);
// });
// console.log(fives);

// Lexical this
var bob = {
    name: "Bob",
    friends: ["Alice", "John", "Gerrit"],
    printFriends() {
        this.friends.forEach(friend => {
            console.log(this.name + " knows " + friend)
        });
    }
}

bob.printFriends()