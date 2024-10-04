module.exports = cds.service.impl( async function(){ 
    const { ZANPR, Plant, Material_V } = this.entities;

    // this.on("READ",ZANPR, async(req) =>{
    //             const res = await cds.run(`select PLATENUM, PLATECODE, CATEGORYTE, LANE from E0F6ED0C21F0407B81B236882B86899C.ZANPR`)
    //             return res;
    //         })
            this.on("READ",Plant, async(req) =>{
                const res = await cds.run(`select WERKS, NAME1 from HDI_VT_HDI_DB_1.VT_T001W`)
                return res;
            })
            // this.on("READ",Material_V, async(req) =>{
            //     const res = await cds.run(`select * from HDI_VT_HDI_DB_1.CARWASHSERVICE_MATERIAL_V`)
            //     return res;
            // })
} );


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