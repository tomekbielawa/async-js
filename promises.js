
function buyCoffee() {
  return new Promise((resolve, reject) => {
      resolve("Your Coffee" ); // success
      reject(new Error('Something is error wrong!'));
  });
}

buyCoffee()
  .then(function() {
    return drinkCoffee();
  })
  .then(function() {
    return doWork();
  })
  .then(function() {
    return getTired();
  })
  .catch(error => console.log(error));
  
