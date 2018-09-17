<template>
  <div id="MenuUser">
    <div class="container">
        <a href="#" class="btn btn-info btn-sm" @click="logoutUser">Log out</a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    data () {
        return {
        // 
        }
    },
    methods: {
        ...mapActions([
            'logoutUser' //logout current user
        ])
    }

}
</script>

<style lang= "scss" scoped>
    @import './src/scss/custom';
</style>
