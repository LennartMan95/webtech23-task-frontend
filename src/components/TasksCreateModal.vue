<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Create New Task</button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create a Task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="text-start" @submit.prevent="validate">
            <div class="mb-3">
              <label for="task-name" class="col-form-label">Task Name:</label>
              <input type="text" class="form-control" id="task-name" v-model="taskName" required minlength="2">
              <div class="invalid-feedback">
                Please use at least 2 letters!
              </div>
            </div>
            <div class="mb-3">
              <label for="task-description" class="col-form-label">Task Description:</label>
              <textarea class="form-control" id="task-description" v-model="taskDescription" required minlength="10"></textarea>
              <div class="invalid-feedback">
                Please use at least 10 letters!
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="createTask">Create Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksCreateModal',
  data () {
    return {
      taskName: '',
      taskDescription: ''
    }
  },
  methods: {
    createTask () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasks'

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        taskName: this.taskName,
        taskDescription: this.taskDescription
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error))

      window.location.reload()
    }
  },
  validate () {
    // eine validationmethode wird nicht wirklich von der Serverseite gebraucht, da ich nur eine mindestlaenge der texteingaben ueberpruefen muss
  }
}

</script>

<style scoped>

</style>
