import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  contentVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.contentVisible = true;
    }, 100);
  }
}
