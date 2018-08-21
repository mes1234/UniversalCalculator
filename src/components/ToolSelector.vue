<template>
    <div id="ToolSelector">
        <h2>Wybierz grupę narzędzie</h2>
  <!-- <select v-model="selected_game"> -->
        <select v-model="groupSelection" @change="updateGroupSelection(groupSelection)">
            <option v-for="group in toolsListGroups" :key="group" :value="group">{{group}}</option>
        </select>
        <h2>Wybierz narzędzie</h2>
            <button v-for="tool in toolsList" :key="tool.id" @click="setCurrentTool(tool)"  type="button">{{tool.name}}</button>
            
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    data () {
        return {
        groupSelection : ''
        }
    },
    mounted() {
        this.$store.dispatch('getToolsFromServer')
    },
    computed: {
            ...mapGetters([
                'toolsListGroups', //return all possible groups
                'toolsList' //return all tools in activeGroup
            ])

    },
    methods: {
        ...mapActions([
            'updateGroupSelection', //rerender all tools in group
            'setCurrentTool', //assing current tool to clicked one
            'getToolsFromServer' //before mounting fetch list of tools from API
        ])
    }

}
</script>

<style>
</style>