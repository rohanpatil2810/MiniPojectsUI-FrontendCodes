import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

 getCountries() {
  return this.http.get<string[]>('http://localhost:8080/getCountries');
}

getStates(country: string) {
  return this.http.get<string[]>(`http://localhost:8080/getStates?country=${country}`);
}

getCities(state: string) {
  return this.http.get<string[]>(`http://localhost:8080/getCities?state=${state}`);
}
}