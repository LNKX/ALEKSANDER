import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-wall-details-form',
  templateUrl: './kelvin-energy-wall-details-form.component.html',
  styleUrls: ['./kelvin-energy-wall-details-form.component.css']
})
export class KelvinEnergyWallDetailsFormComponent implements OnInit {

	wallTypes = [
	{value: 'brickVeneer', viewValue: 'Brick Veneer'},
	{value: 'hebelVeneer', viewValue: 'Hebel Veneer'},
	{value: 'brickCavity', viewValue: 'Brick Cavity'},
	{value: 'FRCWeatherboard', viewValue: 'FRC Weatherboard'},
	{value: 'colorbondClad', viewValue: 'Colorbond Clad'},
	{value: 'EPS50MM', viewValue: 'Expanded Polystyrene Foam (50mm)'},
	{value: 'EPS75MM', viewValue: 'Expanded Polystyrene Foam (75mm)'},
	{value: 'EPS75MM', viewValue: 'Expanded Polystyrene Foam (100mm)'}
	]; 

	wallTypesInput = [undefined];
  constructor() { }

  ngOnInit() {
  }

}
