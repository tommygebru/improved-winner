const domain = "https://api.giphy.com/v1/gifs/search?";
const key = "jB6c8wuNUxkw9PNM7FjpfVEN04RwokVW";

$("#searchButton").on("click", function(){
  query = $("#searchTerm").val();
	console.log("query: ", query);

	let urlRequest = `${domain}q=${query}&api_key=${key}&limit=1`;
	console.log("urlRequst: ", urlRequest);
const getApi = (urlRequest) => fetch(urlRequest)
.then((response) => {
	if(response.ok){return response.json()}
	else{throw console.log(response.text())}
  })
	.then(json => displayGif(json))
	.catch(error => displayError(error));
});

function displayGif(json){
  console.log("url to display: ", json.data[0].url);
$("#changeImage").attr("src", json.data[0].url);
}
function displayError(error){
  console.log("error: ", error);
}
