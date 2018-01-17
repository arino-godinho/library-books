import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookDetailComponent } from './search-books/book-detail/book-detail.component';
import { SearchBooksComponent } from './search-books/search-books.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'collection', component: CollectionComponent },
      { path: 'search', component: SearchBooksComponent },
      { path: 'search/:id', component: BookDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // apenas para debugar - ver no console
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
