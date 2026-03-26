import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // dropdown data
  countries: string[] = [];
  states: string[] = [];
  cities: string[] = [];

  // form fields
  name: string = '';
  email: string = '';
  selectedCountry: string = '';
  selectedState: string = '';
  selectedCity: string = '';

  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  // ---------------- API CALLS ----------------

  loadCountries() {
    this.http.get<string[]>('http://localhost:8080/getCountries')
      .subscribe(data => this.countries = data);
  }

  onCountryChange() {
    this.states = [];
    this.cities = [];
    this.selectedState = '';
    this.selectedCity = '';

    if (this.selectedCountry) {
      this.http.get<string[]>(
        `http://localhost:8080/getStates?country=${this.selectedCountry}`
      ).subscribe(data => this.states = data);
    }
  }

  onStateChange() {
    this.cities = [];
    this.selectedCity = '';

    if (this.selectedState) {
      this.http.get<string[]>(
        `http://localhost:8080/getCities?state=${this.selectedState}`
      ).subscribe(data => this.cities = data);
    }
  }

  // ---------------- REGISTER ----------------

  registerUser() {
    const payload = {
      name: this.name,
      email: this.email,
      country: this.selectedCountry,
      state: this.selectedState,
      city: this.selectedCity
    };

    this.http.post('http://localhost:8080/register', payload, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.message = res;
          alert("✅ " + res);
        },
        error: (err) => {
          console.error(err);
          alert("❌ Registration failed");
        }
      });
  }
}