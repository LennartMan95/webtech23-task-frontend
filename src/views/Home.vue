<template>
  <div class="wrapper">
  <div class="home">
    <HelloWorld msg="Welcome to your To-Do WebApp"/>
    <p class="description">
      Start managing your tasks and stay organized with our easy-to-use to-do list application.
    </p>
    <div class="user-manual">
      <h3 style="text-decoration: underline;">User Manual</h3>
      <br><br>
      <h2>Über die To-Do-List WebApp</h2>
      <p>
        Die To-Do-List WebApp ist eine benutzerfreundliche Anwendung, die Ihnen dabei hilft, Ihre Aufgaben zu verwalten und organisiert zu bleiben. Sie können neue Aufgaben erstellen, <br>
        vorhandene Aufgaben bearbeiten und löschen sowie erledigte Aufgaben markieren.<br><br>
      </p>
      <h2>Funktionen und Zweck</h2>
      <p>
        Die Hauptfunktionen der To-Do-List WebApp umfassen:<br>
        * Hinzufügen neuer Aufgaben mit einem eindeutigen Namen und einer detaillierten Beschreibung<br>
        * Bearbeiten von bestehenden Aufgaben, um Änderungen vorzunehmen oder zusätzliche Informationen hinzuzufügen<br>
        * Löschen von Aufgaben, die nicht mehr relevant sind oder abgeschlossen wurden<br>
        * Markieren von Aufgaben als erledigt, um den Fortschritt zu verfolgen<br>
        * Anzeigen einer übersichtlichen Liste aller Aufgaben mit relevanten Informationen<br><br>
      </p>
      <h2>Aufteilung der Website</h2>
      <p>
        Die Website ist in folgende Seiten aufgeteilt die sie über die Navbar erreichen:<br>
        * Home Page, inklusive User Manual<br>
        * Task Page, mit der eigentlichen WebApp<br>
        * About Page, mit Infos zum Ersteller der Seite und Links die zum Repository fuehren<br><br>
      </p>
      <h2>Hinzufügen eines neuen Tasks in der To-Do-Liste</h2>
      <p>
        Um einen neuen Task hinzuzufügen, folgen Sie diesen Schritten:<br>
        * Klicken Sie auf die Schaltfläche "Create New Task".<br>
        * Es wird ein kleines Fenster geöffnet, das Sie zur Eingabe des Task-Namens und der Task-Beschreibung auffordert.<br>
        * Geben Sie einen aussagekräftigen Namen für den Task ein (mindestens 2 Buchstaben erforderlich) <br>und geben Sie eine detaillierte Beschreibung des Tasks ein (mindestens 10 Buchstaben erforderlich).<br>
        * Klicken Sie auf die Schaltfläche "Create Task", um den neuen Task zu erstellen und zur Task-Liste hinzuzufügen. <br>Sie können auch auf "Close" klicken, um den Vorgang abzubrechen.<br><br>
      </p>
      <h2>Einen Task als erledigt markieren, bzw. einen Task löschen</h2>
      <p>
        Um einen Task als erledigt zu markieren, gehen Sie wie folgt vor:<br>
        * Suchen Sie den Task in der Task-Liste.<br>
        * Klicken Sie auf die Schaltfläche "Done!", um den Task als erledigt zu markieren. Der Task wird aus der Task-Liste entfernt.
      </p>
      <h2>Sprache</h2>
      <p>
        Die Homepage und Aboutpage haben deutschen Inhalt, die Anwendungen und Überschriften sind jedoch teilweise auf Englisch, <br>
        da standardgemäßig mit englischen Variablen im frontend und backend gearbeitet wurde. Ich bitte um Verständnis<br>
      </p>
    </div>
  </div>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>

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
  top: 46px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  margin-bottom: 30px;
}

.user-manual {
  margin-top: 50px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-manual h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.user-manual p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
