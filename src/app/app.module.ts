import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotesModule } from './notes/notes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesRoutingModule,
    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent,NotesComponent]
})
export class AppModule { }
