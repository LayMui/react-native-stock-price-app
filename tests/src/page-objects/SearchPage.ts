import { By, PageElement } from "@serenity-js/web";


export const SearchPage = {
   stocktickerInput: () => 
    PageElement.located(By.css('~stockTickerSymbolSearchInput')),

    stocktickerButton: () => 
    PageElement.located(By.css('~stockTickerSymbolSearchBtn')),
}