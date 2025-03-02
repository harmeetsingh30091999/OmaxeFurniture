import { Products } from "src/models/products.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
{providedIn: 'root'}
)
export class productservice {
    private products : Products[]=[];

    // common_url : string ="http://localhost:8887/";
    common_url : string ="http://localhost:8486/";
    constructor(private http: HttpClient){
        // console.log("working fine");
    };

    getFirstCategory():Observable<Products>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')   
        let url =`${this.common_url}user/trending/`;
        return this.http.get<Products>(url,{headers:Headers})
    }

    handleError(){

    }

    getSecondCategory():Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')   
        let url =`${this.common_url}user/NewArrivals/`;
        return this.http.get(url,{headers:Headers});
    }

    getThirdCategory():Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')   
        let url =`${this.common_url}user/getfirstCategory/`;
        return this.http.get(url,{headers:Headers});
    }

    registerFormdata(body:any):Observable<any>{
        let url =`${this.common_url}Registration`;
        return this.http.post(url,body);            
    }
    
    loginFormdata(body:any):Observable<any>{
        let url =`${this.common_url}Login`;
        return this.http.post(url,body);
    }

    validateOtp(otp:number):Observable<any>{
        let email=localStorage.getItem("email");
        let url =`${this.common_url}OtpVerification?otp=${otp}&email=${email}`;
        return this.http.get<any>(url);
    }
    
    getProductBasedonCategory(category:string,page:number):Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        let url =`${this.common_url}user/product/category?product_category=${category}&page=${page}`;
        return this.http.get(url,{headers:Headers});
    }

    getSpecificProductDetails(product_id:any):Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        let url = `${this.common_url}user/product_detail?product_id=${product_id}`;
        return this.http.get(url,{headers:Headers});
    }

    getAllCategory():Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')
        let url = `${this.common_url}user/allCategory`;
        return this.http.get(url,{headers:Headers});
    }

    getSearchProducts(search:string):Observable<any>{
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')
        let url = `${this.common_url}user/searchProducts?search_result=${search}`;
        return this.http.get(url,{headers:Headers});
    }
   
}