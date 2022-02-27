import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'listNote', component: ListnotesComponent
      
    },
    {
      path: 'addNote',component: AddnotesComponent
      
    },
  ]),
    
  
  
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
