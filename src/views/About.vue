<template>
  <div class="wrapper">
    <div class="home">
      <h1>About the Project</h1>
      <p class="description">
        Lennart Manske s0574939, Hochschule für Technik und Wirtschaft Berlin
      </p>
      <div class="web-app-description">
        <div class="card mb-3" style="max-width: 2000px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/IMG_1643.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 style="text-decoration: underline;">Meine To-Do-Webapp</h3>
                <p class="card-text">
                  Ich bin Lennart Manske, 27 Jahre alt und studiere Wirtschaftsinformatik an der Hochschule für Technik und Wirtschaft Berlin. Im Rahmen des Kurses "B3.1 Webtechnologien (SL)" im SoSe2023 sollten die Studenten eine WebApp erstellen.
                </p>
                <p class="card-text">
                  Ich habe mich für eine To-Do-List entschieden, die es den Benutzern ermöglicht, ihre Aufgaben zu verwalten und organisiert zu bleiben. Wir hatten die Möglichkeit in Gruppen zu arbeiten, Ich wollte jedoch dieses Projekt alleine verwirklichen.
                </p>
                <p class="card-text">
                  Anbei habe ich nochmal meine Repositorys verlinkt. Ich hoffe dass meine kleine Anwendung ihren Anspruechen gerecht wird.
                </p>
                <p>
                  Check out my GitHub frontend repository:
                  <a href="https://github.com/LennartMan95/webtech23-task-frontend" target="_blank" rel="noopener">
                    <font-awesome-icon icon="fab fa-github"></font-awesome-icon> GitHub
                  </a>
                </p>
                <p>
                  Check out my GitHub backend repository:
                  <a href="https://github.com/LennartMan95/webtech23" target="_blank" rel="noopener">
                    <font-awesome-icon icon="fab fa-github"></font-awesome-icon> GitHub
                  </a>
                </p>
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
