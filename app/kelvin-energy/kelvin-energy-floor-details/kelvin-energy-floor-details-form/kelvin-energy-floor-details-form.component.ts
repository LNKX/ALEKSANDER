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

	//debugme = [undefined];
	//storeyData = 	[{floorTypes: [], floorAreas:[]}];
	//storeyDataTemplate = 	{floorTypes: [], floorAreas:[]};
	storeyNumber = [undefined];
	floorTypesInput = []
	floorAreasInput = [];

	deleteFloor(index){
		this.storeyNumber.splice(index,1);
		this.floorTypesInput.splice(index,1);
		this.floorAreasInput.splice(index,1);


	}
	incrementStoreyNumber(){
		
		//this.storeyData.push(this.storeyDataTemplate);
		//this.debugme.push([]);
		this.storeyNumber.push([]);
		this.floorTypesInput.push([]);
		this.floorAreasInput.push([]);
		// try using iterable objects?s
		console.log(this.floorTypesInput);
		//console.log(this.floorAreasInput);
		//console.log(this.debugme);
		//for (let i=0, x = this.storeyData.length; i<x; i++){
		//console.log(this.storeyData[i].floorTypes[0])
		//}
	}

	trackByFn(index, item)
	{return item.name} 


  constructor() { }


  ngOnInit() {
	

  }



}
// [storey1 [
//            [storey1floortype1, storey1floortype2],
// [storey1floor1ty]], storey 2 []]