import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  public species: string;
  public name: string;
  public age: number;
  public diet: string;
  public zooLocation: string;
  public caretakers: number;
  public sex: string;
  public like: string;
  public dislike: string;

  public masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 1, 'Carnivore', 'Norther Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Artic Fox', 'Moon', 1, 'Carnivore', 'Norther Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Artic Fox', 'Moon', 1, 'Carnivore', 'Norther Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Ocelot', 'Prince', 2, 'Carnivore', 'Tropical Rain Forest Building', 6, 'male','Laying in the Sun', 'Toys that are not rope-based'),
    new Animal('NorthWest Black Tailed Deer', 'Tinkerbell', 8,'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  newAnimalForm = null;
  selectedAnimal= null;
  animalBio = null;

  addNewAnimalForm(){
    this.newAnimalForm = !null;
  }

  editAnimal(animalToEdit){
    this.selectedAnimal = animalToEdit;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }
  nullAnimalForm(){
    this.newAnimalForm = null;
  }

  nullEditAnimal(){
    this.selectedAnimal = null;
  }

  showAnimalBio(animalBio){
    this.animalBio = animalBio;
  }

  nullAnimalBio(){
    this.animalBio =null;
  }



}
