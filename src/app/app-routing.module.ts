import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewArticleComponent } from '../app/new-article/new-article.component';
import { ModifyArticleComponent } from '../app/modify-article/modify-article.component';

const routes: Routes = [
  { path: 'new-article', component: NewArticleComponent },
  { path: 'modify-article', component: ModifyArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
