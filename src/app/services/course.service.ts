import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private api_url = environment.apiUrl + '/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get(this.api_url + '/all');
  }


}
