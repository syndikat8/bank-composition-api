<template>
  <form
      class="card"
      @submit.prevent="onSubmit"
  >
    <h1>Sign in</h1>

    <div :class="['form-control', {'invalid': eError}]">
      <label for="email">Email</label>
      <input
          v-model="email"
          @blur="eBlur"
          type="email"
          id="email"
      >
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', {'invalid': pError}]">
      <label for="password">Password</label>
      <input
          v-model="password"
          @blur="pBlur"
          type="password"
          id="password"
      >
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button
        class="btn primary"
        type="submit"
        :disabled="isSubmitting || isTooManyAttempts"
    >
      Sign in
    </button>
    <div
        v-if="isTooManyAttempts"
        class="text-danger"
    >
    You are trying to log in too often. Try later.
    </div>
  </form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";

export default {
  name: "Auth",
  setup() {
    return {...useLoginForm()}
  }
}

</script>
