<template>
  <div class="wrapper">
    <div class="home">
      <h1>About Page</h1>
      <p class="description">
        Start managing your tasks and stay organized with our easy-to-use to-do list application.
      </p>
      <div class="web-app-description">
        <div class="card mb-3" style="max-width: 2000px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="IMG_1643.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

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

.wrapper::before {
  content: "";
  position: absolute;
  top: 46px; /* Der Abstand der Linie zur Überschrift */
  left: 0;
  width: 100%;
  height: 1px; /* Die Höhe der Linie */
  background-color: #ccc; /* Farbe der Linie */
}

.description {
  font-size: 18px;
  margin-bottom: 30px;
}

.web-app-description {
  margin-top: 50px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.web-app-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.web-app-description p {
  font-size: 16px;
  line-height: 1.5;
}

</style>
