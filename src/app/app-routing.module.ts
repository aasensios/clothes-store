import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewArticleComponent } from '../app/new-article/new-article.component';
import { ArticleComponent } from '../app/article/article.component';
import { ClothesManagementComponent } from './clothes-management/clothes-management.component';

const routes: Routes = [
  { path: 'new-article', component: NewArticleComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'clothes-management', component: ClothesManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
