import { Component, OnInit } from '@angular/core';
import { Countries } from '../countries';
import { CountriesService } from '../countries.service';

@Component({
	selector: 'app-countries-list',
	templateUrl: './countries-list.component.html',
	styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

	countries: Countries[];

	constructor(private countriesService: CountriesService) { }

	ngOnInit(): void {
		this.countriesService.getCountries().subscribe(countries => {
			this.countries = countries;
		});
	}
}
