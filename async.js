async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) return response.json();
  else throw new Error("Faile to fetch the data");
}
fetchData("http://localhost:3000/monthly_data")
  .then((data) => {
    console.log(data);
  })
  .then((error) => {
    console.log(error);
  });
