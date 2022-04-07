import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  singUpUser: any;

  constructor() {
    this.singUpUser = {}
   }

  ngOnInit(): void {
  }

}
