<template>
    <div id="ToolSelector">
        <h2>Wybierz grupę narzędzie</h2>
  <!-- <select v-model="selected_game"> -->
        <select v-model="groupSelection" @change="updateGroupSelection(groupSelection)">
            <option v-for="group in toolsListGroups" :key="group" :value="group">{{group}}</option>
        </select>
        <h2>Wybierz narzędzie</h2>
            <ul>
                <li v-for="tool in toolsList" :key="tool">{{tool}}</li>
            </ul>
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
    computed: {
            ...mapGetters([
                'toolsListGroups', //return all possible groups
                'toolsList' //return all tools in activeGroup
            ])

    },
    methods: {
        ...mapActions([
            'updateGroupSelection'
        ])
    }

}
</script>

<style>
</style>