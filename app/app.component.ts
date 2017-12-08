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
  public cartakers: number;
  public sex: string;
  public like: string;
  public dislike: string;

  public masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 2, 'Carnivore', 'Norther Trail', 5, 'Female', 'Cool Shade', 'Loud Noises')
  ]
}
