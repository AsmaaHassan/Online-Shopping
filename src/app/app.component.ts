import { Component } from '@angular/core';
import {ScrapyItemsService} from './services/scrapy-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filters = [];
  deals = [];
  currentPage = 1;
  totalItems: number;
  itemsPerPage = 9;
  public searchQuery: string = "";
  is_souqFilter: boolean = false;
  is_jumiaFilter: boolean = false;
  constructor(public scrapyItemservice: ScrapyItemsService)
  {
    // this.filters.push({param:'id', value:'2'});
    this.getItems();
  }

  public pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getItems();
  }

  getItems(){
    this.scrapyItemservice.getItems(this.currentPage, this.itemsPerPage, this.searchQuery, this.filters).subscribe( data =>{
      console.log(data);
      // @ts-ignore
      this.deals = data.results;
      this.totalItems = data['count'];
    });
  }

  doFiltering(){
    this.currentPage = 1;
    this.filters = [];
    if(this.is_souqFilter && ! this.is_jumiaFilter)
      this.filters.push({param:'web_source', value:'souq'});
    if(this.is_jumiaFilter && ! this.is_souqFilter)
      this.filters.push({param:'web_source', value:'jumia'});
    this.getItems();

  }

  searchProduct(){
    this.currentPage =1;
    this.getItems();
  }


}
