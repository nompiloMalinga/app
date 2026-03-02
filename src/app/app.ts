import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Converter } from './service/converter';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

  email = '';
  url = '';
  response:any;
  errorMessage: string | null = null;
  isLoading = false;

  constructor(private con: Converter){}

  submit(){
    this.isLoading = true;
    this.errorMessage = null;
    this.response = null;

    this.con.testEndpoint(this.url, this.email)
      .pipe(retry(2))
      .subscribe({
        next: (res) => {
          this.response = res;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = err?.message || "Connection failed.";
          this.isLoading = false;
        }
      });
}
}
