import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrapyItemsService {
  public  headers = new HttpHeaders({'Accept': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(public httpClient: HttpClient) { }

  // public posturls(){
  //   this.httpClient.post('http://127.0.0.1:8000/ScrapyItem',{url : 'https://www.jumia.com.eg/?gclid=EAIaIQobChMIwuGavsW-3gIVLJPtCh18CQrbEAAYASAAEgIa-_D_BwE'})
  //     .subscribe(x => console.log(x));
  // }
    // headers.append('Accept', 'application/json',);
    // headers.append('Accept', 'text/plain',);



  public getItems(page: number, pageSize: number, searchBy: string = "", params: { param: string, value: string }[]){
    let reqURL = 'http://127.0.0.1:8000/list_items?';
    if ((page != 0) && (pageSize != 0))
      reqURL += `page=${page}&size=${pageSize}&`;
    if (searchBy!="")
      reqURL += `search=${searchBy}&`;
    params.forEach(param => {reqURL += `${param.param}=${param.value}&`;});
    return  this.httpClient.get(reqURL);
  }
}
