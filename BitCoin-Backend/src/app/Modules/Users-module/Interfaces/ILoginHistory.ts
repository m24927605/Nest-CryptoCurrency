'use strict';

export interface ILoginHistory {
    readonly ID: number;
    readonly UserID:number;
    readonly LoginTime:Date;
    readonly LogoutTime:Date;
    readonly CreateTime: Date;
    readonly CreateUser: string;
    readonly ModifiedTime: Date;
    readonly ModifiedUser: string;
    readonly Remark: string;
}