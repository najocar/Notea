import { Component } from '@angular/core';
import { INote } from 'src/app/model/inote';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  public color:string = "fff"
  public page:string = 'Inicio';
  public notes:INote[] = [];

  constructor(private noteS:NotesService){
    this.notes = noteS.getNotes();
  }

  refresh(){
    location.reload();
  }

  public removingNote($event:INote){
    console.log("eliminando nota");
    this.noteS.removeNote($event.id);
    let notesUpdate = this.notes.filter((n)=>{
      return n.id!=$event.id;
    })
    this.notes = notesUpdate;  
  }

  public editingNote($event:INote){
    console.log("editando nota");
  }

  // trackByNotes(index:number,item:INote){
  //   return item.id;
  // }
}
