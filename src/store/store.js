import Vue from 'vue';
import Vuex from 'vuex';
// import { isContext } from 'vm';
// import { stat } from 'fs';

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
        toolSelected : {
            id:0,
            group:'',
            name:''
        },
        // active selected group
        activeGroup : 'geometria',
        // Tool setup parameters for use 
        // in form and description part
        toolParams :{
            values:{
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
            return state.toolsList.filter(tool =>tool.group === state.activeGroup);
        },
        toolsGetInputs: (state)=> {
            //return all parameters required by ToolForm.vue
            return state.toolParams
        },
        toolName: (state)=> {
            //returns currently used tool
            console.log("yello")
            return state.toolsList.filter(tool =>tool.id ===state.toolSelected.id).map(tool=> tool.name)[0];

        },
        toolParameters: (state)=> {
            //return object to render form
            return state.toolParams.values
        }
    },
    mutations: {
        updateGroupSelection(state,value){
            state.activeGroup= value
        },
        setCurrentTool(state,selectedTool){
            state.toolSelected =selectedTool
        },
        updateInputForm(state,selectedTool){
            switch(selectedTool.name) {
                case 'dodaj':
                state.toolParams={
                    values:{
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
                    description: 'dodawanie trzech liczn', //string to describe tool
                }
                break;
                case 'odejmij':
                state.toolParams={
                    values:{
                        'odjemna': {
                            valueUnit: 'lbf',
                            value: 1.,
                            valueType: 'number'
                        },
                        'druga': {
                            valueUnit: 'lbm',
                            value: 'Artur',
                            valueType: 'text'
                        },
                    }, // values to be passed to server every item has key is name, valueUnit, valueDefault, valueType
                    description: 'dodawanie trzech liczn', //string to describe tool
                }
                break;
                default:
                    console.log('brak takiej opcji')
            }
        }
    },
    actions: {
        updateGroupSelection(context,payload){
            context.commit('updateGroupSelection',payload)
        },
        setCurrentTool(context,payload){
            context.commit('setCurrentTool',payload)
            context.commit('updateInputForm',payload)
        },
    }

})