using {dbapp.db} from '../db/datamodel';
using {dbapp.cds} from '../db/cdsviews';

service CarwashService @(path:'CarwashService') {

    //entity Plant as projection on db.master.VM_T001W;
    //entity Material_V as projection on db.master.MATERIAL_V;
    //entity Plant as projection on cds.cdsviews.Plant;
    entity Plant as projection on db.master.PLANT_DB;
    //entity ZANPR as projection on db.master.ZANPR;
    // entity MaterialPlant as projection on cds.cdsviews.MaterialPlant;
}
