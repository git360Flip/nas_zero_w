import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import Api from './api'
import type { FileDisk } from './types/filesRo'

export interface State {
  network: Network
  navigation: Navigation
  files: FileDisk[]
}

interface Navigation {
  diskName: string
  cwd: string
}

interface Network {
  api: Api
  connectionState: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    network: {
      api: new Api(),
      connectionState: '',
    },
    navigation: {
      diskName: '',
      cwd: '',
    },
    files: [],
  }
})

export function useStore() {
  return baseUseStore(key)
}