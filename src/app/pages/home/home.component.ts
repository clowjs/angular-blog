import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any[] = [
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*DTy8tlNHXGc0g4sB',
      date: 'March 20th, 2022',
      title: 'Introducing Angular v17',
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*aCsnm9viiL5Fo0JC-I_exQ.png',
      date: 'August 15th, 2023',
      title: 'Announcing Angular.dev',
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*1yo17Ov28sa7p33N',
      date: 'January 13th, 2024',
      title: 'New free, interactive Angular course for beginners on Sololearn',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
