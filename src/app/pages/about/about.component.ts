import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  src = 'https://source.unsplash.com/random';
  url = 'https://api.kanye.rest/';
  mensaje = '';

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    fetch(this.url)
    .then(Response => Response.json())
    .then(data => {
      this.mensaje = data.quote;
    });

    // this.http.get(this.url).subscribe((response) => {
    //   console.log(response);
    // })
  }

}
