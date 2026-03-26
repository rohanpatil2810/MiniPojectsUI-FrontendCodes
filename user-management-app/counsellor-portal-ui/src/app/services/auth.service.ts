import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counsellor } from '../models/counsellor.model';

@Injectable({
  providedIn:'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  login(data:any){
    return this.http.post(this.baseUrl + "/login", data);
  }

  register(counsellor: Counsellor){
    return this.http.post(this.baseUrl + "/register", counsellor);
  }

}