
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
       console.log(`Status of getUID: ${res.status}`);   
       //Store unique test ID
       const testUID = res.data;
       console.log('Body of getUID: ', res.data);
   }).catch((err: any) => {
       console.error(err);
   }),

   validateScreenshot: async (testUID: any, buffer: { toString: (arg0: string) => any; }, stepName: any ) =>
    //Validate the page screenshot inside Imagium
    await  axios.post(validateEndPointImagium, {StepName: stepName, TestRunID: testUID, ImageBase64:  buffer.toString('base64')})
    .then((res: { status: any; data: any; }) => {
        console.log(`Status of validateScreenshot: ${res.status}`);
        console.log('Body of validateScreenshot: ', res.data);
    }).catch((err: any) => {
        console.error(err);
    }),


}