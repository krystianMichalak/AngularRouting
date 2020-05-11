import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  save() {
    const pdfUrl = './assets/document.pdf';
    const pdfName = 'document.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  open() {
    this.router.navigateByUrl("/forth-component")
  }
} 
