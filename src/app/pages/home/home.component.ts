import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import {dataFake} from '../../data/dataFake';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  articles: Article[] = dataFake;
  constructor() {}

  ngOnInit(): void {}
}
