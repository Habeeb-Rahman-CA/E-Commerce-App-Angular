export interface APIResponse {
    message: string,
    result: boolean,
    data: any
}

export interface IProduct {
    productId: number
    productSku: string
    productName: string
    productPrice: number
    productShortName: string
    productDescription: string
    createdDate: string
    deliveryTimeSpan: string
    categoryId: number
    productImageUrl: string
    categoryName: string
}

export interface ICategory {
    categoryId: number
    categoryName: string
    parentCategoryId: number
    userId: null
}

export class ICustomer {
    CustId: number;
    Name: string;
    MobileNo: string;
    Password: string

    constructor() {
        this.CustId = 0
        this.Name = ''
        this.MobileNo = ''
        this.Password = ''
    }
}

export class IUser{
    UserName: string;
    UserPassword: string

    constructor(){
        this.UserName = '',
        this.UserPassword = ''
    }
}