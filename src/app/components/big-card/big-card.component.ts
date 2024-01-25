import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() img: string = '';
  @Input() description: string = '';
  @Input() title: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
