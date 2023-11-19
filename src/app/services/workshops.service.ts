import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})

export class WorkshopsService {

  private apiUrl = environment.apiUrl + '/workshops';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}
