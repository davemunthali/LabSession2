function fetchData(url) {
  // fetch the data
  console.log(`fetching data from ${url}`);
  let data = [1, 2, 3];
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Failed to retrieve the data"));
    }
  });
}

fetchData("http://datasource.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
