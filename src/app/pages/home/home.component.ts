import { Component, OnInit } from '@angular/core';
import { mockData } from '../../data/mockData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any[] = mockData;

  main_article: any = {
    id: 1,
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Nmb3_8DCuANFEcfXD7iyEQ.png',
    date: 'September 14th, 2023',
    title: 'Incremental Static Regeneration for Angular',
    link: 'https://blog.angular.io/incremental-static-regeneration-for-angular-c12745ff4b48',
    description: 'In Angular v16 we got a new hydration system. It was also hinted that experiments for partial hydration and resumability are in the works. This is great news for Angular developers, but there is still a lot of work to be done to make Angular apps more performant and SEO friendly.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
