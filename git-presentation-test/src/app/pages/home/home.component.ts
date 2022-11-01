import { Component, OnInit } from '@angular/core';
import { characters } from 'src/app/core/enums/characters.constants';
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

    this.getCharacter(characters.gimli, 'bases')


  }
  getCharacter(character: any, chapter: string) {
    this.lotrService.getCharacter(characters.gimli).subscribe((character: any) => {
      character = { ...character, image: 'assets/images/gimli.webp', name: character.docs[0].name + ' ' + chapter }
      this.characters.push(character)
    });
  }
}
