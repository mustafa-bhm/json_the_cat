const request = require("request");

let url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  request(url, function (error, response, body) {
    if (error !== null) {
      callback("error", error, null);
      return null;
    }
    if (response.statusCode !== 200) {
      callback("Response" + response, response.statusCode, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(null);
      return;
    } else {
      const descrip = data[0]["description"];
      callback(null, descrip);
    }
  });
};

module.exports = { fetchBreedDescription };
