import { Component, Input, OnInit } from '@angular/core';
import { mockData } from '../../data/mockData'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() id: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() title: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
