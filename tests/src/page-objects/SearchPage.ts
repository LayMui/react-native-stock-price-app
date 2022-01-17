import { by, Target } from '@serenity-js/webdriverio'
import { isObjectBindingPattern } from 'typescript'


/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class SearchPage {
  static inputSearch = Target.the('search input').located(
    by.css('~stockTickerSymbolSearchInput')
  )

  static submitButton = Target.the('submit button').located(
    by.css('~stockTickerSymbolSearchBtn')
  )

 
}
