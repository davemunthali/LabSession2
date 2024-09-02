fetch("http://localhost:3000/jan_data")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("failed to fetch the data");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
