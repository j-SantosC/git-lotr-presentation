import { Component } from '@angular/core';
import { characters } from './core/enums/characters.constants';
import { LotrService } from './core/services/lotr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: any[] = [];
  constructor(private lotrService: LotrService) { }

  ngOnInit(): void {

    this.getCharacter(characters.gimli, 'bases', 'assets/images/gimli.webp', 'gimli')
    this.getCharacter(characters.frodo, 'tricks', 'assets/images/frodo.jpg', 'frodo')
    this.getCharacter(characters.gandalf, 'rebase', 'assets/images/gandalf.jpg', 'gandalf')
    this.getCharacter(characters.bilbo, 'Conceptos', 'assets/images/bilbo.jpeg', 'bilbo')
    this.getCharacter(characters.sauron, 'reset y revert', 'assets/images/sauron.webp', 'sauron')

  }

  getCharacter(character: any, chapter: string, image: string, route: string) {
    this.lotrService.getCharacter(character).subscribe((character: any) => {
      character = { ...character, image: image, name: character.docs[0].name + ' ' + chapter, route: route }
      this.characters.push(character)
    }, err => { return {} });
  }
}
