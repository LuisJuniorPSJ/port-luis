import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contentVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.contentVisible = true;
    }, 100);
  }
}
