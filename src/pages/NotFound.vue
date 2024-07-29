<script setup lang="ts">


import {reactive, onMounted, ref, computed, watch} from "vue";
import TextInput from '@/components/TextInput.vue'


onMounted(() => {

  const resizer = document.querySelector(".resizer");
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".rs-content");


  function initResizerFn( resizer, sidebar, container ) {

    // track current mouse position in x var
    let x = 0;
    let w = 0;
    let hhh = 0;

    function rs_mousedownHandler( e ) {
      x = e.clientX;

      const sbWidth = window.getComputedStyle( sidebar ).width;


      w = parseInt( sbWidth, 10 );

      document.addEventListener("mousemove", rs_mousemoveHandler);
      document.addEventListener("mouseup", rs_mouseupHandler);
    }

    function rs_mousemoveHandler( e ) {

      const dx = e.clientX - x;

      const cw = w + dx; // complete width

      const test = (cw / window.innerWidth) * 100;
        if ( test > 20 && test < 40 ) {
          sidebar.style.width = `${ cw }px`;
        }
    }

    function rs_mouseupHandler() {
      // remove event mousemove && mouseup

      document.removeEventListener("mouseup", rs_mouseupHandler);
      document.removeEventListener("mousemove", rs_mousemoveHandler);
    }

    resizer.addEventListener("mousedown", rs_mousedownHandler);
  }


  initResizerFn( resizer, sidebar, container );
})

const getDefault = () => {
  return (91.327201051 * window.innerHeight) / 100
}


const getHeight = ref(getDefault())

onMounted(() => {
  window.addEventListener('resize', function(event) {
    const height = window.innerHeight;

    getHeight.value = (91.327201051 * height) / 100
  });
})

console.log(window.innerHeight)
</script>

<template>
  <div class="container">
    {{ getHeight }}
    <div>
      <div class="sidebar">
        <div class="resizer"></div>
        <div class="header">
          <h3>Sidebar Menu</h3>
        </div>
        <ul :style="`height: ${getHeight}px;`" class="scroll">
          <li>Sidebar menu list 1</li>
          <li>Sidebar menu list 2</li>
          <li>Sidebar menu list 3</li>
          <li>Sidebar menu list 4</li>
          <li>Sidebar menu list 5</li>
          <li>Sidebar menu list 6</li>
          <li>Sidebar menu list 7</li>
          <li>Sidebar menu list 8</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
          <li>Sidebar menu list 9</li>
        </ul>
      </div>
    </div>

    <div id="rs-content" class="rs-content">
      <h1>Let's creating resizable sidebar menu</h1>
      <h1>Let's creating resizable sidebar menu</h1>
      <h1>Let's creating resizable sidebar menu</h1>
      <h1>Let's creating resizable sidebar menu</h1>
    </div>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
}

.scroll {
  overflow-y: auto;
}

.content {
  margin-right: -22px;
}

.container::-webkit-scrollbar-track
{

  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.container::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

.container::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

html, body {
  width: 100%;
  height: 100%;
  user-select: none;
  background-color: #fff;
}

.sidebar {
  height: 100%;
  width: 300px;
  position: relative;
  background-color: #eee;
}

ul {
  padding: 0 !important;
  margin: 0;
}

.resizer {
  width: 6px;
  top: 0;
  right: 0;
  cursor: col-resize;
  height: 100%;
  position: absolute;
  background-color: transparent;
}

.header {
  padding: 22px 11px;
  background-color: #fff;
}

.header h3 {
  color: #2e2e9b;
}

.header h3, ul li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul {
  list-style: none;
}

ul li {
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 11px;
}

.rs-content {
  flex: 1;
  text-align: center;
  background-color: #555;
}

.rs-content-2 {
  text-align: center;
  background-color: #555;
}

h1 {
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
