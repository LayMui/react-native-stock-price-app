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

  /**
   * a method to encapsule automation code to interact with the page
   */

  async searchForCompany(company) {
    ;(await this.stocktickersymbolsearchinput.waitForDisplayed()) &&
      (await this.stocktickersymbolsearchinput.setValue(company))
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
