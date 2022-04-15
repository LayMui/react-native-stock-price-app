import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  
    STOCKTICKERSYMBOLSEARCHINPUT: '~stockTickerSymbolSearchInput',
    STOCKTICKERSYMBOLSEARCHBTN: '~stockTickerSymbolSearchBtn',
   
};

class SearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  get stocktickersymbolsearchinput() {
    return $(SELECTORS.STOCKTICKERSYMBOLSEARCHINPUT)
  }
  get stocktickersymbolsearchbtn() {
    return $(SELECTORS.STOCKTICKERSYMBOLSEARCHBTN)
  }

  get keyboardReturn() {
    return $('-ios predicate string:label == "stockNameText"')
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async searchForCompany(company) {
    ;(await this.stocktickersymbolsearchinput.waitForDisplayed()) &&
      (await this.stocktickersymbolsearchinput.setValue(company))

      await driver.isKeyboardShown() &&
      await this.keyboardReturn.touchAction('tap')
      ;(await this.stocktickersymbolsearchbtn.waitForDisplayed()) &&
      (await this.stocktickersymbolsearchbtn.touchAction('tap'))
      
     
  }

  async tapReturnToCloseKeyboard() {
      await this.keyboardReturn.touchAction('tap')
  }


  async tapSearchBtn() {
    ;(await this.stocktickersymbolsearchbtn.waitForDisplayed()) &&
      (await this.stocktickersymbolsearchbtn.touchAction('tap'))
  }

  async founded() {
    ;(await $('~stockTickerSymbolSearchInput').isDisplayed())
    
  }
  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('search')
  }
}

export default new SearchPage()
