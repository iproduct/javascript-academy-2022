
(function() {
  var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'one');
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'two');
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4100, 'three');
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
  });
  var p5 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'reject for reason');
  });

  // Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  //   console.log(values);
  //   return values;
  // }).catch(err => {
  //   console.log(`Rejected with: ${err}`);
  //   return 'Service call completed.';
  // }).then(result => {
  //   console.log(`Finished normally: ${result}`);
  // }, err => {
  //   console.log(`Rejected: ${err}`);
  // });


  //You can also use .catch
  Promise.race([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
    return Promise.all([p2, p3]);
  }).catch(reason => {
    console.log(`Rejected in first catch: ${reason}`);
    return Promise.reject(`Retrown from catch: ${reason}`);
  }).then(v => {
    console.log(`Resolved in second then clause: ${v}`);
  }, r => {
    console.log(`Rejected in second catch clause: ${r}`);
  });

}) (); //IIFE