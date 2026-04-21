import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
    this.http.post('http://localhost:3000/login', this.form.value).subscribe({
      next: () => {
        alert('Đăng nhập thành công');
        localStorage.setItem('user', JSON.stringify(this.form.value)
      ); 
        const user = localStorage.getItem('user');
        console.log(user);
        this.form.reset();
        this.router.navigateByUrl('/list');

      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
