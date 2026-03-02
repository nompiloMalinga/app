import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Converter {

  constructor(private http: HttpClient){}


  testEndpoint(url : string, email : string): Observable<any>{

    const safeUrl = encodeURIComponent(url);
    const safeEmail = encodeURIComponent(email);


    return this.http.get(`https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=${safeUrl}&email=${safeEmail}`);
    

  }
  
}
