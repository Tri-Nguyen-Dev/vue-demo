import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY',
    libraries: 'places'
  }
})
