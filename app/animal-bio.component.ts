import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-bio',
  templateUrl: 'app/animal-bio.component.html'
})

export class AnimalBioComponent {
  @Input() childSelectedAnimalBio: Animal[];
  @Output() closeBioSender = new EventEmitter();

  closeBio(){
    this.closeBioSender.emit();
  }

}
