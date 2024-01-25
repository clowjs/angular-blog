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
      date: 'November 8th, 2023',
      title: 'Introducing Angular v17',
      link: 'https://blog.angular.io/introducing-angular-v17-4d7033312e4b'
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*aCsnm9viiL5Fo0JC-I_exQ.png',
      date: 'November 6th, 2023',
      title: 'Announcing Angular.dev',
      link: 'https://blog.angular.io/announcing-angular-dev-1e1205fa3039'
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*1yo17Ov28sa7p33N',
      date: 'September 7th, 2023',
      title: 'New free, interactive Angular course for beginners on Sololearn',
      link: 'https://blog.angular.io/new-free-interactive-angular-course-for-beginners-on-sololearn-7a4c4f91810a'
    }
  ]

  main_article: any = {
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
