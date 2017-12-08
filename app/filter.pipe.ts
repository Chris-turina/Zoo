import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
name: 'filter',
})

export class FilterPipe implements PipeTransform {

  transform(input: Animal[], desiredSort){
   let output: Animal[] = input;
   let outputTwo: Animal[] = []

   // if (desiredSort === "highToLow"){
   //   input.sort(function(a: Animal, b: Animal){return b.age-a.age})
   //   return output;
   // } else if(desiredSort === "lowToHigh") {
   //   input.sort(function(a: Animal, b: Animal){return a.age-b.age})
   //   return output;
   // } else if(desiredSort === "caretakersHighToLow") {
   //   input.sort(function(a: Animal, b: Animal){return b.caretakers-a.caretakers})
   //   return output;
   // } else if(desiredSort === "caretakersLowToHigh") {
   //   input.sort(function(a: Animal, b: Animal){return a.caretakers-b.caretakers})
   //   return output;
   if (desiredSort === "allAnimals"){
      return output;

    } else if(desiredSort ==="youngerThanTwo") {
     for(let i = 0; i < input.length; i ++){
       if(input[i].age < 2){
         outputTwo.push(input[i]);
         console.log(outputTwo)
       }
     }
     return outputTwo;
   } else if(desiredSort ==="twoAndOlder") {
     for(let i = 0; i < input.length; i ++){
       if(input[i].age >= 2) {
         outputTwo.push(input[i]);
         console.log(outputTwo)

       }
     }
     return outputTwo;
   }
 }
  }
