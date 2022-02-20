let persons2 = [
  {
    name: 'Michael Harrison',
    parents: {
      mother: 'Melinda Harrison',
      father: 'Simon Harrison',
    }, age: 35
  },
  {
    name: 'Robert Moore',
    parents: {
      mother: 'Sheila Moore',
      father: 'John Moore',
    }, age: 25
  }];
for (let { name: name, parents: { father }, age } of persons2) {
  console.log(`Name: ${name}, Father: ${father}, age: ${age}`);
}