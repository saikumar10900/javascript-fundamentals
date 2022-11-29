const userDefinedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successful");
    }, 1000);
  });
};

userDefinedPromise().then((promiseResult) => {
    console.log(promiseResult); // Successful
});

