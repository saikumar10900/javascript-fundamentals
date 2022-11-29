const userDefinedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed");
    }, 1000);
  });
};

userDefinedPromise()
    .then((promiseResult) => {
        console.log(promiseResult); 
    }).catch((promiseResultFromReject) => {
        console.log(promiseResultFromReject); // Failed
    });
