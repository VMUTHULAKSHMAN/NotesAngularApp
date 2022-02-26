import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';



@NgModule({
  declarations: [
    AddnotesComponent,
    
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
