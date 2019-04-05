import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ClothesType } from '../model/clothesType';
import { CLOTHES_TYPES, COLOURS } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

  getClothesTypes(): any {
    return CLOTHES_TYPES;
  }

  getColours(): any {
    return COLOURS;
  }

}
