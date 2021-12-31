import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
import WindiCSS from 'vite-plugin-windicss'
const options = { pretty: false } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pugPlugin(options, locals), WindiCSS()],
  server:{origin: 'http://localhost:3000'}
})
