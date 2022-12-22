import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() name: any

  constructor() { }

  ngOnInit() {
  }

  logger() {
    console.log(this.name);
    // console.log('this.name');
  }

}
