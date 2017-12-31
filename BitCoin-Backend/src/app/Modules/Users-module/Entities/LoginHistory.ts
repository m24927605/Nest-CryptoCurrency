'use strict';

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class LoginHistory {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    UserID:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    LoginTime:Date;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    LogoutTime:Date;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    CreateTime:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:50, 
        })
    CreateUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    ModifiedTime:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:50, 
        })
    ModifiedUser:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    Remark:string;
        
}