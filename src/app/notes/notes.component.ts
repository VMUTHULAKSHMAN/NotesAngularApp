import { Component, Injectable, OnInit } from '@angular/core';
import { INotes, Notes } from './note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notes ?: INotes[];
  constructor() { 
    
  }
  dummy(){
    return[new Notes(1,'One'),new Notes(2,'Two'),new Notes(3,'Three'),new Notes(4,'Four'),new Notes(5,'Five')];
    //return [];
  }
  ngOnInit(): void {
   this.notes = this.dummy();
  //  this.notes?.forEach(eachElement => {
  //    console.log(eachElement.content?.length);
  //  });
  }
  

  
}
