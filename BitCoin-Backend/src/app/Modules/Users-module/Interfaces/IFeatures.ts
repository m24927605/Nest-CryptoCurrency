'use strict';

export interface IFeatures {
    readonly ID: number;
    readonly RoleID:number;
    readonly Status:number;
    readonly  CanGetQuoteProice:number;
    readonly CanGetHistoryProice:number;
    readonly CanGetNews:number;
    readonly CanChat:number;
    readonly CreateTime: Date
    readonly CreateUser: string
    readonly ModifiedTime: Date
    readonly ModifiedUser: string
    readonly Remark: string

}