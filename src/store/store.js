import Vue from 'vue';
import Vuex from 'vuex';
import { isContext } from 'vm';

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
        tool : {id:9},
        // active selected group
        activeGroup : 'geometria',
        // Tool setup parameters for use 
        // in form and description part
        toolParams :{
            values:{
                'pierwsza': {
                    valueUnit: '%',
                    valueDefault: 1.,
                    valueType: 'float'
                },
                'druga': {
                    valueUnit: '%',
                    valueDefault: 2.,
                    valueType: 'int'
                },
                'trzecia': {
                    valueUnit: '%',
                    valueDefault: 3.,
                    valueType: 'int'
                },

            }, // values to be passed to server every item has key is name, valueUnit, valueDefault, valueType
            description: 'dodawanie trzech liczn', //string to describe tool
        },
        // response of server
        result : {}     
    },
    getters: {
        toolsListGroups: (state)=> {
            // return list of possible groups
            return [...new Set(state.toolsList.map(tool => tool.group))];
        },
        toolsList: (state)=> {
            // return all tools which are in activeGroup
            return state.toolsList.filter(tool =>tool.group === state.activeGroup).map(tool => tool.name);
        },
        toolsGetInputs: (state)=>{
            //return all parameters required by ToolForm.vue
            return state.toolParams
        }
    },
    mutations: {
        updateGroupSelection(state,value){
            state.activeGroup =value
        }
    },
    actions: {
        updateGroupSelection(context,payload){
            context.commit('updateGroupSelection',payload)
        }

    }

})