import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  form: FormGroup;

  constructor (private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      title: '',
      slots: '',
      description: '',
      category: '',
    })
  }

  handleSubmit() {
    this.http.post('http://localhost:3000/jobs', this.form.value).subscribe({
      next: () => {
        alert('Thêm dữ liệu thành công');
        this.form.reset();
        this.router.navigateByUrl('/list');
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
