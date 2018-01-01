'use strict';

export interface ILogin {
    readonly ID: number;
    readonly UserID:number;
    readonly Account:string;
    readonly Password:string;
    readonly Status:number;
    readonly LastLoginTime:Date;
    readonly LastLogoutTime:Date;
    readonly CreateTime: Date;
    readonly CreateUser: string;
    readonly ModifiedTime: Date;
    readonly ModifiedUser: string;
    readonly Remark: string;
}