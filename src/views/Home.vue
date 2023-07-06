<template>
  <div class="wrapper">
  <div class="home">
    <HelloWorld msg="Welcome to Your To-Do List"/>
    <p class="description">
      Start managing your tasks and stay organized with our easy-to-use to-do list application.
    </p>
    <div class="user-manual">
      <h2>User Manual</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel volutpat felis. Praesent vulputate lacus ac sapien dignissim, ut efficitur nibh tincidunt. Mauris rhoncus hendrerit feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac sem non enim rhoncus finibus sit amet at elit. Sed aliquam quam quis commodo dapibus. Mauris aliquet ligula vitae mauris placerat, vitae porta risus viverra.

        Proin eget tempor metus. Nulla nisi mauris, tempus dignissim felis vitae, vehicula volutpat nibh. Ut laoreet elit gravida, condimentum diam sit amet, consectetur odio. Proin dictum sagittis placerat. Ut vehicula tincidunt odio, quis tristique diam sollicitudin sed. Quisque scelerisque ac quam sed volutpat. Nam rhoncus at lectus a molestie. Morbi a tellus eu orci feugiat feugiat. Aliquam vulputate orci porta nulla tincidunt tempus. Maecenas rhoncus pretium turpis. Duis vestibulum magna justo, vitae egestas eros lacinia id. Vestibulum scelerisque magna eget ipsum congue commodo.

        In sem velit, rhoncus a congue pulvinar, sodales vitae ante. Suspendisse mauris velit, iaculis sit amet dictum non, gravida eget nulla. Proin ac augue tortor. Duis sagittis condimentum ex, vel malesuada turpis aliquet quis. Nulla tincidunt mollis tristique. Morbi at nibh ac eros mollis efficitur at sit amet urna. Curabitur porttitor tellus massa, sed rhoncus erat consectetur ut. Proin in enim vel nisl faucibus commodo at id sem. Donec eleifend neque non mi finibus, nec rutrum orci venenatis. Proin sodales nisi eget congue eleifend. Phasellus pharetra risus sit amet laoreet congue.

        Sed laoreet condimentum dui id gravida. Proin at auctor nibh, non rhoncus est. Quisque dapibus eleifend interdum. Pellentesque a tortor nec lacus molestie mattis et ac ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas orci tellus, dignissim sit amet diam id, pellentesque mattis mi. Curabitur aliquet gravida nibh, a sollicitudin dui placerat quis. Maecenas molestie gravida lacus, eget faucibus erat ornare id. Cras ut volutpat purus.
      </p>
      <!-- Weitere Inhalte des User Manuals hier einfügen -->
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
