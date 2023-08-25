import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent implements OnInit {
  descriptionHTML: SafeHtml;
  course: Course | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private courseService: CourseService
  ) {
    this.descriptionHTML = this.sanitizer.bypassSecurityTrustHtml('');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.courseService.get(params['id']).subscribe({
        next: (course: Course | any) => {
          if (!course || course.error) {
            throw new Error(course.error);
          }
          this.course = course;
          this.descriptionHTML = this.sanitizer.bypassSecurityTrustHtml(course.description);
          console.log('curso', this.course);
        },
        error: (error) => {
          console.error('Error obteniendo el curso:', error);
        }
      });
    });
  }
}
