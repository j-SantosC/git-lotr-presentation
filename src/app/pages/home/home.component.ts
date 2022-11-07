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

    // this.getCharacter(characters.gimli, 'bases', 'assets/images/gimli.webp', 'gimli')
    // this.getCharacter(characters.frodo, 'tricks', 'assets/images/frodo.jpg', 'frodo')
    // this.getCharacter(characters.gandalf, 'rebase', 'assets/images/gandalf.jpg', 'gandalf')
    // this.getCharacter(characters.bilbo, 'Conceptos', 'assets/images/bilbo.jpeg', 'bilbo')
    // this.getCharacter(characters.sauron, 'reset y revert', 'assets/images/sauron.webp', 'sauron')

  }

  // getCharacter(character: any, chapter: string, image: string, route: string) {
  //   this.lotrService.getCharacter(character).subscribe((character: any) => {
  //     character = { ...character, image: image, name: character.docs[0].name + ' ' + chapter, route: route }
  //     this.characters.push(character)
  //   });
  // }

}

