'use strict';

export interface FeaturesDTO {
    ID: number;
    RoleID: number;
    Status: number;
    CanGetQuoteProice: number;
    CanGetHistoryProice: number;
    CanGetNews: number;
    CanChat: number;
    CreateTime: Date;
    CreateUser: string;
    ModifiedTime: Date;
    ModifiedUser: string;
    Remark: string;
}