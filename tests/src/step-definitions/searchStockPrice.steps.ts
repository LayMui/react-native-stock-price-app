import 'expect-webdriverio'


import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Search } from '../tasks/Search'

import SearchPageWDIO  from '../page-objects/search.page'
import  imagium  from '../support/imagium'


Given('{actor} is at the stock price app', async function (actor: Actor)  {
   //Generate the runtime UID - required for a new visual test
   var uid = await imagium.getUID('TestName');
   var screenshot64 = (await browser.takeScreenshot());

 //Call the validate method to make the comparison
 await imagium.validate('home',  screenshot64, uid );

 this.uid = uid;


//  var ID = await imagium.getUID()
//    console.log('getUID: ' + ID)
//  let screenshot = driver.saveScreenshot('./home.png');
//  imagium.validateScreenshot(ID,  screenshot, "home");
//  this.ID = ID;

})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async function (actor: Actor, company: string)  {
   // return await actor.attemptsTo(Search.forCompany(company))
   
   await SearchPageWDIO.searchForCompany(company)
   
   var screenshot64 = (await browser.takeScreenshot());

   //Call the validate method to make the comparison
   await imagium.validate('companyfound',  screenshot64, this.uid );

  // let screenshot = driver.saveScreenshot('./company.png');
  // console.log('use the same ID: ' + this.ID)
  // imagium.validateScreenshot(this.ID,  screenshot, "companyfound")
  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
 //   await SearchPage.founded()
  }
)
