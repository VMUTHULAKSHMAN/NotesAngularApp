import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from './note.model';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  resourceUrl = "https://api.github.com/gists/e4f036f9dea69521ae4b903bc760696e";
  constructor(private http: HttpClient) { }

   loadGist(): Observable<HttpResponse<Notes[]>>{
     
    return this.http.get<Notes[]>(this.resourceUrl, { observe: 'response'});
   }
}

// export interface INotes{
//   Id?: string,
//   url?: string
// }
// export class notes implements INotes{
//   constructor(Id?: string,url?: string){}
// }