var request = new XMLHttpRequest();
	request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

	request.onload = function() {
	  // Begin accessing JSON data here
	var dataAll = JSON.parse(this.response)
  for(let i=0;i<dataAll.length;i++){
    console.log(dataAll[i].name);
  }
	}

	// Send request
	request.send()
