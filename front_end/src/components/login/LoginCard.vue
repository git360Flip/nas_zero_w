<script setup lang="ts">
import { useStore } from '@/utils/store';
import { onMounted, ref } from 'vue'
import { useLoading } from 'vue-loading-overlay'
import { useRouter } from 'vue-router';

const form = ref<HTMLFormElement | null>(null)
const pin0 = ref<HTMLInputElement | null>(null)
const pin1 = ref<HTMLInputElement | null>(null)
const pin2 = ref<HTMLInputElement | null>(null)
const pin3 = ref<HTMLInputElement | null>(null)
const errorMsg = ref("")
const isLoading = ref(false)

const loading = useLoading()
const store = useStore()
const router = useRouter()

onMounted(() => {
  pin0.value?.focus()
})

function pinFocus(ref: HTMLInputElement | null) {
  ref?.focus()
  ref?.select()
}

async function sendCode() {
  const code = getCode()
  if (code.length === 4) {
    isLoading.value = true;
    const loader = loading.show({
      loader: "dots",
      color: "white",
      backgroundColor: "black",
    })
    const status = await store.state.api.login(code)
    if (status === 200) {
      errorMsg.value = ""
      router.push('/files')
    } else if (status === 401) {
      errorMsg.value = "Invalid Password"
    } else {
      errorMsg.value = "User not created"
    }
    loader.hide()
    isLoading.value = false;
  }
}

async function validateInput(evt: KeyboardEvent, ref: HTMLInputElement | null): Promise<boolean> {
  if (evt.key === 'Enter') {
    await sendCode();
    form.value?.reset()
    pinFocus(pin0.value)
  }
  const isValueSelected =
    ref != null && ref.selectionStart === 0 && ref.selectionEnd === ref.innerText.length
  if (
    (ref === null || ref.innerText.length === 0 || isValueSelected) &&
    parseInt(evt.key) >= 0 &&
    parseInt(evt.key) <= 9
  ) {
    return true
  }
  return false
}

async function isValidPinValue(evt: KeyboardEvent, ref: HTMLInputElement | null) {
  if (await validateInput(evt, ref) === false) {
    evt.preventDefault()
  }
}

async function focusNextPin(
  evt: KeyboardEvent,
  ref: HTMLInputElement | null,
  nextRef: HTMLInputElement | null
) {
  if (await validateInput(evt, ref)) {
    nextRef?.focus()
  }
}

async function tryPin(evt: KeyboardEvent, ref: HTMLInputElement | null) {
  if (await validateInput(evt, ref)) {
    await sendCode();
    form.value?.reset();
    pinFocus(pin0.value);
  }
}

function getCode(): string {
  if (pin0.value != null && pin1.value != null && pin2.value != null && pin3.value != null) {
    return pin0.value.value + pin1.value.value + pin2.value.value + pin3.value.value
  }
  return ''
}
</script>

<template>
  <div v-if="isLoading === false" class="card">
    <h1 class="white">Password</h1>
    <div v-show="errorMsg.length > 0">
      <h3 class="red">{{ errorMsg }}</h3>
    </div>
    <form ref="form">
      <input
        type="password"
        ref="pin0"
        v-on:keyup.right="pinFocus(pin1)"
        v-on:keypress="isValidPinValue($event, pin0)"
        v-on:keyup="focusNextPin($event, pin0, pin1)"
        maxlength="1"
      />
      <input
        type="password"
        ref="pin1"
        v-on:keyup.left="pinFocus(pin0)"
        v-on:keyup.right="pinFocus(pin2)"
        v-on:keypress="isValidPinValue($event, pin1)"
        v-on:keyup="focusNextPin($event, pin1, pin2)"
        maxlength="1"
      />
      <input
        type="password"
        ref="pin2"
        v-on:keyup.left="pinFocus(pin1)"
        v-on:keyup.right="pinFocus(pin3)"
        v-on:keypress="isValidPinValue($event, pin2)"
        v-on:keyup="focusNextPin($event, pin2, pin3)"
        maxlength="1"
      />
      <input
        type="password"
        ref="pin3"
        v-on:keyup.left="pinFocus(pin2)"
        v-on:keypress="isValidPinValue($event, pin3)"
        v-on:keyup="tryPin($event, pin3)"
        maxlength="1"
      />
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  align-content: center;
  justify-content: center;
}

input {
  margin: 0.6rem 0.4rem;
  border-radius: 16px;
  border: 1px solid #9d9d9d;
  width: 52px;
  height: 52px;
  text-align: center;
  font-size: 2.5rem;
}

h1 {
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 1.4rem;
}

h3 {
  font-size: 1.2rem;
  padding-bottom: 10px;
}

.card {
  padding: 10px;
  border-radius: 18px;
  text-align: center;
  border: 1px solid #9d9d9d;
}
</style>
