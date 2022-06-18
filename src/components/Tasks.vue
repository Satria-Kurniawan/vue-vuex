<template>
  <h4>Tasks</h4>
  <div class="d-flex">
    <Button
      @click="$router.push({ name: 'addtask' })"
      :btnText="'Create'"
      :btnColor="'black'"
      :btnTextColor="'white'"
      class="ms-auto"
    />
  </div>
  <div v-for="task in tasksList" :key="task.id">
    <div
      @dblclick="handleUpdateStatus(task)"
      class="card mt-2"
      :class="task.completed ? 'card-border-left' : ''"
    >
      <div class="card-body">
        <div class="card-title">
          <h4>{{ task.title }}</h4>
        </div>
        <div class="card-text d-flex justify-content-between">
          <div>
            <h5>{{ task.description }}</h5>
            <h6>{{ task.deadline }}</h6>
          </div>
          <div>
            <Button
              @click="
                $router.push({ name: 'edittask', params: { id: task.id } })
              "
              :btnText="'Edit'"
              :btnColor="'blue'"
              :btnTextColor="'white'"
              class="ms-auto"
            />
            <Button
              @click="handleDelete(task.id)"
              :btnText="'Delete'"
              :btnColor="'red'"
              :btnTextColor="'white'"
              class="ms-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Tasks",
  components: {
    Button,
  },
  computed: mapGetters(["tasksList"]),
  methods: {
    ...mapActions(["fetchTasks", "deleteTask", "updateTaskStatus"]),
    handleDelete(id) {
      this.deleteTask(id)
    },
    handleUpdateStatus(task) {
      const newTask = {
        id: task.id,
        completed: !task.completed,
      }
      this.updateTaskStatus(newTask)
    },
  },
  created() {
    this.fetchTasks()
  },
}
</script>

<style>
.card-border-left {
  border-left: 5px solid green;
}
</style>
