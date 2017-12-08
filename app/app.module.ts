import { NgModule }      from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component'
import { EditAnimalFormComponent } from './edit-animal-form.component'
import { AnimalBioComponent } from './animal-bio.component'
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  EditAnimalFormComponent,
                  AnimalBioComponent,
                  FilterPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
