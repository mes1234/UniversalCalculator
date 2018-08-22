import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // list of all avialable tools 
        // fetched from:
        // /getToolsList 
        toolsList : [
            {
                id:1,
                group:'arytmetyka',
                name:'dodaj'
            },
            {
                id:2,
                group:'arytmetyka',
                name:'odejmij'
            },
            {
                id:3,
                group:'arytmetyka',
                name:'pomnoz'
            },
            {
                id:4,
                group:'arytmetyka',
                name:'podziel'
            },
            {
                id:5,
                group:'arytmetyka',
                name:'modulo'
            },
            {
                id:6,
                group:'przeplyw',
                name:'kryza'
            },
            {
                id:7,
                group:'przeplyw',
                name:'darcy'
            },
            {
                id:8,
                group:'geometria',
                name:'pitagoras'
            },
            {
                id:9,
                group:'geometria',
                name:'tales'
            }
        ],
        // current tool to be used
        // active selected group
        activeGroup : 'geometria',
        // Tool setup parameters for use 
        // in form and description part
        toolParams :{
            selected: {
                id:0,
                group:'',
                name:''
            },
            values: {
                'pierwsza': {
                    valueUnit: '%',
                    value: 1.,
                    valueType: 'number'
                },
                'druga': {
                    valueUnit: 'lbm',
                    value: 'Artur',
                    valueType: 'text'
                },
                'trzecia': {
                    valueUnit: '%',
                    value: 3.,
                    valueType: 'number'
                },
            }, // values to be passed to server every item has key is name, valueUnit, valueDefault, valueType
            description: 'dodawanie trzech liczb', //string to describe tool
            result : {} //placeholder for result
        },
            
    },
    getters: {
        toolsListGroups: (state)=> {
            // return list of possible groups
            return [...new Set(state.toolsList.map(tool => tool.group))];
        },
        toolsList: (state)=> {
            // return all tools which are in activeGroup
            return state.toolsList.filter(tool =>tool.group === state.activeGroup);
        },
        toolsGetInputs: (state)=> {
            //return all parameters required by ToolForm.vue
            return state.toolParams
        },
        toolName: (state)=> {
            //returns currently used tool
            return state.toolsList.filter(tool =>tool.id ===state.toolParams.selected.id).map(tool=> tool.name)[0];

        },
        toolParameters: (state)=> {
            //return object to render form
            return state.toolParams.values
        },
        toolDescription: (state)=>{
            return state.toolParams.description;
        },
        toolResult: (state)=>{
            return state.toolParams.result;
        }
    },
    mutations: {
        getToolsFromServer: (state)=>{
            // fetches tools list from server
            axios
            .get('http://127.0.0.1:8081/getList')
            .then(respons=> {
                state.toolsList=respons.data;
            })
        },
        updateGroupSelection: (state,value)=> {
            state.activeGroup= value
        },
        setCurrentTool: (state,selectedTool)=> {
            state.toolParams.selected =selectedTool
        },
        updateInputForm: (state,selectedTool)=> {
            // fetch parameters for function
            axios
            .get('http://127.0.0.1:8081/getParams/'+selectedTool.id)
            .then(respons=> {
                state.toolParams.values=respons.data;
            })
            // fetch description for function
            axios
            .get('http://127.0.0.1:8081/getDesc/'+selectedTool.id)
            .then(respons=> {
                state.toolParams.description=respons.data;
            })
        },
        updateForm: (state,obj)=> {
            //
            console.log(obj.value.valueType)
            var value = ((obj.value.valueType ==='number' ) ? parseFloat(obj.value.value) : obj.value.value);
            state.toolParams.values[obj.key].value=value
            state.toolParams.result = {
                // TODO send to server and invoke calculate 
                now: moment().format()
            }
            
        }
    },
    actions: {
        getToolsFromServer: (context,payload)=> {
            context.commit('getToolsFromServer',payload)
        },
        updateGroupSelection: (context,payload)=> {
            context.commit('updateGroupSelection',payload)
        },
        setCurrentTool:(context,payload)=> {
            context.commit('setCurrentTool',payload)
            context.commit('updateInputForm',payload)
        },
        updateForm: (context,payload)=> {
            context.commit('updateForm',payload)
        }
    }

})