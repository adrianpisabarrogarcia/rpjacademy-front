import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})

export class CourseComponent implements OnInit {

  course: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseService.get(params['id']).subscribe(course => {
        if (course.message) this.course = null;
        else this.course = course;
        console.log(this.course);
      });
    });

  }
}
