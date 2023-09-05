import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { DateUtilities } from '../utils/date.utilities';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent implements OnInit {

  course: Course | null = null;
  descriptionHTML: SafeHtml;
  dateFinishRegistration: string = "";
  videoUrl: SafeResourceUrl;


  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private courseService: CourseService
  ) {
    this.descriptionHTML = this.sanitizer.bypassSecurityTrustHtml('');
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
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
          console.log(typeof this.course?.dateFinishRegistration)
          this.dateFinishRegistration = this.course?.dateFinishRegistration ? this.formatDate(this.course?.dateFinishRegistration.toString()) : "";
          const videoId: string = this.course?.video ? this.course?.video.replace("youtube.com/watch?v=", "").replace("http://", "").replace("https://", "").replace("www.", "") : "";
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
          console.log('traza adrian curso', this.course);
        },
        error: (error) => {
          console.error('Error obtaining the course', error);
        }
      });
    });
  }


  formatDate(date: string): string {
    console.log('traza adrian date', date);
    const formattedDate = DateUtilities.fromStringToDate(date);
    return DateUtilities.longDate(formattedDate);
  }
}
