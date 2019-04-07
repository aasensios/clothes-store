import { Component, OnInit, Input, Output } from '@angular/core';

import { Clothes } from '../model/clothes';
import { ClothesType } from '../model/clothesType';

import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.component.html',
  styleUrls: ['./clothes-management.component.css']
})
export class ClothesManagementComponent implements OnInit {

  // Properties get from service
  types: ClothesType[] = [];
  colours: string[] = [];

  // Properties to prepare pagination
  articles: Clothes[] = [];
  articlesFiltered: Clothes[] = [];
  articleSelected: Clothes;

  // Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  // Filter properties
  priceFilter: number;
  colourFilter: string;

  @Input() article: Clothes;
  // @Output() articlesFiltered: Clothes[] = [];

  constructor(private clothesService: ClothesService) { }

  ngOnInit() {
    // Get a desired number of random articles from service
    this.articles = this.clothesService.getRandomArticles(50);

    // Add the element 'ALL' to the colours list
    this.colours = this.clothesService.getColours();
    this.colours.push('ALL');

    // At the end of ngOnInit, initialize pagination properties
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.articles.length;

    // Finally, assign all articles by default with empty filter
    this.articlesFiltered = this.articles;
  }

  filter(): void {
    // Array.filter needs a callback function as a parameter
    this.articlesFiltered = this.articles.filter(
      // Anonimous function as a parameter
      article => {
        let priceValid = false;
        let colourValid = false;
        priceValid = article.price <= this.priceFilter;

        // Check possible errors: undefined (null) or empty string
        if (this.colourFilter && this.colourFilter !== 'ALL') {
          colourValid = article.colour.toLowerCase() === this.colourFilter.toLowerCase();
        } else {
          colourValid = true;
        }

        return (priceValid && colourValid);
      }
    );
  }

  /**
   * Assigns the clicked article to articleSelected property.
   * @param article selected article object
   */
  onSelect(article: Clothes) {
    this.articleSelected = article;

    // TODO the console log remove when finished
    console.log('selected!');
  }

  /**
   * Deletes the selected article.
   * @param article selected article object
   */
  onDelete(article: Clothes) {
    this.articlesFiltered = this.articlesFiltered.filter(a => a.id !== article.id);
  }

}
