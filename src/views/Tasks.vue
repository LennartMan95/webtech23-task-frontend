<template>
  <div class="wrapper">
    <div class="home">
      <h1>Your To-Do WebApp</h1>
      <p class="description">
        Start creating new to-do tasks buy pressing the button below.
      </p>
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
.wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.home {
  position: relative;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.home h1 {
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  margin-bottom: 30px;
}

.task-list {
  margin-top: 50px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tasks-create-modal {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -30px;
}
</style>
