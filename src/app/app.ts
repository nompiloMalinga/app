import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Converter } from './service/converter';

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

  constructor(private con: Converter){}

  submit(){
    this.con.testEndpoint(this.url,this.email)
    .subscribe(res =>{
      this.response = res
    })
  }
}
