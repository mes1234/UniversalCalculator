<template>
    <div id="ToolSelector">
        <h2>Wybierz narzędzie</h2>
  <!-- <select v-model="selected_game"> -->
        <select v-model="selectedGroup">
            <option v-for="group in toolsListGroups" :key="group" :value="group">{{group}}</option>
        </select>
    </div>
</template>

<script>
export default {
    computed: {
        toolsListGroups(){
            return [...new Set(this.$store.state.toolsList.map(tool => tool.group))];
        },
        // :FIXME not working sending select to store!!!
    selectedGroup:{

        set:function(selectedGroup){
            this.$store.state.selectedGroup=selectedGroup;
    }}
    }
}
</script>

<style>
</style>