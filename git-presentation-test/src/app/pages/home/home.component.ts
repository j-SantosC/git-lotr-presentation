import { Component, OnInit } from '@angular/core';
import { LotrService } from 'src/app/core/services/lotr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  constructor(private lotrService: LotrService) { }

  ngOnInit(): void {

    this.lotrService.getCharacters().subscribe(character => {
      this.characters.push(character)
    });
  }

}
