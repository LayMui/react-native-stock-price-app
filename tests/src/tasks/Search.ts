import { Duration, Task } from "@serenity-js/core";
import { Click, Enter, isVisible, Wait } from "@serenity-js/web";

import { SearchPage } from "../page-objects/SearchPage";

export const Search = {

    forCompany: (companyName: string) =>
        Task.where(`#actor search for company ${ companyName}`,
         Wait.upTo(Duration.ofMilliseconds(5000000)).until(
            SearchPage.stocktickerInput(), isVisible()),
             Enter.theValue(companyName).into(SearchPage.stocktickerInput()),
             Click.on(SearchPage.stocktickerButton())
        ),
};