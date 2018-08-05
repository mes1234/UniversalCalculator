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
                groupa:'arytmetyka',
                nazwa:'dodaj'
            },
            {
                id:2,
                groupa:'arytmetyka',
                nazwa:'odejmij'
            },
            {
                id:3,
                groupa:'arytmetyka',
                nazwa:'pomnoz'
            },
            {
                id:4,
                gropa:'arytmetyka',
                nazwa:'podziel'
            },
            {
                id:5,
                groupa:'arytmetyka',
                nazwa:'modulo'
            },
            {
                id:6,
                groupa:'przeplyw',
                nazwa:'kryza'
            },
            {
                id:7,
                groupa:'przeplyw',
                nazwa:'darcy'
            },
            {
                id:8,
                groupa:'geometria',
                nazwa:'pitagoras'
            },
            {
                id:9,
                groupa:'geometria',
                nazwa:'tales'
            },

        }, 
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