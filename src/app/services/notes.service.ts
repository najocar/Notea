import { Injectable } from '@angular/core';
import { INote } from '../model/inote';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private dbPath = '/notes';
  notesRef!: AngularFirestoreCollection<any>;

  public notes:INote[] = [];

  constructor(private db: AngularFirestore) {
    this.notesRef = db.collection(this.dbPath);
  }

  public async createNote(newNote:INote){
    /**
     * conectar firebase
     */
    try{
      let dRef:DocumentReference<any> = await this.notesRef.add({...newNote});
      newNote.id=dRef.id;
      this.notes.push(newNote);
    }catch(err){
      console.log(err);
    }


    
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
