<template>
  <div class="card-container">
    <div class="col" v-for="task in tasks" :key="task.id">
      <div class="card text-center">
        <div class="card-header">
          To-Do
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ task.taskName }}</h5>
          <p class="card-text">{{ task.taskDescription }}</p>
          <button type="button" class="btn btn-primary" @click="deleteTask(task.id)">Done!</button>
        </div>
        <div class="card-footer text-body-secondary">
          {{ task.id }}#
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksCardList',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteTask (taskId) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks/' + taskId

      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          window.location.reload()
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  }
}
</script>

<style scoped>

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: relative;
  margin-bottom: 0px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card {
  width: 300px;
}

.card-header {
  background-color: #f8f9fa;
}

.card-body {
  background-color: #ffffff;
}

.card-footer {
  background-color: #f8f9fa;
  font-size: 14px;
}

</style>
