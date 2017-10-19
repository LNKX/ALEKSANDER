import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-floor-details-form',
  templateUrl: './kelvin-energy-floor-details-form.component.html',
  styleUrls: ['./kelvin-energy-floor-details-form.component.css']
})
export class KelvinEnergyFloorDetailsFormComponent implements OnInit {

	readonly MAX_STOREYS = 4;
	selectedFloorType = [];
	floorTypes = [
		{value: 'concreteSlab', viewValue: 'Concrete slab'},
		{value: 'suspendedTimber', viewValue: 'Suspended timber'},
		{value: 'suspendedSlab', viewValue: 'Suspended slab'},
		{value: 'wafflePod', viewValue: 'Waffle pod'}
	]; 

	insulationTypes = [
		{value: 'aircell', viewValue: 'Aircell'},
		{value: 'foilboard', viewValue: 'Foilboard'},
		{value: 'sisalationFoil', viewValue: 'Sisalation Foil'},
		{value: 'batts', viewValue: 'Batts'}
	];


	storeyNumber = [undefined];
	floorTypesInput = []
	floorAreasInput = [];
	insulationTypesInput = [];
	battValueInput = [];
	testing = [true];

	storeyData = [{floorTypes: [],floorAreas:[], insulationTypes:[], battValue: []}];


	trackByFn(index){
	 return index;
	}

	deleteFloor(index){

		this.storeyData.splice(index,1);

	}
	incrementStoreyNumber(){
		
		this.storeyData.push({floorTypes: [],floorAreas:[], insulationTypes:[], battValue: []});

	}

	debugFunction(){

		this.testing[1]= true;
		console.log(this.storeyData)

	}


  constructor() { }


  ngOnInit() {
	

  }



}
// why aren't we using an object to keep all of our data?
// https://stackoverflow.com/questions/46658597/angular-ngfor-with-ngmodel-using-select-has-unexpected-binding