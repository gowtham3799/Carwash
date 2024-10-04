namespace dbapp.db;
using { cuid, temporal, managed } from '@sap/cds/common';
context master {
    
    entity PLANT_DB {
        key WERKS : String(4);
        NAME1 : String(30);
    }

}