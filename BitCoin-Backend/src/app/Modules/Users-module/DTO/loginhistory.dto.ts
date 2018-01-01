'use strict';

export interface LoginHistoryDTO {
    ID: number;
    UserID:number;
    LoginTime:Date;
    LogoutTime:Date;
    CreateTime: Date;
    CreateUser: string;
    ModifiedTime: Date;
    ModifiedUser: string;
    Remark: string;
}