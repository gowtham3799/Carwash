namespace dbapp.cds;

using {dbapp.db.master} from './datamodel';

context cdsviews {
    define view ![Plant] as
        select from master.PLANT_DB {
            WERKS as ![PLANT],
            NAME1 as ![DESCRIPTION]
        }

    define view ![Order]as
    select from master.Order{
        ID,
        OrderNum,
        PlateCode,
        PlateNum,
        Source,
        Kind,
        Items
    }

    define view ![OrderItem]as
    select from master.OrderItem{
        ID,
        PARENT_KEY,
        OrderNum,
        ItemNum,
        Material,
        Plant,
        MaterialDesc,
        Quantity,
        UoM,
        NetPrice,
        Currency

    }
}
