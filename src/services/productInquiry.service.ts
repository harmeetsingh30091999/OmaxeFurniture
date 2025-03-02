import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetails } from 'src/models/products.model';
@Injectable({providedIn:'root'})
export class ProductInquiry{
    // common_url : string ="http://localhost:8887/";
    common_url : string ="http://localhost:8486/";

    constructor(private http:HttpClient){}

    postInquiry(productid:number):Observable<any>{
        let token = localStorage.getItem('jwt');   
        const body = {'productid': productid};
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')   
        let url =`${this.common_url}user/product/inquiry`;
        return this.http.post(url, body, {headers:Headers});
    }

    getMyInquiry():Observable<any>{
        let token = localStorage.getItem('jwt');   
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')   
        let url =`${this.common_url}user/myinquiry`;
        return this.http.get(url,{headers:Headers})
    }
    
}