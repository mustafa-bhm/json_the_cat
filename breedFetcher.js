const request = require("request");

let url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

request(url, function(error, response, body) {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Error: Requested breed is not found");
  } else {
    const descrip = data[0]["description"];
    console.log(descrip);
  }
});
