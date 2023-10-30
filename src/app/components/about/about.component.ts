import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  contentVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.contentVisible = true;
    }, 200);
  }
}
