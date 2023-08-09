import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkshopService {

  private apiUrl = environment.apiUrl + '/workshop';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + '/all');
  }

  get(id : number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }

}
