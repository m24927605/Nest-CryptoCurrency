'use strict';

export interface IUsers {
    readonly ID?: number;
    readonly RoleID?: number;
    readonly Name?: string
    readonly Birthday?: Date
    readonly Email?: string
    readonly OtherEmail?: string
    readonly Phone?: string
}