<template>
    <div id="DesriptionResult">
        <div id="Opis narzędzia">
            <h2>Opis narzędzia</h2>  
            <p> {{toolDescription}}</p>     
        </div>
        <div id="Wynik">
            <h2>Wynik</h2>  
            <p v-for="(value, key) in toolResult" :key="key">
            {{key}} : {{value}}
            </p>   
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
    @import 'bootstrap/scss/bootstrap.scss'
</style>