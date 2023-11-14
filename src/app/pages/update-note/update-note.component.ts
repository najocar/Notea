import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INote } from 'src/app/model/inote';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { FormNoteComponent } from 'src/app/components/form-note/form-note.component';

@Component({
  selector: 'app-update-note',
  standalone: true,
  imports: [CommonModule, FormNoteComponent],
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent {

  public note:INote = {id:'', title:'', description:''}
  public id = this.note.id;

  constructor(
    private ra:ActivatedRoute,
    private noteService:NotesService,
    private router:Router
    ){}

  ngOnInit(){
    this.ra.params.subscribe(params => {
      if(params){
        let aux = this.noteService.getNote(params['id']);
        console.log(this.note);
        console.log(aux);
        
        if(aux) this.note.id = aux.id;
        this.id = this.note.id;
        console.log(this.note);
      }
    })
  }

  async onSubmit(note:INote){
    note.id = this.id;
    console.log(note)
    await this.noteService.updateNote(note);
    this.router.navigate(['notes']);
  } 
}
