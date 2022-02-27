import { Component, OnInit } from '@angular/core';
import { INotes,Notes } from '../note.model';
import { NotesService,IGist,Gist } from '../notes.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  notes ?: INotes[];
  title = "NotesList";

  constructor(protected noteservice : NotesService) { 
  }
  ngOnInit(): void {
    this.loadnotes();
  }
  loadnotes(){
    this.noteservice.loadGist().subscribe({
      next: ( res: HttpResponse<IGist[]>) => {
        console.log(res.body);
        //this.notes = res.body?.map( gist => new Notes(gist.Id,gist.url)) ?? [];
        this.notes = res.body?.map( Gist => new Notes(Gist.id, Gist.url)) ?? [];
      },
      error : () => {
        console.log("error");
      },
      
    });
  }
}
