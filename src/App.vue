<template>
  <div id="app">
    <tool-selector></tool-selector>
  </div>
</template>

<script>
import ToolSelector from './components/ToolSelector.vue'
export default {
  name: 'app',
  components: {
    'tool-selector': ToolSelector
  }
}
</script>

<style>
</style>
