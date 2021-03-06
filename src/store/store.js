import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';
import _ from  'lodash'
import router from '../../src/router'
// const API= 'witkepcz.pythonanywhere.com'
const API='52.211.104.156:5000'
// '127.0.0.1:8081'
// 'witkepcz.pythonanywhere.com'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token : false,
        username: false,
        // list of all available tools 
        // fetched from:
        // /getToolsList 
        toolsList : [],
        // current tool to be used
        // active selected group
        activeGroup : '',
        // Tool setup parameters for use 
        // in form and description part
        toolParams :{
            selected: {
                id:0,
                group:'',
                name:''
            },
            values: {}, // values to be passed to server every item has key is name, valueUnit, valueDefault, valueType
            description: '', //string to describe tool
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
            .get(`http://${API}/getList`)
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
            .get(`http://${API}/getParams/`+selectedTool.id)
            .then(respons=> {
                state.toolParams.values=respons.data;
            })
            // fetch description for function
            axios
            .get(`http://${API}/getDesc/`+selectedTool.id)
            .then(respons=> {
                state.toolParams.description=respons.data;
            })
        },
        updateForm: (state,obj)=> {
            // update form and send to API to calculate
            
            var selElement= document.getElementById(obj.key)
            var value = ((state.toolParams.values[obj.key].valueType ==='number' ) ? parseFloat(selElement.value) : selElement.value);
            state.toolParams.values[obj.key].value=value
            
            axios
            .post(`http://${API}/calculate`,{
                data:_.mapValues(state.toolParams.values,'value'),
                tool:state.toolParams.selected.id
            })
            .then(respons=> {
                state.toolParams.result= respons.data
            })           
        },
        tryLogin: (state,cred)=> {
            var credToSend=
            {
                username:cred[0],
                password:cred[1]
            }
            axios
            .post(`http://${API}/login`,credToSend)
            .then(respons=> {
                state.token=respons.data.access_token
                
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
                state.username= cred[0]
                router.push('/calc')
            })
            .catch(error=> {
                console.log(error.response)
            })
         },
         logoutUser: (state)=>{
            var credToSend= {
                username: state.username
            }
            axios
            .post(`http://${API}/logout`,credToSend)
            .then(respons=> {
                state.token=false
                router.push('/')
            })
            .catch(error=> {
                console.log(error.response)
            })

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
        },
        tryLogin: (context,payload)=> {
            context.commit('tryLogin',payload)
        },
        logoutUser: (context,payload)=> {
            context.commit('logoutUser',payload)
        }
    }

})