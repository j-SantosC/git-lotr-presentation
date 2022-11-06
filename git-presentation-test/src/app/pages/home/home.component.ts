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

    this.getCharacter(characters.gimli, 'bases', 'assets/images/gimli.webp')
    this.getCharacter(characters.frodo, 'tricks', 'assets/images/frodo.jpg')
    this.getCharacter(characters.gandalf, 'rebase', 'assets/images/gandalf.jpg')
    this.getCharacter(characters.bilbo, 'Conceptos', 'assets/images/bilbo.jpeg')
    this.getCharacter(characters.sauron, 'reset y revert', 'assets/images/sauron.webp')

  }

  getCharacter(character: any, chapter: string, image: string) {
    this.lotrService.getCharacter(character).subscribe((character: any) => {
      character = { ...character, image: image, name: character.docs[0].name + ' ' + chapter }
      this.characters.push(character)
    });
  }

}

