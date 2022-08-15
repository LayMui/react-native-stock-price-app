import 'expect-webdriverio'


import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Search } from '../tasks/Search'

import SearchPageWDIO  from '../page-objects/search.page'

//const buffer = await page.screenshot({ path: 'screenshot.png', fullPage: true });

Given('{actor} is at the stock price app', (actor: Actor) => {
 
})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async (actor: Actor, company: string) => {
   // return await actor.attemptsTo(Search.forCompany(company))
   
   await SearchPageWDIO.searchForCompany(company)
  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
 //   await SearchPage.founded()
  }
)
