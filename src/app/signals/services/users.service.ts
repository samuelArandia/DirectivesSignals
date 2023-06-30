import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users'

  getUsersByIs( id: number ): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map( resp => resp.data ),
        tap( console.log ),
      );
  }
}
