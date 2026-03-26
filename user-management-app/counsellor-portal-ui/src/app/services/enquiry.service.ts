import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn:'root'
})
export class EnquiryService{

private baseUrl="http://localhost:8080/api"

constructor(private http:HttpClient){}

getDashboard(){

const id = localStorage.getItem("counsellorId");

console.log("Counsellor ID from storage:", id);

return this.http.get(this.baseUrl+"/dashboard/"+id);

}

addEnquiry(enquiry:any){

const id = localStorage.getItem("counsellorId");

return this.http.post(this.baseUrl+"/enquiry/add/"+id,enquiry);

}

}