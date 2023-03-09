import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  connection: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    connection: "Not connected to back end"
  }
})

export function useStore () {
  return baseUseStore(key)
}