import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  courses: any = [];
  workshops: any = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
    this.courseService.getAllWorkshops().subscribe(data => {
      this.workshops = data;
    });
  }

  enterClick() {
    alert("enter click");
  }

}
