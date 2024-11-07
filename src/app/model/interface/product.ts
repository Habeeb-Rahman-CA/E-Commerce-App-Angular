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
    custId: number;
    name: string;
    mobileNo: string;
    password: string

    constructor() {
        this.custId = 0
        this.name = ''
        this.mobileNo = ''
        this.password = ''
    }
}

export class IUser {
    UserName: string;
    UserPassword: string

    constructor() {
        this.UserName = '',
        this.UserPassword = ''
    }
}

export class ICart {
    cartId: number;
    custId: number;
    productId: number;
    quantity: number;
    addedDate: Date;

    constructor() {
        this.cartId = 0
        this.custId = 0
        this.productId = 0
        this.quantity = 1
        this.addedDate = new Date()
    }
}

export interface IUserCart {
    cartId: number;
    custId: number;
    productId: number;
    quantity: number;
    productShortName: string;
    addedDate: string;
    productName: string;
    categoryName: string;
    productImageUrl: string;
    productPrice: number;
}

export class IPlaceOrder {
    SaleId: number;
    CustId: number;
    SaleDate: Date;
    TotalInvoiceAmount: number;
    Discount: number;
    PaymentNaration: string;
    DeliveryAddress1: string;
    DeliveryAddress2: string;
    DeliveryCity: string;
    DeliveryPinCode: string;
    DeliveryLandMark: string;
    IsCanceled: boolean;

    constructor() {
        this.SaleId = 0;
        this.CustId = 0;
        this.SaleDate = new Date();
        this.TotalInvoiceAmount = 0;
        this.Discount = 0;
        this.PaymentNaration = '';
        this.DeliveryAddress1 = '';
        this.DeliveryAddress2 = '';
        this.DeliveryCity = '';
        this.DeliveryPinCode = '';
        this.DeliveryLandMark = '';
        this.IsCanceled = false;
    }
}