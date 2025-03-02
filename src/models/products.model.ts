export class Products{
    constructor(
        public product_id:number,
        public product_name:string,
        public product_description:string,
        public product_discounted_price:string,
        public date1:string,
        public product_price:string,
        public product_category:string,
        public product_img:string,
    ){}
}

export class productDetails{
    constructor(
        public date1:string,
        public product_category:string,
        public product_description:string,
        public product_discounted_price:string,
        public product_id:number,
        public product_img:string[],
        public features:string[],
        public product_name:string,
        public product_price:string
    ){}
}
export class MyInquiry{
    constructor(
        public category:string,
        public date2:Date,
        public product_id:number,
        public product_img:string,
        public product_name:string
    ){}
}
export class Orders{
    constructor(
        public userid:number,
        public product_id:number,
        public product_price:string,
        public product_discounted_price:string,
        public product_name:string,
        public product_category:string,
        public date2:Date,
        public product_img:string,
    ){}
}
export class Users{
    constructor(
        public userid:number,
        public fullName:string,
        public username:string,
        public gstno:string,
        public pancard:string,
        public usernumber:string,
        public adharcard:string,
        public email:string,
        public userloggedIn:boolean
    ){}
}

