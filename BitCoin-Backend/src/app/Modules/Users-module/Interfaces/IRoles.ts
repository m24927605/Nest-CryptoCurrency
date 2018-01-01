'use strict';

export interface IRoles {
    readonly ID: number;
    readonly Name: string
    readonly Status: number
    readonly CreateTime: Date
    readonly CreateUser: string
    readonly ModifiedTime: Date
    readonly ModifiedUser: string
    readonly Remark: string

}