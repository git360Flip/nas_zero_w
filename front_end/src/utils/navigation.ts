import { startLoading } from '@/utils/loader'
import type { State } from '@/utils/store'
import type { Store } from 'vuex'

export function getPathSegments(path: string) {
  return path.split('/').splice(1)
}

function createNewCwd(cwd: string, diskName: string, fileName: string) {
  if (diskName === fileName) {
    return ''
  } else if (cwd.includes(fileName) === true) {
    let newCwd = ''
    const cwdSegments = getPathSegments(cwd)
    for (const folderName of cwdSegments) {
      newCwd += '/' + folderName
      if (folderName === fileName) {
        return newCwd
      }
    }
  }
  return cwd + '/' + fileName
}

export function navigateToFile(store: Store<State>, fileName: string) {
  const newCwd = createNewCwd(store.state.navigation.cwd, store.state.navigation.diskName, fileName)
  if (newCwd !== store.state.navigation.cwd) {
    const loader = startLoading()
    store.state.network.api.getFiles(newCwd).then((response) => {
      if (response != null) {
        store.state.navigation.cwd = newCwd
        store.state.files = response.files
      }
    });
    loader.hide()
  }
}