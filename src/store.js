import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from "@/services/ApiService.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        inCart: [],
        products: [],
        contents: [],
        categories: []
    },
    getters: {
        inCart: state => state.inCart,

        //Product filtering
        filterProductsByGender: state => gender => state.products.filter(product => product.gender === gender),
        filterProductsByStyle: state => (gender, style) => state.products.filter(product => product.gender === gender && product.style === style),
        filterProductsByCategory: state => (gender, category) => state.products.filter(product => product.gender === gender && product.category === category),
        getProduct: state => id => state.products.find(product => product.id === id),

        //Content filtering
        getContent: state => id => state.contents.find(content => content.id === id),

        //Category filtering
        filterCategoriesByGender: state => gender => state.categories.filter(category => category.gender === gender),
        getCategory: state => id => state.categories.find(category => category.id === id),
    },
    mutations: {
        ADD_TO_CART(state, invId) {
            state.inCart.push(invId);
        },
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_CONTENTS(state, contents) {
            state.contents = contents
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        addToCart(context, invId) {
            context.commit('ADD_TO_CART', invId);
        },
        getProducts: function ({
            commit
        }) {
            ApiService.getProducts()
                .then(r => r.data)
                .then(products => {
                    commit('SET_PRODUCTS', products)
                })
        },
        getContents: function ({
            commit
        }) {
            ApiService.getContents()
                .then(r => r.data)
                .then(contents => {
                    commit('SET_CONTENTS', contents)
                })
        },
        getCategories: function ({
            commit
        }) {
            ApiService.getCategories()
                .then(r => r.data)
                .then(categories => {
                    commit('SET_CATEGORIES', categories)
                })
        }
    }
});