<template>
    <div id="DesriptionResult">
        <div class="card-extended">
            <div class="card-body ">
                <div class="card-title-extended" >
                    Opis narzędzia
                </div>
                <div class="card-text"> 
                    {{toolDescription}}
                </div>
            </div>
        </div>
        <div class="card-extended">
            <div class="card-body ">
                <div class="card-title-extended" >
                    Wynik
                </div>
                <div class="card-text">
                    <p v-for="(value, key) in toolResult" :key="key">
                    {{key}} : {{value}}
                    </p>  
                </div>
            </div> 
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
    computed: {
            ...mapGetters([
                'toolDescription', //return currently used tool description
                'toolResult', //return outcome of currently used tool
            ])

    },
    methods: {
        ...mapActions([

        ])
    }

}
</script>

<style lang= "scss" scoped>
    @import './src/scss/custom';
</style>