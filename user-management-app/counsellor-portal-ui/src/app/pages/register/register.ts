import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  counsellor: any = {};

  constructor(private auth: AuthService,
              private router: Router) {}

  register() {

    this.auth.register(this.counsellor).subscribe({

      next: () => {
        alert("Registration Successful");
        this.router.navigate(['/']);
      },

      error: () => {
        alert("Registration Failed");
      }

    });

  }

}