import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/app/model/inote';


@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent {

  @Input() note!:INote
  @Output() onsubmit = new EventEmitter<INote>();
  public form:FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      titulo: ['',Validators.required],
      description: [''],
      id:['']
    })
  }

  ngOnInit():void{
    if(this.note && this.note.title){
      this.form.setValue(this.note)
    }
  }

  submit(){
    console.log(this.form);
    let newNote:INote = {
      title:this.form.value.titulo,
      description: this.form.value.description
    }
    this.onsubmit.emit(newNote);
    this.form.reset();
  }
}
