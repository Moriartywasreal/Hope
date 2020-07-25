import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Category } from '../model/category';
import { Content } from '../model/content';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apiURL: string = 'http://localhost:8080/api';
  apiURL: string = 'http://3.20.227.53:8080/api';

  contentData : any;
  categoryData : any;

  constructor(private httpClient: HttpClient) {}

  public getCategories(){
    // return this.httpClient.get<Category[]>(`${this.apiURL}/categories`)
    //       .retry(2)
    //       // .catch(e => this.handleError("Get Users Error", e));
    return this.httpClient.get<Category[]>(`${this.apiURL}/categories`);
  }

  public getCategoryById(cat_id){
    console.log(cat_id);
    
    return this.httpClient.get<Category>(`${this.apiURL}/categories/`+cat_id);
  }

  public getContents(){
    return this.httpClient.get<Content[]>(`${this.apiURL}/Content`);
  }

  public getContentById(content_id){
    return this.httpClient.get<Content>(`${this.apiURL}/Content/`+content_id);
  }

  public getContentsByCategoryId(cat_id){
    return this.httpClient.get<Content[]>(`${this.apiURL}/Content/?categories_id=`+cat_id);
  }

  public addCategory(data){
    console.log("addCategory stored", data);
    this.categoryData = {
      ...( this.categoryData ? this.categoryData : {} ),
      ...JSON.parse(JSON.stringify(data.value))
    }
    console.log(this.categoryData)
    return this.httpClient.post<Content>(`${this.apiURL}/categories/`, this.categoryData);
  }

  public updateCategory(data){
    console.log("updateCategory stored", data);
    this.categoryData = {
      ...( this.categoryData ? this.categoryData : {} ),
      ...JSON.parse(JSON.stringify(data.value))
    }

    console.log(this.categoryData)
    return this.httpClient.put<Content>(`${this.apiURL}/categories/`+this.categoryData.id, this.categoryData);
  }

  public approveContent(data){
    console.log("stored", data);
    this.contentData = {
      ...(this.contentData ? this.contentData : {}),
      ...JSON.parse(JSON.stringify(data.value))
    }

    console.log(this.contentData);
    return this.httpClient.put<Content>(`${this.apiURL}/Content/`+this.contentData.id, this.contentData);
  }

  public postContent(data){
    return this.httpClient.post<Content[]>(`${this.apiURL}/Content/`, data);
  }
}
