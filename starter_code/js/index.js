
//create array with each city
var cities = ['NYC', 'SF' , 'LA' , 'ATX' , 'SYD'];

//show each item in the array when the 'select' is clicked
for (var i=0;i<cities.length;i++){
   $('<option/>').val(cities[i]).html(cities[i]).appendTo('#city-type');
}


//listen for city selection
$('option').select(function () {
	debugger
	//when item in drop down is clicked, get value and set as variable
	var citySelection = $('select').val();

	console.log(citySelection)

	if (citySelection === 'NYC') {
		$('body').attr('class', 'nyc')
	}

	else if (citySelection === 'SF') {
		$('body').attr('class', 'sf')
	}

	else if (citySelection === 'LA') {
		$('body').attr('class', 'la')
	}

	else if (citySelection === 'ATX') {
		$('body').attr('class', 'austin')
	}

	else if (citySelection === 'SYD') {
		$('body').attr('class', 'sydney')
	}

})