<template>
  <div class="wrapper">
    <div class="home">
      <h1>Welcome to the tasks</h1>
      <tasks-create-modal></tasks-create-modal>
      <div class="task-list">
        <tasks-card-list :tasks="this.tasks"></tasks-card-list>
      </div>
    </div>
  </div>
</template>

<script>
import TasksCardList from '@/components/TasksCardList'
import TasksCreateModal from '@/components/TasksCreateModal'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  components: { TasksCreateModal, TasksCardList },
  data () {
    return {
      tasks: []
    }
  },
  methods: {},
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(task => {
        this.tasks.push(task)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

.header-container {
  position: relative;
  margin-bottom: 0px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.task-list {
  margin-top: 50px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
