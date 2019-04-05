import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ClothesType } from '../model/clothesType';
import { CLOTHES_TYPES } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

  getClothesTypes(): any {
    return CLOTHES_TYPES;
  }

}
