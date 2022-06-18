import axios from "axios"

const state = {
  tasks: [],
  task: {},
}
const getters = {
  tasksList: (state) => state.tasks,
  task: (state) => state.task,
}
const actions = {
  async fetchTasks({ commit }) {
    const response = await axios.get(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks"
    )
    commit("setTasks", response.data)
  },
  async fetchTask({ commit }, id) {
    const response = await axios.get(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks/" + id
    )
    commit("setTask", response.data)
  },
  async updateTask({ commit }, taskData) {
    const response = await axios.put(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks/" + taskData.id,
      taskData
    )
    commit("updTask", response.data)
  },
  async updateTaskStatus({ commit }, taskData) {
    const response = await axios.put(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks/" + taskData.id,
      taskData
    )
    commit("updTaskStatus", response.data)
  },
  async deleteTask({ commit }, id) {
    await axios.delete(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks/" + id
    )
    commit("remTask", id)
  },
  async createTask({ commit }, taskData) {
    const response = await axios.post(
      "https://62a7032797b6156bff84ef49.mockapi.io/api/tasks/",
      taskData
    )
    commit("addTask", response.data)
  },
}
const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  setTask: (state, task) => (state.task = task),
  updTask: (state, taskData) =>
    (state.tasks = state.tasks.map((item) =>
      item.id === taskData.id ? { ...item, ...taskData } : item
    )),
  updTaskStatus: (state, taskData) =>
    (state.tasks = state.tasks.map((item) =>
      item.id === taskData.id ? { ...item, ...taskData } : item
    )),
  remTask: (state, id) =>
    (state.tasks = state.tasks.filter((item) => item.id !== id)),
  addTask: (state, taskData) => (state.tasks = [...state.tasks, taskData]),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
