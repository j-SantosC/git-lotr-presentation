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

    // Gimli 

    this.lotrService.getCharacter('5cd99d4bde30eff6ebccfd23').subscribe((character: any) => {
      character = { ...character, image: 'assets/images/gimli.webp' }
      this.characters.push(character)
    });

    // Gandalf 

    this.lotrService.getCharacter('5cd99d4bde30eff6ebccfea0').subscribe((character: any) => {
      character = { ...character, image: 'assets/images/gandalf.jpg' }
      this.characters.push(character)
    });
  }

}
