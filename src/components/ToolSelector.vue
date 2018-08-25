<template>
    <div id="ToolSelector">
        <div class="card-extended">
            <div class="card-body ">
                <div class="card-title-extended" >
                    Wybierz grupę narzędzie
                </div>
                <div class="card-text">
                    <select v-model="groupSelection" @change="updateGroupSelection(groupSelection)" class="form-control form-control-sm">
                        <option v-for="group in toolsListGroups" :key="group" :value="group">{{group}}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="card-extended">
            <div class="card-body ">
                <div class="card-title-extended">
                    Wybierz narzędzie
                </div>
                <div class="card-text col-xs-3">
                    <div class="btn-group-vertical btn-default btn-block " role="group" >
                            <button v-for="tool in toolsList" :key="tool.id" @click="setCurrentTool(tool)"  type="button" class="btn  mt-1 ">{{tool.name}}</button>
                    </div>
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
    @import './src/scss/custom';
</style>