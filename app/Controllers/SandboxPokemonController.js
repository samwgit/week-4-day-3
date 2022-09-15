import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"





function drawSandboxPokemon() {
  let template = ''
  appState.sandboxPokemon.forEach(s => template += s.ListTemplate)

  setHTML('sandbox-pokemon-slots', template)

  setText('sandbox-pokemon-count',)
}


export class SandboxPokemonController {
  constructor() {
    this.getSandboxPokemon()
    appState.on('sandboxPokemon', drawSandboxPokemon)
  }

  async getSandboxPokemon() {
    try {
      await sandboxPokemonService.getSandboxPokemon()
    } catch (error) {
      console.error('[getting sandbox spells FAILED]', error)
    }
  }

  //  TODO create a pokemon sandbox service
  async addSandboxPokemon() {
    try {
      await sandboxPokemonService.addSandboxPokemon()
      Pop.success('Pokemon Added to Sandbox')
    } catch (error) {
      console.error('[addSandboxPokemon FAILED]', error)
      Pop.error(error)
    }
  }
  // FIXME add to poke dex I think?
  // async toggleSpellPrepared(id) {
  //   try {
  //     await sandboxSpellsService.toggleSpell(id)
  //   } catch (error) {
  //     console.error('[ToggleSpell]', error)
  //     Pop.error(error)
  //   }
  // }



  //  TODO create a pokemon sandbox service
  // async delSandboxPokemonController(id) {
  //   try {
  //     const yes = await Pop.confirm('Sacrifice?')
  //     if (!yes) { return }
  //     await sandboxPokemonService.deleteSpell(id)
  //   } catch (error) {
  //     console.error('[DeleteSpell]', error)
  //     Pop.error(error)
  //   }
  // }




}