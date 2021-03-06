'use strict';

export interface IUsers {
    readonly ID: number;
    readonly RoleID: number;
    readonly Name: string
    readonly Birthday: Date
    readonly Email: string
    readonly OtherEmail: string
    readonly Phone: string
    readonly CreateTime: Date
    readonly CreateUser: string
    readonly ModifiedTime: Date
    readonly ModifiedUser: string
    readonly Remark: string

}