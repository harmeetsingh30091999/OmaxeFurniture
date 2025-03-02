import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)
export class AdminService{
    // common_url : string ="http://localhost:8887/";
    common_url : string ="http://localhost:8486/";

    constructor(private http: HttpClient){}

    Login(body:any):Observable<any>{
        let url =`${this.common_url}adminlogin`;
        return this.http.post(url,body);
    }

    home():Observable<any>{
        let url =`${this.common_url}admin/home`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.get(url,{headers:Headers,responseType: 'text'});
    }

    AddProduct(formgroup:FormData):Observable<any>{
        let url =`${this.common_url}admin/add_product/`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.post(url,formgroup,{headers:Headers,responseType: 'text'});
    }
    
    getAllProducts(search:String,page:number):Observable<any>{
        let url = `${this.common_url}admin/getAllProducts?search_content=${search}&page=${page}`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.get(url,{headers:Headers});
    }

    DeleteSpecificProduct(productid:number):Observable<any>{
        let url = `${this.common_url}admin/delete_product?product_id=${productid}`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.put(url,{headers:Headers},{responseType: 'text'});
    }

    updateSpecificProduct(formgroup:FormData):Observable<any>{
        let url = `${this.common_url}admin/update_product`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.put(url,formgroup,{headers:Headers,responseType: 'text'});
    }

    getAllOrders(page:number):Observable<any>{
        let url = `${this.common_url}admin/getAllOrders?page=${page}`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.get(url,{headers:Headers});
    }
    
    getAllUsers():Observable<any>{
        let url = `${this.common_url}admin/getAllusers`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.get(url,{headers:Headers});
    }

    SearchUserById(userid:number):Observable<any>{
        let url = `${this.common_url}admin/SearchById?userid=${userid}`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.get(url,{headers:Headers});
    }

    AccountInactive(userid:number):Observable<any>{
        let url = `${this.common_url}admin/Inactive?userid=${userid}`;
        let token = localStorage.getItem('jwt');
        const Headers = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Access-Control-Allow-Origin','*')  
        return this.http.put(url,{headers:Headers},{responseType: 'text'});
    }
}
