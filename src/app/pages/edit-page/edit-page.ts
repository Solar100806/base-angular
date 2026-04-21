import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: '',
      slots: '',
      description: '',
      category: ''
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get(` http://localhost:3000/jobs/${id}`).subscribe({
      next: (data: any) => {
        this.form.patchValue(data);
      }
    })
  }

  handleSubmit() {
    const id = this.route.snapshot.params['id'];
    this.http.put(`http://localhost:3000/jobs/${id}`, this.form.value).subscribe({
      next: () => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/list');
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
