import { useLoading } from 'vue-loading-overlay'

const loading = useLoading()

export function startLoading() {
  return loading.show({
    loader: "dots",
    color: "white",
    backgroundColor: "black",
  })
}