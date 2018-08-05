import Vue from 'vue';
import Vuex from 'vuex';

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
        // Tool setup parameters for use 
        // in form and description part
        toolParams :{
            values:{}, // values to be passed to server every item has valueName, valueUnit, valueDefault, valueType
            description: '', //string to describe tool
        },
        // response of server
        result : {}     
    }
})