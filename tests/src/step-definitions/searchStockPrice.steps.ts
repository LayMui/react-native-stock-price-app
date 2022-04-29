import 'expect-webdriverio'

import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Search } from '../tasks/Search'


Given('{actor} is at the stock price app', (actor: Actor) => {})

When(
  '{pronoun} want to search for company {string}',
  { timeout: 80000 },
  async (actor: Actor, company: string) => {
    actor.attemptsTo()
    await Search.forCompany(company)
  }
)

Then(
  '{pronoun} is able to see the stock price displayed',
  async (actor: Actor) => {
 //   await SearchPage.founded()
  }
)
