window.addEventListener('load', function(e){
	console.log('script.js loadedzzz');
	init();
});

function init(){
	console.log('In init()');

	document.findPlantForm.findPlantButton.addEventListener('click', function(e) {
		e.preventDefault();
		var plantId = document.findPlantForm.plantId.value;
		if(!isNaN(plantId) && plantId > 0){
			getPlant(plantId);
		}
	});

	loadPlants();
	document.addPlantForm.addPlant.addEventListener('click', addPlant);

}

function addPlant(e){
	e.preventDefault();
	console.log('add plant form button clicked');

	let fm = document.addPlantForm;
	let formErrors = verifyFormData(fm.name.value, 
									fm.maxTemp.value, fm.minTemp.value, 
									fm.maxHeight.value, fm.minHeight.value,
									fm.maxHarvestDays.value, fm.minHarvestDays.value,
									fm.maxWater.value, fm.minWater.value,
									fm.maxRootDepth.value, fm.minRootDepth.value,
									fm.maxSoilPh.value, fm.minSoilPh.value,
									fm.maxSunlightHours.value, fm.minSunlightHours.value,
									fm.maxPlantDistance.value, fm.minPlantDistance.value);
	
	let errDiv = document.getElementById('errors');
	errDiv.textContent = '';
	
	let detailsDiv = document.getElementById('details');
	detailsDiv.textContent = '';

	if(formErrors.length > 0){
		let ul = document.createElement('ul');
		for(var i=0; i<formErrors.length; i++){
			let li = document.createElement('li');
			li.textContent = formErrors[i];
			ul.appendChild(li);
		}
		ul.style.color = 'red';
		errDiv.appendChild(ul);
	}
	else{
		document.body.removeChild(fm);
		let ul = document.createElement('ul');
		let li = document.createElement('li');

		li.textContent = 'Name: ' + fm.name.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Temp: ' + fm.maxTemp.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Temp: ' + fm.minTemp.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Height: ' + fm.maxHeight.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Height: ' + fm.minHeight.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Harvest Days: ' + fm.maxHarvestDays.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Harvest Days: ' + fm.minHarvestDays.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Water Per Week: ' + fm.maxWater.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Water Per Week: ' + fm.minWater.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Root Depth: ' + fm.maxRootDepth.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Root Depth: ' + fm.minRootDepth.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Soil Ph: ' + fm.maxSoilPh.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Soil Ph: ' + fm.minSoilPh.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Sunlight Hours: ' + fm.maxSunlightHours.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Sunlight Hours: ' + fm.minSunlightHours.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Max Plant Distance: ' + fm.maxPlantDistance.value;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Min Plant Distance: ' + fm.minPlantDistance.value;
		ul.appendChild(li);

		detailsDiv.appendChild(ul);

		let newPlant = {
			name: fm.name.value,
			maxTemp: fm.maxTemp.value,
			minTemp: fm.minTemp.value,
			maxHeight: fm.maxHeight.value,
			minHeight: fm.minHeight.value,
			maxHarvestDays: fm.maxHarvestDays.value,
			minHarvestDays: fm.minHarvestDays.value,
			maxInchesWaterPerWeek: fm.maxWater.value,
			minInchesWaterPerWeek: fm.minWater.value,
			maxRootDepth: fm.maxRootDepth.value,
			minRootDepth: fm.minRootDepth.value,
			maxSoilPh: fm.maxSoilPh.value,
			minSoilPh: fm.minSoilPh.value,
			maxSunlightHours: fm.maxSunlightHours.value,
			minSunlightHours: fm.minSunlightHours.value,
			maxPlantDistance: fm.maxPlantDistance.value,
			minPlantDistance: fm.minPlantDistance.value
		}

		createPlant(newPlant);
	}
};

function loadPlants(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/plants');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let plants = JSON.parse(xhr.responseText);
				displayPlants(plants);
			}
		}
	}
	xhr.send();
}

function displayPlants(plants){
	let tableTitles = ['Name', 'Temp', 'Height', 'Harvest Days', 'Water', 'Root Depth', 'Soil PH', 'Sunlight', 'Plant Distance'];

	let table = document.getElementById('plantListTable');

	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	for(var t in tableTitles){
		let th = document.createElement('th');
		th.textContent = tableTitles[t];
		tr.appendChild(th);
	}
	thead.appendChild(tr);
	table.appendChild(thead);

	// for(var p in plants[0]){
	// 	let th = document.createElement('th');
	// 	th.textContent = p;
	// 	tr.appendChild(th);
	// }
	// thead.appendChild(tr);
	// table.appendChild(thead);
	
	let tbody = document.createElement('tbody');
	for (const plant of plants) {
		let tr = document.createElement('tr');
		console.log(plant.length);
		//for(var p in plant){
			// let td = document.createElement('td');
			// td.textContent = plant[p];
			// tr.appendChild(td);

			let td = document.createElement('td');
			td.textContent = plant.name;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minTemp + ' - ' + plant.maxTemp;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minHeight + ' - ' + plant.maxHeight;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minHarvestDays + ' - ' + plant.maxHarvestDays;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minInchesWaterPerWeek + ' - ' + plant.maxInchesWaterPerWeek;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minRootDepth + ' - ' + plant.maxRootDepth;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minSoilPh + ' - ' + plant.maxSoilPh;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minSunlightHours + ' - ' + plant.maxSunlightHours;
			tr.appendChild(td);

			td = document.createElement('td');
			td.textContent = plant.minPlantDistance + ' - ' + plant.maxPlantDistance;
			tr.appendChild(td);

		//}

		//DELETE BUTTON START
		let deleteButton = document.createElement('button');
		deleteButton.value = plant.id;
		deleteButton.innerHTML = 'delete';
		deleteButton.addEventListener('click', function(e){
			deletePlant(deleteButton.value);
		});
		//let td = document.createElement('td');
		td = document.createElement('td');
		td.appendChild(deleteButton);
		tr.appendChild(td);
		//DELETE BUTTON END

		//UPDATE BUTTON START
		let updateButton = document.createElement('button');
		updateButton.value = plant;
		updateButton.innerHTML = 'update';
		updateButton.addEventListener('click', function(e){

			e.preventDefault();
			//console.log("parent element: " + e.target.parentElement);
			// let plant = {
			// 	//id: e.target.parentElement.id.value,
			// 	name: e.target.parentElement.name.value
			// };
			let formTitle = document.getElementById('formTitle');
			formTitle.textContent='Update Plant';
			let formButton = document.getElementById('formButton');
			formButton.textContent = 'Update';
			updateForm(plant);
			//updateForm(updateButton.value);
			//updatePlant(updateButton.value);

		});
		td = document.createElement('td');
		td.appendChild(updateButton);
		tr.appendChild(td);
		//UPDATE BUTTON END

		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

function verifyFormData(name, maxTemp, minTemp, maxHeight, minHeight, 
						maxHarvestDays, minHarvestDays, maxWater, minWater,
						maxRootDepth, minRootDepth, maxSoilPh, minSoilPh,
						maxSunlight, minSunlight, maxPlantDistance, minPlantDistance){

	let errors = [];

	if(name === 'null' || name === ''){
		errors.push('Name cannot be empty')
	}
	if(maxTemp === 'null' || maxTemp === ''){
		errors.push('maxTemp cannot be empty')
	}
	if(minTemp === 'null' || minTemp === ''){
		errors.push('minTemp cannot be empty')
	}
	if(maxHeight === 'null' || maxHeight === ''){
		errors.push('maxHeight cannot be empty')
	}
	if(minHeight === 'null' || minHeight === ''){
		errors.push('minHeight cannot be empty')
	}
	if(maxHarvestDays === 'null' || maxHarvestDays === ''){
		errors.push('maxHarvestDays cannot be empty')
	}
	if(minHarvestDays === 'null' || minHarvestDays === ''){
		errors.push('minHarvestDays cannot be empty')
	}
	if(maxWater === 'null' || maxWater === ''){
		errors.push('maxWater cannot be empty')
	}
	if(minWater === 'null' || minWater === ''){
		errors.push('minWater cannot be empty')
	}
	if(maxRootDepth === 'null' || maxRootDepth === ''){
		errors.push('maxRootDepth cannot be empty')
	}
	if(minRootDepth === 'null' || minRootDepth === ''){
		errors.push('minRootDepth cannot be empty')
	}
	if(maxSoilPh === 'null' || maxSoilPh === ''){
		errors.push('maxSoilPh cannot be empty')
	}
	if(minSoilPh === 'null' || minSoilPh === ''){
		errors.push('minSoilPh cannot be empty')
	}
	if(maxSunlight === 'null' || maxSunlight === ''){
		errors.push('maxSunlight cannot be empty')
	}
	if(minSunlight === 'null' || minSunlight === ''){
		errors.push('minSunlight cannot be empty')
	}
	if(maxPlantDistance === 'null' || maxPlantDistance === ''){
		errors.push('maxPlantDistance cannot be empty')
	}
	if(minPlantDistance === 'null' || minPlantDistance === ''){
		errors.push('minPlantDistance cannot be empty')
	}

	return errors;
}

function getPlant(plantId){
	let plant = null;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/plants/' + plantId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				//let plant = JSON.parse(xhr.responseText);
				plant = JSON.parse(xhr.responseText);
				console.log("PLANT: " + plant.name);
				displayPlant(plant);
				//return plant;
			}
			else{
				displayError('Plant not found');
			}
		}
	}
	xhr.send();
	console.log('in get plant before return');
	console.log('Plant name: ' + plant);
	//return plant;
}

function displayPlant(plant) {
	var dataDiv = document.getElementById('plantData');
	dataDiv.textContent = '';
	console.log('Displaying JSON plant: ' + plant);
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.
	  let h1 = document.createElement('h1');
	  h1.textContent = plant.name;
	  dataDiv.appendChild(h1);
	  let ul = document.createElement('ul');
	  let li = document.createElement('li');
	  li.textContent = 'Temp: ' + plant.minTemp + ' - ' + plant.minTemp;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Height: ' + plant.minHeight + ' - ' + plant.maxHeight;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Days to Harvest: ' + plant.minHarvestDays + ' - ' + plant.maxHarvestDays;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Water: ' + plant.minInchesWaterPerWeek + ' - ' + plant.maxInchesWaterPerWeek + ' in./week';
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Root Depth: ' + plant.minRootDepth + ' - ' + plant.maxRootDepth;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Soil Ph: ' + plant.minSoilPh + ' - ' + plant.maxSoilPh;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Sunlight: ' + plant.minSunlightHours + ' - ' + plant.maxSunlightHours;
	  ul.appendChild(li);
	  li = document.createElement('li');
	  li.textContent = 'Plant Distance: ' + plant.minPlantDistance + ' - ' + plant.maxPlantDistance;
	  ul.appendChild(li);
	  dataDiv.appendChild(ul);
	  //getActors(film.id);
	  document.findPlantForm.reset();
  
}

function displayError(msg){
	var dataDiv = document.getElementById('plantData');
	dataDiv.textContent = msg;
}

function createPlant(plant){

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/plants');
	xhr.onreadystatechange = function(){
		if(xhr.readystate === 4){
			// if(xhr.status === 201)
			if(xhr.status < 400){
				let newPlant = JSON.parse(xhr.responseText);
				//can display plant here
			}
			else{
				displayError('Error creating plant ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let plantJson = JSON.stringify(plant);
	xhr.send(plantJson);
}

function deletePlant(plantId){
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/plants/' + plantId);
	xhr.onreadystatechange = function(){
		if(xhr.readystate === 4){
			if(xhr.status < 400){
				let newPlant = JSON.parse(xhr.responseText);
				//can display plant here
			}
			else{
				displayError('Error deleting plant ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	//let plantJson = JSON.stringify(plant);
	xhr.send();
}

// function updatePlant(plantId){
// 	let xhr = new XMLHttpRequest();
// 	xhr.open('PUT', 'api/plants');
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readystate === 4){
// 			// if(xhr.status === 201)
// 			if(xhr.status < 400){
// 				let newPlant = JSON.parse(xhr.responseText);
// 				//can display plant here
// 			}
// 			else{
// 				displayError('Error updating plant ' + xhr.status);
// 			}
// 		}
// 	};
// 	xhr.setRequestHeader("Content-type", "application/json");
// 	let plantJson = JSON.stringify(plant);
// 	xhr.send(plantJson);
// }

function updateForm(plant){
	
	//let plant = getPlant(plantId);
	console.log('Plant: ' + plant);

	let fm = document.addPlantForm;
	console.log("plant: " + plant);
	//TODO: Change title of form field here:
	// fm.formTitle.innerHTML = 'Update Plant: ';

	//fm.name.value = 'test name';

	fm.name.value = plant.name;
	fm.maxTemp.value = plant.maxTemp;
	fm.minTemp.value = plant.minTemp;
	fm.maxHeight.value = plant.maxHeight;
	fm.minHeight.value = plant.minHeight;
	fm.maxHarvestDays.value = plant.maxHarvestDays;
	fm.minHarvestDays.value = plant.minHarvestDays;
	fm.maxWater.value = plant.maxInchesWaterPerWeek;
	fm.minWater.value = plant.minInchesWaterPerWeek;
	fm.maxRootDepth.value = plant.maxRootDepth;
	fm.minRootDepth.value = plant.minRootDepth;
	fm.maxSoilPh.value = plant.maxSoilPh;
	fm.minSoilPh.value = plant.minSoilPh;
	fm.maxSunlightHours = plant.maxSunlightHours;
	fm.minSunlightHours.value = plant.minSunlightHours;
	fm.maxPlantDistance.value = plant.maxPlantDistance;
	fm.minPlantDistance.value = plant.minPlantDistance;
	//fm.

	
}
