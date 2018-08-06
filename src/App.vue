<template>
  <div id="app">
    <tool-selector></tool-selector>
    <tool-form></tool-form>
  </div>
</template>

<script>
import ToolSelector from './components/ToolSelector.vue'
import ToolForm from './components/ToolForm.vue'
export default {
  name: 'app',
  components: {
    'tool-selector': ToolSelector,
    'tool-form': ToolForm 
  }
}
</script>

<style>
</style>
