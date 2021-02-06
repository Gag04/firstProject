import { Component, OnInit } from '@angular/core';
import {ShopsServiceService} from "../../../services/shops-service.service";
import {ShopModel} from "../../../shared/models/shop-model";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {

  shoppingList: ShopModel[] = []

  constructor(private service: ShopsServiceService) { }

  ngOnInit(): void {
    this.shoppingList = this.service.shoppingList;
  }

}
