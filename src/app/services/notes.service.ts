import { Injectable } from '@angular/core';
import { INote } from '../model/inote';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes:INote[] = [
    {id:1,title:'Nota1',description:'description 1'},
    {id:2,title:'Nota2',description:'description 2'}
  ]

  constructor() { }

  public createNote(newNote:INote){
    /**
     * base de datos -> clave primaria id
     */
    let id=Math.floor(Math.random()*1000);
    newNote.id=id;
    this.notes.push(newNote);
  }

  public removeNote(id:any){
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
  }

  public getNotes():INote[]{
    return this.notes;
  }
}
