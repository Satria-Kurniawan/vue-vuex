<template>
  <div class="container">
    <h3>Edit Task</h3>
    <form @submit.prevent="handleUpdate()">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" v-model="task.title" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" v-model="task.description" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="deadline" class="form-label">Deadline</label>
        <input type="text" v-model="task.deadline" class="form-control" />
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="exampleCheck1">Reminder</label>
        <input
          type="checkbox"
          v-model="task.completed"
          class="form-check-input"
        />
      </div>
      <Button
        type="submit"
        :btnText="'Update'"
        :btnColor="'blue'"
        :btnTextColor="'white'"
      />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Button from "../components/Button.vue"

export default {
  name: "TaskEditView",
  components: {
    Button,
  },
  computed: {
    ...mapGetters(["task"]),
  },
  methods: {
    ...mapActions(["fetchTask", "updateTask"]),
    handleUpdate() {
      const newTask = {
        id: this.task.id,
        title: this.task.title,
        description: this.task.description,
        deadline: this.task.deadline,
        completed: this.task.completed,
      }
      this.updateTask(newTask)
      this.$router.push({ name: "tasks" })
    },
  },
  created() {
    this.fetchTask(this.$route.params.id)
  },
}
</script>

<style></style>
