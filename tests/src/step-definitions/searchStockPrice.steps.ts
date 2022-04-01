import 'expect-webdriverio'

import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'

import SearchPage from '../page-objects/search.page'


Given('{actor} is at the stock price app', (actor: Actor) => {})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async (actor: Actor, company: string) => {
    await SearchPage.searchForCompany(company)
     await browser.isKeyboardShown() && await browser.hideDeviceKeyboard()
    await SearchPage.tapSearchBtn()
  
   
  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
    await SearchPage.founded()
  }
)
