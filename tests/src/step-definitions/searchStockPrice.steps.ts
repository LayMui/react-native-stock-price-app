import 'expect-webdriverio'


import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Search } from '../tasks/Search'

import SearchPageWDIO  from '../page-objects/search.page'
import  imagium  from '../support/imagium'
import { setTimeout } from 'timers/promises'

Given('{actor} is at the stock price app', async function (actor: Actor)  {
   //Generate the runtime UID - required for a new visual test
   await setTimeout(1000, 'resolved')
   var uid = await imagium.getUID('TestName');
   var screenshot64 = (await browser.takeScreenshot());

 //Call the validate method to make the comparison
 await imagium.validate('home',  screenshot64, uid );

 this.uid = uid;

})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async function (actor: Actor, company: string)  {
   // return await actor.attemptsTo(Search.forCompany(company))
   
   await SearchPageWDIO.searchForCompany(company)
   await setTimeout(1000, 'resolved')
   var screenshot64 = (await browser.takeScreenshot());

   //Call the validate method to make the comparison
   await imagium.validate('companyfound',  screenshot64, this.uid );


  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
 //   await SearchPage.founded()
  }
)
