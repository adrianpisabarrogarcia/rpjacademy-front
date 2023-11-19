import { Course } from '../models/course.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private apiUrl = environment.apiUrl + '/courses';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}
