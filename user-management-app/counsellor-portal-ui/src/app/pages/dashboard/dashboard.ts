import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  dashboard: any = {};

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit() {

    this.enquiryService.getDashboard().subscribe({

      next: (res:any) => {

        console.log("Dashboard API response:", res);

        // FIX if response contains nested object
        this.dashboard = res.counsellorDashboard ?? res;

      },

      error: () => {
        console.log("Dashboard API failed");
      }

    });

  }

}