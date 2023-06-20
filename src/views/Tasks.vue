<template>
 <h1> Welcome to the tasks </h1>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="col" v-for="task in tasks" :key="task.id">
        <div class="card-body">
          <h5 class="card-title">{{ task.taskName }}</h5>
          <p class="card-text">Your task is {{ task.taskName }} </p>
          <a href="#" class="btn btn-primary">Done!</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  data () {
    return {
      tasks: [
        // {
        //   id: 1,
        //   taskName: 'cleaning',
        //   taskDone: false
        // },
        // {
        //   id: 2,
        //   taskName: 'laundry',
        //   taskDone: false
        // }
      ]
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.text())
      .then(result => result.forEach(task => {
        this.tasks.push(task)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
