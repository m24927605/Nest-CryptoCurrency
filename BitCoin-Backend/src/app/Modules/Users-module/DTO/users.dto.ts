'use strict';

export interface UsersDTO {
    ID: number;
    RoleID: number;
    Name: string;
    Birthday: Date;
    Email: string;
    OtherEmail: string;
    Phone: string;
    CreateTime: Date;
    CreateUser: string;
    ModifiedTime: Date;
    ModifiedUser: string;
    Remark: string;
}