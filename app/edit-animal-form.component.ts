import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: 'app/edit-animal-form.component.html'
})

export class EditAnimalFormComponent {
@Input() childSelectedAnimal: Animal;
@Output() keepChangesSender = new EventEmitter();

  keepChanges(){
    this.keepChangesSender.emit();
  }
}
