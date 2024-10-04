namespace dbapp.cds;

using {dbapp.db.master} from './datamodel';

context cdsviews {
    define view ![Plant] as
        select from master.PLANT_DB {
            WERKS as ![PLANT],
            NAME1 as ![DESCRIPTION]
        }
}
