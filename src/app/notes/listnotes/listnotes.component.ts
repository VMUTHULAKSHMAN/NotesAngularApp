import { Component, OnInit } from '@angular/core';
import { INotes,Notes } from '../note.model';
@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  notes ?: INotes[];
  length ?: number;
  constructor() { 
    
  }
  dummy(){
    
    //return [];
  }
  ngOnInit(): void {
    this.notes = [
      {Id:1,content:"One"},
        {Id:2,content:"Two"},
        {Id:3,content:"Three"},
        {Id:4,content:"Four"}
    ];
    this.length=this.notes.length;
  //  this.notes?.forEach(eachElement => {
  //    console.log(eachElement.content?.length)
  //  });
    console.log(this.notes)

  }

}
