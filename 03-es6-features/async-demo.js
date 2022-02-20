async function f() {
  return 1;
}
async function g() {
  throw "Error!!!";
  // return 2;
}

Promise.race([g(), f()]).then(v => console.log(v), err => console.log("Rejected:" + err) ); // 1
// f().then(v => console.log(v));
console.log("Finished.");
