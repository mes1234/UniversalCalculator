<template>
  <div id="app">
    <tool-selector></tool-selector>
    <tool-form></tool-form>
    <description-result></description-result>
  </div>
</template>

<script>
import ToolSelector from './components/ToolSelector.vue'
import ToolForm from './components/ToolForm.vue'
import DescriptionResult from './components/DescriptionResult.vue'
export default {
  name: 'app',
  components: {
    'tool-selector': ToolSelector,
    'tool-form': ToolForm,
    'description-result': DescriptionResult
  }
}
</script>

<style>
</style>
