<template>
    <div id="ToolSelector">
        <div class="panel panel-primary fdf">
            <div class="panel-heading">
                Wybierz grupę narzędzie
            </div>
            <div class="panel-body">
                <select v-model="groupSelection" @change="updateGroupSelection(groupSelection)" class="form-control form-control-sm">
                    <option v-for="group in toolsListGroups" :key="group" :value="group">{{group}}</option>
                </select>
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading">Wybierz narzędzie</div>
            <div class="panel-body">
                <div class="btn-group-vertical" role="group" aria-label="...">
                        <button v-for="tool in toolsList" :key="tool.id" @click="setCurrentTool(tool)"  type="button" class="btn btn-dark">{{tool.name}}</button>
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

<style lang= "scss" scoped>
    @import 'bootstrap/scss/bootstrap.scss'
</style>