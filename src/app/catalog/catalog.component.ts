import { WorkshopService } from './../services/workshop.service';
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

  constructor(
    private courseService: CourseService,
    private workshopService: WorkshopService
  ) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });

    this.workshopService.getAll().subscribe(data => {
      this.workshops = data;
    });
  }

  openWorkshop(id : number) {
    this.workshopService.get(id).subscribe(data => {
      console.log(data);
      alert('Workshop: ' + data.name + '\n' + data.description)
    });
  }

}
