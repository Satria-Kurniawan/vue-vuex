<template>
  <div class="container">
    <h3>Add Task</h3>
    <form @submit.prevent="handleSubmit()">
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
      <!-- <div class="mb-3 form-check">
        <label class="form-check-label" for="exampleCheck1">Reminder</label>
        <input
          type="checkbox"
          v-model="task.completed"
          class="form-check-input"
        />
      </div> -->
      <Button
        type="submit"
        :btnText="'Submit'"
        :btnColor="'black'"
        :btnTextColor="'white'"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Button from "../components/Button.vue"

export default {
  name: "TaskAddView",
  components: {
    Button,
  },
  data() {
    return {
      task: {
        title: "",
        description: "",
        deadline: "",
        completed: false,
      },
    }
  },
  methods: {
    ...mapActions(["createTask"]),
    handleSubmit() {
      const newTask = {
        title: this.task.title,
        description: this.task.description,
        deadline: this.task.deadline,
      }
      this.createTask(newTask)
      this.$router.push({ name: "tasks" })
    },
  },
}
</script>

<style></style>
