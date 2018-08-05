<template>
    <div id="ToolSelector">
        <h2>Wybierz narzędzie</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.state.toolsList
        },
        saleProducts(){
            return this.$store.getters.saleProducts
        }
    }
}
</script>

<style>
</style>