'use strict';

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

@Entity('Users')
export class Users {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("int",{ 
        nullable:false, 
        })
    RoleID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Name:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    Birthday:Date;
        

    @Column("varchar",{ 
        nullable:false,
        length:100, 
        })
    Email:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    OtherEmail:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:30, 
        })
    Phone:string;
        

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