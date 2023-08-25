import { WorkshopService } from './../services/workshop.service';
import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { StringUtilities } from '../utils/string.utilities';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})

export class CatalogComponent implements OnInit {

  courses: Course[] | null = null;
  workshops: Course[] | null = null;

  constructor(
    private courseService: CourseService,
    private workshopService: WorkshopService
  ) { }

  ngOnInit(): void {
    //get all courses
    this.courseService.getAll().subscribe({
      next: (courses: Course[] | any) => {
        if (!courses || courses.error) {
          throw new Error(courses.error);
        }
        this.courses = courses;
        this.courses?.forEach((course: Course) => {
          let description = StringUtilities.removeHtmlTags(course.description);
          description = StringUtilities.shortText(description, 150);
          course.description = description;
        });
      },
      error: (error) => {
        console.error('Error obteniendo los cursos:', error);
      }
    });

    //get all workshops
    this.workshopService.getAll().subscribe({
      next: (workshops: Course[] | any) => {
        if (!workshops || workshops.error) {
          throw new Error(workshops.error);
        }
        this.workshops = workshops;
        this.workshops?.forEach((workshop: Course) => {
          let description = StringUtilities.removeHtmlTags(workshop.description);
          description = StringUtilities.shortText(description, 150);
          workshop.description = description;
        });
      },
      error: (error) => {
        console.error('Error obteniendo los cursos:', error);
      }
    });
  }

}
