import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieOverview } from '@core/models/movie';
import { ListApiResponse } from '@core/models/movie-shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public list: MovieOverview[];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.http
      .get<ListApiResponse<MovieOverview>>('https://api.themoviedb.org/3/movie/now_playing')
      .subscribe((r) => {
        this.list = r.results;
        this.cdr.detectChanges();
        console.log(r);
      });

    this.http.get('https://api.themoviedb.org/3/tv/popular').subscribe((r) => console.log(r));
    // this.http.get('https://api.themoviedb.org/3/person/popular').subscribe((r) => console.log(r));

    // this.http
    //   .get('https://api.themoviedb.org/3/movie/' + '346698')
    //   .subscribe((r) => console.log(r));
  }
}
