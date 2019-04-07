import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Clothes } from '../model/clothes';
import { ClothesType } from '../model/clothesType';

import { ClothesService } from '../services/clothes.service';

/**
 * @description Controller for ModifyArticleComponent, written in typescript.
 * @author Alejandro Asensio
 * @version 2019-04-05
 */
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Clothes;
  types: ClothesType[];
  colours: string[];

  // Get the DOM element with #articleForm (id="articleForm")
  @ViewChild('articleForm') articleForm: HTMLFormElement;

  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    // Reset the form if there was some info into it.
    this.articleForm.reset();
    this.articleForm.form.markAsPristine();
    // Note: 'pristine' means not touched (virgin state), although the values are empty, the state may be touched.

    // Get info from service
    this.types = this.clothesService.getClothesTypes();
    this.colours = this.clothesService.getColours();

    // If no article is defined yet, instantiate a new one.
    if (!this.article) {
      this.article = new Clothes();
    }
  }

  /**
   * @description Modifies a given article, selected in the paginated table.
   * @author Alejandro Asensio
   * @version 2019-04-05
   */
  modifyArticle() {
    // // Set a new article in case that it is not passed as a parameter (@Input) from article-management
    // if (!this.article) {
    //   const TODAY = new Date();
    //   this.article.setReservationDate({
    //     date: {
    //       year: TODAY.getFullYear(),
    //       month: TODAY.getMonth() + 1,
    //       day: TODAY.getDate()
    //     }
    //   });
    //   this.article.setReservationTime(this.articleTimes[2]);
    //   this.article.setTablePreference(this.tablePreferences[0]);
    //   this.article.setSpecialRequests([]);
    //   // let dummy: SpecialRequest[] = [];
    //   // this.article.setSpecialRequests(dummy);
    //   this.article.setTotalPrice(15);
    //   // clean fields
    //   this.articleEntryForm.reset();
    //   // pristine = not touched, virgin state; although the values are empty, the state may be touched
    //   this.articleEntryForm.form.markAsPristine();
    //   this.article = new Clothes();
    // }
  }
}
