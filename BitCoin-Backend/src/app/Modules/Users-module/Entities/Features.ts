'use strict';

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

@Entity('Features')
export class Features {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("int",{ 
        nullable:true, 
        })
    RoleID:number;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    Status:number;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    CanGetQuoteProice:number;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    CanGetHistoryProice:number;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    CanGetNews:number;
        

    @Column("smallint",{ 
        nullable:false,
        default:"((1))", 
        })
    CanChat:number;
        

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
        
}