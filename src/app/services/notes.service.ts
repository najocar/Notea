import { Injectable } from '@angular/core';
import { INote } from '../model/inote';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private dbPath = '/notes';
  notesRef!: AngularFirestoreCollection<any>;

  public notes:INote[] = [];

  public dataSubject = new BehaviorSubject<INote[] | null>([]);

  constructor(private db: AngularFirestore, private loginS: LoginService) {
    this.dbPath = this.loginS.user.id;
    this.notesRef = db.collection(this.dbPath);

    //cargar las notas del servidor
    this.notesRef.get().subscribe(d=>{
      let docs = d.docs;
      this.notes = docs.map(d=>{
        return {id:d.id,...d.data()}
      });
    })
  }

  public async createNote(newNote:INote){
    /**
     * conectar firebase
     */
    try{
      let {id,...newNoteWithoutID} = newNote;
      let dRef:DocumentReference<any> = await this.notesRef.add({...newNoteWithoutID});
      newNote.id=dRef.id;
      this.notes.push(newNote);
    }catch(err){
      console.log(err);
    }
    
  }

  public removeNote(id:any){
    this.notesRef.doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
  }

  public getNotes():INote[]{
    return this.notes;
  }

  public async updateNote(note:INote){
    try{
      let {id, ...noteWithoutID} = note;
      await this.notesRef.doc(note.id?.toString()).update(noteWithoutID);
      this.notes = this.notes.map(n => n.id != note.id?n:note);
      this.dataSubject.next(this.notes);
    }catch(err){
      console.error(err);
    }
  }
}
