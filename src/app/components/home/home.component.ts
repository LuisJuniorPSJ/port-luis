import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contentVisible: boolean = false;

  name: string = 'Luis Fabiano';

  ngOnInit(): void {
    setTimeout(() => {
      this.contentVisible = true;
    }, 100);
  }
}
