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
    saleId: number;
    custId: number;
    saleDate: Date;
    totalInvoiceAmount: number;
    discount: number;
    paymentNaration: string;
    deliveryAddress1: string;
    deliveryAddress2: string;
    deliveryCity: string;
    deliveryPinCode: string;
    deliveryLandMark: string;
    isCanceled: boolean;

    constructor() {
        this.saleId = 0;
        this.custId = 0;
        this.saleDate = new Date();
        this.totalInvoiceAmount = 0;
        this.discount = 0;
        this.paymentNaration = '';
        this.deliveryAddress1 = '';
        this.deliveryAddress2 = '';
        this.deliveryCity = '';
        this.deliveryPinCode = '';
        this.deliveryLandMark = '';
        this.isCanceled = false;
    }
}