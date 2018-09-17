<template>
  <div id="calc">
    <div class="container">
      <div class="card-extended">
        <div class="card-body ">
          <div class="card-title-extended text-center" >
            <h3>
            Uniwersalny Kalkulator 
            </h3>
          </div>
          <div class="card-text">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <menu-user></menu-user>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <tool-selector></tool-selector>
                </div>
                <div class="col-sm">
                  <tool-form></tool-form>
                </div>
                <div class="col-sm">
                  <description-result></description-result>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolSelector from './ToolSelector.vue'
import ToolForm from './ToolForm.vue'
import DescriptionResult from './DescriptionResult.vue'
import MenuUser from './MenuUser.vue'
export default {
  name: 'app',
  components: {
    'tool-selector': ToolSelector,
    'tool-form': ToolForm,
    'description-result': DescriptionResult,
    'menu-user': MenuUser
  }
}
</script>

<style lang= "scss" scoped>
    @import './src/scss/custom';
</style>
