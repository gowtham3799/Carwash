const cds = require('@sap/cds');
const SequenceHelper = require("./lib/SequenceHelper");

var ORDERNUMNEXT;

module.exports = cds.service.impl(async function () {
    const db = await cds.connect.to("db");
    const { ZANPR, Plant, Material_V, Order, Payment } = this.entities;

    // this.on("READ",ZANPR, async(req) =>{
    //             const res = await cds.run(`select PLATENUM, PLATECODE, CATEGORYTE, LANE from E0F6ED0C21F0407B81B236882B86899C.ZANPR`)
    //             return res;
    //         })
    // const api = 'xsuaa_api';

    // Get the XSUAA host URL from service binding
    // const xsuaa_bind = JSON.parse(process.env.VCAP_SERVICES).xsuaa[0];
    // const api_def = cds.env.requires[api];
    // api_def.credentials.url = xsuaa_bind.credentials.url;

    // connect to the XSUAA host
    // const xsuaa = await cds.connect.to(api_def);

    // this.before('Plant', async (req, res) => {
    //     let userAttr = req._.user
    //     console.log('Plant', req._.user.is('Plant'))
    //     console.log(req.user.attr.firstname)
    //     return req.user.attr.firstname;
    //   })
    // using req.user approach (user attribute - of class cds.User - from the request object)
    // this.on('userInfo', req => {
    //     const user = {
    //         id: req.user.id,
    //         tenant: req.user.tenant,
    //         _roles: req.user._roles,
    //         attr: req.user.attr
    //     }
    //     var array = user._roles;
    //     for (let i = 0; i < array.length; i++) {
            
    //     }
    //     return user._roles;
    // });

    // // using the XSUAA API
    // this.on('userInfoUAA', async () => {
    //     return await xsuaa.get("/userinfo");
    // });

    this.on("READ", Plant, async (req) => {
        
        var plant = req.user.attr.Plant;
        //var plant = 'TATA'
//        const res = await cds.run(`select WERKS, NAME1 from SDI_DM_HDI_DB_1.ZT001W where WERKS = ${plant}`)
        const res = await cds.run(`select WERKS, NAME1 from SDI_DM_HDI_DB_1.ZT001W where WERKS = '${plant}'`)

        return res;
    })
    this.on("READ", Material_V, async (req) => {
        //const res = await cds.run(`select Material, MatType, UoM, Plant, MaterialDesc, CondRec, NetPrice, Currency from SDI_DM_HDI_DB_1.CARWASHSERVICE_MATERIAL_V`)
        //const res = await cds.run(`select * from SDI_DM_HDI_DB_1.ZMARA`)
        const res = await cds.run(`select MATERIAL, MATTYPE, UOM, PLANT, MATDESC, CONDREC, NETPRICE, CURRENCY from SDI_DM_HDI_DB_1.ZMAT`)
        return res;
    })

    this.before("CREATE", Order, async (context) => {
        const ORDERNUM = new SequenceHelper({
            db: db,
            sequence: "ORDERNUMSEQ",
            table: "DBAPP_DB_ORDER",
            field: "ORDERNUM"
        });

        ORDERNUMNEXT = await ORDERNUM.getNextNumber()
        context.data.ORDERNUM = ORDERNUMNEXT
        //context.data.ITEMS[ 0 ].ORDERNUM_ID = ORDERNUMNEXT
        var array = context.data.ITEMS
        for (let i = 0; i < array.length; i++) {
            array[i].ORDERNUM_ID = ORDERNUMNEXT;
        }
    })

    // this.before("CREATE", Payment, async(context)=>{
    //     var array = context.data.ITEMS
    //     for (let i = 0; i < array.length; i++) {
    //         array[i].ORDERNUM_ID = context.data.;
    //       }
    // })
});


// const cds = require('@sap/cds');


// // module.exports = srv =>{
// //     srv.on('READ', async (req) => {
// //         const res = await cds.run(`select * from ZMATERIAL`)
// //         return res;
// //     });
// // }

// module.exports = cds.service.impl( async function(){
//     const{ Plant } = this.entities;
//     this.on('READ', Plant, async(req) =>{
//         const res = await cds.run(`select WERKS, NAME1 from VM_T001W`)
//         return res;
//     })
// });

// module.exports = cds.service.impl( async function(){
//     const{ ZANPR } = this.entities;
//     this.on('READ', ZANPR, async(req) =>{
//         const res = await cds.run(`select PLATENUM, PLATECODE, CATEGORYTE, LANE from E0F6ED0C21F0407B81B236882B86899C.ZANPR`)
//         return res;
//     })
// });

// // module.exports = cds.service.impl( async function(){
// //     // const{ MaterialPlant } = this.entities;
// //     // this.on('READ', MaterialPlant, async(req) =>{
// //     //     const res = await cds.run(`select WERKS, NAME1 from VM`)
// //     //     return res;
// //     // })
// // })