<template>
  <q-layout
    view="lHh Lpr lFf"
    class="img-background"
  >
    <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-color: #283547;
  border: solid 1px black;
}
</style>
