import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-page',
  imports: [RouterLink],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
  jobs: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/jobs").subscribe({
      next: (data: any) => {
        this.jobs = data;
      }
    })
  }

  handleDelete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa không?')) {
      this.http.delete(` http://localhost:3000/jobs/${id}`).subscribe({
        next: () => {
         this.jobs = this.jobs.filter(item => item.id !== id);
          alert('Xóa thành công')
        },
        error: (error: any) => {
          console.log('Xóa thất bại: ' + error);
        }
      })
    }
  }
}
