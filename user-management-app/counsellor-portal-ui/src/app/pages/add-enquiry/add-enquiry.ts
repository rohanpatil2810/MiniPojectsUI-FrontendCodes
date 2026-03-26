import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-add-enquiry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-enquiry.html',
  styleUrl: './add-enquiry.css'
})
export class AddEnquiryComponent {

  enquiry: any = {};

  constructor(private enquiryService: EnquiryService) {}

  save() {

this.enquiryService.addEnquiry(this.enquiry).subscribe({

next:(res)=>{
alert("Enquiry Added Successfully")
},

error:(err)=>{

if(err.status===200){
alert("Enquiry Added Successfully")
}else{
alert("Failed to add enquiry")
}

}

})

}

}