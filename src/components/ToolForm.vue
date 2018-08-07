<template>
    <div id="ToolSelector">
        <h2>{{toolName}}</h2>
        <form>
            <p v-for="(value, key) in toolParameters" :key="key">
                {{key}}
                <input :type=value.valueType :name=key v-model=value.value @input="updateForm({key,value})">
                {{value.valueUnit}}
            </p>
        </form>         
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
                'toolName', //return currently used tool
                'toolParameters' //return current tools required inputs
            ])

    },
    methods: {
        ...mapActions([
            'updateForm' //updates specific input in toolParameters and recalculate
        ])
    }

}
</script>

<style>
</style>