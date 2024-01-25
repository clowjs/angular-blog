import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() id: string = '';
  @Input() hr: string = 'no';
  @Input() img: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
