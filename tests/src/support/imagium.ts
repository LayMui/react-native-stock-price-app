
const axios = require('axios');
require('dotenv')

var testNameImagium = "Webdriverio Integration"
var projectKeyImagium = process.env.IMAGIUM_KEY
var uidEndPointImagium = process.env.IP + "/api/GetUID"
var validateEndPointImagium = process.env.IP + "/api/Validate"


export const imagium  = {

    getUID: async () =>
   //Get unique test ID from Imagium project
   await  axios.post(uidEndPointImagium, {TestName: testNameImagium, ProjectKey: projectKeyImagium })
   .then((res: { status: any; data: any; }) => {
       console.log(`Status: ${res.status}`);   
       //Store unique test ID
       const testUID = res.data;
       console.log('Body: ', res.data);
   }).catch((err: any) => {
       console.error(err);
   }),

   validateScreenshot: async (testUID: any, buffer: { toString: (arg0: string) => any; }) =>
    //Validate the page screenshot inside Imagium
    await  axios.post(validateEndPointImagium, {StepName: 'Step 1', TestRunID: testUID, ImageBase64:  buffer.toString('base64')})
    .then((res: { status: any; data: any; }) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err: any) => {
        console.error(err);
    }),


}