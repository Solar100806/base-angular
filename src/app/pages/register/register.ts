import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
      rePassword: ''
    })
  }
  handleSubmit() {
    this.http.post(' http://localhost:3000/register', this.form.value).subscribe({
      next: () => {
        alert('Đăng ký thành công');
        this.router.navigateByUrl('/login');
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
