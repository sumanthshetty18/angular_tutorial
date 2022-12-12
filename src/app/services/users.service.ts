import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url1 = 'https://fakestoreapi.com/users';      //fakestore api
  url2 = 'http://localhost:3000/users';        //json server

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get(this.url1);
  }
  addUser(data:any){
    return this.http.post(this.url2,data)
  }
}
