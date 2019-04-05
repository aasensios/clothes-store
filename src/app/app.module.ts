import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesManagementComponent } from './clothes-management/clothes-management.component';
import { ModifyArticleComponent } from './modify-article/modify-article.component';
import { NewArticleComponent } from './new-article/new-article.component';

// Forms
import { FormsModule } from '@angular/forms';

// Directives
import { GreaterThanZeroDirective } from './directives/greater-than-zero.directive';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ClothesManagementComponent,
    ModifyArticleComponent,
    NewArticleComponent,
    GreaterThanZeroDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
