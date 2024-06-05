import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contentVisible: boolean = false;
  isModalOpen: boolean = false;

  openModal(event: MouseEvent): void {
    // event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.contentVisible = true;
    }, 100);
  }
}
