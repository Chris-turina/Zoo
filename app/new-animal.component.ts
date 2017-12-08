import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'new-animal',
  templateUrl: 'app/new-animal.component.html'
})

  export class NewAnimalComponent {
  @Input() childNewAnimal;
  @Output() newAnimalSender = new EventEmitter();
  @Output() closeFormSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, zooLocation: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, caretakers, sex, like, dislike)
    this.newAnimalSender.emit(newAnimalToAdd)
  }

  closeForm(){
    this.closeFormSender.emit();
  }


}
