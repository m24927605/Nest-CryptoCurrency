'use strict';

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

@Entity('Roles')
export class Roles {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20, 
        })
    Name:string;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    Status:number;
        

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