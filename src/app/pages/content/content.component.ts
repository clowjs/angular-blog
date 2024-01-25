import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../data/mockData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string | null = '0';
  title: string = '';
  description: string = '';
  img: string = '';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    this.setComponentValues(this.id!);
  }

  setComponentValues(id: string) {
    const article = mockData.find(a => a.id == id);
    console.log(article);

    if (article) {
      this.title = article.title;
      this.description = article.description;
      this.img = article.img;
    }
  }

}
