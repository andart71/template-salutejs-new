import { SaluteHandler } from '@salutejs/scenario'
import * as dictionary from './system.i18n'

//Хэндлер для RUN_APP
export const runAppHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('start'))
    res.appendSuggestions(['Хватит'])
}

//Хэндлер для NoMatch
export const noMatchHandler: SaluteHandler = ({ res , req}) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('nomatch'))
    res.appendSuggestions(['Хватит'])
    }

    //Хэндлер для Помощь
export const HelpHandler: SaluteHandler = ({res, req}) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('help'))
    res.appendSuggestions(['Хватит'])
}