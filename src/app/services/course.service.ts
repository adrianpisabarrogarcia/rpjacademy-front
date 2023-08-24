import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private apiUrl = environment.apiUrl + '/course';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + '/all');
  }

  get(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }

}
