'use strict';

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class Login {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("int",{ 
        nullable:false, 
        })
    UserID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Account:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100, 
        })
    Password:string;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    Status:number;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    LastLoginTime:Date;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    LastLogoutTime:Date;
        

    @Column("datetime",{ 
        nullable:false, 
        })
    CreateTime:Date;
        

    @Column("varchar",{ 
        nullable:false,
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