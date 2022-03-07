import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iuser } from '../shared classes/IuserInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (private http:HttpClient) { }
  getUsers():Observable<Iuser[]>{
    return this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError((err)=>{
        return throwError(err.message||"sever error")
      }
        )
    )
  }
}
