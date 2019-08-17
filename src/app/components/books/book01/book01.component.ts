import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book01',
  templateUrl: './book01.component.html',
  styleUrls: ['./book01.component.css']
})
export class Book01Component implements OnInit {
  pdfSrc: string = '/assets/pdf/AWS Certified Solutions Architect Official Study Guide.pdf';

  constructor() { }

  ngOnInit() {
  }

}
