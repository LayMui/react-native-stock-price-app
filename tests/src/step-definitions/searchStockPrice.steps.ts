import 'expect-webdriverio'


import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Search } from '../tasks/Search'

import SearchPageWDIO  from '../page-objects/search.page'
import { imagium } from '../support/imagium'


Given('{actor} is at the stock price app', (actor: Actor) => {
  
  var ID = imagium.getUID()
 var screenshot = driver.saveScreenshot('./home.png');
 imagium.validateScreenshot(ID,  screenshot)
})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async (actor: Actor, company: string) => {
   // return await actor.attemptsTo(Search.forCompany(company))
   
   await SearchPageWDIO.searchForCompany(company)
   var ID = imagium.getUID()
 var screenshot = driver.saveScreenshot('./company.png');
 imagium.validateScreenshot(ID,  screenshot)
  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
 //   await SearchPage.founded()
  }
)
