<template>
    <div id="ToolSelector">
        <div class="card-extended">
            <div class="card-body ">
                <div class="card-title-extended" >
                    {{toolName}}
                </div>
                <div class="card-text">
                    <div class="form-group">
                        <form>
                            <div  class="" v-for="(value, key) in toolParameters" :key="key">
                                <div v-if="value.valueType==='list'">
                                    <label >{{key}} [{{value.valueUnit}}]</label>
                                    <select :id=key @change="updateForm({key})" class="form-control form-control-sm">
                                        <option v-for="opt in value.valueDefault" :key="opt" :value="opt">{{opt}}</option>
                                    </select>
                                </div>
                                <div v-else>
                                    <label >{{key}} [{{value.valueUnit}}]</label>
                                    <input  class="form-control " :type=value.valueType :id=key v-model=value.value @input="updateForm({key})">
                                </div>
                            </div>
                        </form>   
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

<style lang= "scss" scoped>
    @import './src/scss/custom';
</style>