namespace dbapp.db;

using {
    cuid,
    temporal,
    managed
} from '@sap/cds/common';

context master {
    @cds.persistence.skip
    entity PLANT_DB {
        key WERKS : String(4);
            NAME1 : String(30);
    }

    @cds.persistence.skip
    entity MATERIAL_V {
        key MATERIAL : String(40);
            MATTYPE  : String(4);
            UOM      : String(3);
            PLANT    : String(4);
            MATDESC  : String(40);
            CONDREC  : String(10);
            NETPRICE : Decimal(11, 2);
            CURRENCY : String(5);
    }

    entity Order: cuid {
        key ID        : UUID;
            OrderNum  : String(10);
            PlateCode : String(2);
            PlateNum  : String(5);
            Source    : String(20);
            Kind      : String(20);
            Items     : Composition of  many OrderItem
                            on Items.PARENT_KEY = $self;

    }


    entity OrderItem : cuid {
        key ID           : UUID;
            PARENT_KEY   : Association to Order;
            OrderNum     : Association to Order;
            ItemNum      : String(6);
            Material     : String(40);
            Plant        : String(4);
            MaterialDesc : String(40);
            CondRec      : String(10);
            NetPrice     : Decimal(11, 2);
            Currency     : String(5);
            Quantity     : Decimal(6, 2);
            UoM          : String(3);
    }

}
