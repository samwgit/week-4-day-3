import { appState } from "../AppState"
import { Pop } from "../Utils/Pop"
import { setHTML } from "../Utils/Writer"





function _drawCaughtPokemon() {
  let template = ''
  appState.caughtPokemon.forEach(c => template += c.ListTemplate)
  setHTML('caught-pokemon')
}

export class CaughtPokemonController {
  constructor() {
    appState.on('caughtPokemon', _drawCaughtPokemon)
  }
  async getCaughtPokemon() {
    try {
      await caughtPokemonService.getCaughtPokemon()
    } catch (error) {
      console.log('[getCaughtPokemon],', error)
      Pop.error(error)
    }
  }


















}