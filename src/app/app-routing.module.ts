import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {path:'movies/:id',component:SingleMovieComponent},
  { path: 'tvs', component: TvComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
