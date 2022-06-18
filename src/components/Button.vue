<template>
  <button class="btn" :style="{ background: btnColor, color: btnTextColor }">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: String,
    btnColor: String,
    btnTextColor: String,
  },
}
</script>

<style></style>
