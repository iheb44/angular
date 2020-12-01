import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film';

@Component({
  selector: 'iheb-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input()film:Film = new Film ();
  @Input()index:number;

  constructor() { }
  isChecked{

  }
  ngOnInit(): void {
  }

}
