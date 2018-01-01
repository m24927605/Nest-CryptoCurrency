'use strict';

export interface LoginDTO {
    ID: number;
    UserID:number;
    Account:string;
    Password:string;
    Status:number;
    LastLoginTime:Date;
    LastLogoutTime:Date;
    CreateTime: Date;
    CreateUser: string;
    ModifiedTime: Date;
    ModifiedUser: string;
    Remark: string;
}