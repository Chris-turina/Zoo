import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/animal-list.component.html'
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal [];
  @Output() clickSender = new EventEmitter();
  @Output() showBioClicker = new EventEmitter();
  filterByOption: string = "allAnimals"

  editButtonClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit)
  }

  animalCardClicked(seeAniamlBio: Animal){
    this.showBioClicker.emit(seeAniamlBio)
  }

  onChange(optionFromMenu){
    this.filterByOption = optionFromMenu;
  }
}
