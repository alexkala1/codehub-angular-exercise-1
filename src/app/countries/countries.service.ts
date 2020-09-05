import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from './countries';

const url = 'https://restcountries.eu/rest/v2/';

@Injectable({
	providedIn: 'root'
})
export class CountriesService {

	constructor(private http: HttpClient) { }

	getCountries(): Observable<Countries[]> {
		return this.http.get<Countries[]>(url);
	}
}
