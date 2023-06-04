import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import Api from './api'

export interface State {
  api: Api
  connection: string
  token: string
  diskName: string
  path: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    api: new Api(),
    connection: '',
    token: '',
    diskName: '',
    path: '',
  }
})

export function useStore () {
  return baseUseStore(key)
}