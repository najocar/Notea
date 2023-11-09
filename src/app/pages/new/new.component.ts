import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoteComponent } from 'src/app/components/form-note/form-note.component';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/app/model/inote';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,FormNoteComponent],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  constructor(private noteS:NotesService){

  }

  addNote($event:any){
    this.noteS.createNote($event);
  }
}
