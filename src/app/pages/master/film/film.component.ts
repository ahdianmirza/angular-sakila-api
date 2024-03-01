import { Component } from '@angular/core';
import { ListApiService } from 'src/app/service/list-api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  constructor(
    private apiService: ListApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getAllFilms().subscribe((response: any) => {
      console.info("Response: ", response);
    })
  }
}
