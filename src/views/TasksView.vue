<template>
  <div class="container">
    <h1 class="text-center">Tasks View</h1>
    <Tasks />
  </div>
</template>

<script>
import Tasks from "../components/Tasks.vue"

export default {
  name: "TasksView",
  components: {
    Tasks,
  },
}
</script>

<style></style>
