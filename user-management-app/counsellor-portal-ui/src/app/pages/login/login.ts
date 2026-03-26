import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {

  const data = {
    email: this.email,
    password: this.password
  };

  this.auth.login(data).subscribe({

    next: (res: any) => {

      console.log(res);

      // store id (for future APIs)
      localStorage.setItem("counsellorId", res.counsellorId ?? "1");

      this.router.navigate(['/dashboard']);

    },

    error: (err) => {
      alert(err.error || "Invalid Credentials");
    }

  });

}

}
