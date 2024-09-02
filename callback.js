function sum() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += Math.sqrt(i);
  }
  console.log(sum);
}
function sortLargeArray() {
  const largeArray = Array.from({ length: 1000000 }, () =>
    Math.floor(Math.random() * 1000000)
  );
  largeArray.sort((a, b) => a - b);
}
//setTimeout(() => console.log("another hello world"), 5000);
// setTimeout(sum,1000);
// setTimeout(sortLargeArray,1000)
// setTimeout(()=> console.log("hello wolrd"),1000)

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("Here is the data");
  }, 5000);
}

fetchData((data) => {
  console.log(data);
});
for (let i = 0; i < 10; i++) {
  console.log("Executing the loop code");
}
