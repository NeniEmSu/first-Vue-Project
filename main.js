var navigation = new Vue({
    el: '#navigation',
    data: {
        home: "./index.html",
        about: "./about.html"
    }
})

var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: 'Socks',
        selectedVariant: 0,
        description: 'These socks are the the best socks you will ever wear',
        onSale: true,
        items: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [{
                variantId: 2234,
                variantColor: "green",
                variantImage: "./img/vmSocks-green-onWhite.jpg",
                variantQuantity: 0
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./img/vmSocks-blue-onWhite.jpg",
                variantQuantity: 10
            }

        ],
        sizes: [
            "ExtraLarge",
            "large",
            "Medium",
            "Small",
            "Tiny"
        ],
        cart: 0
    },
    methods: {
        // using normal javascript es5 function
        addToCart: function () {
            this.cart += 1
        },
        // using es6 functiion decletation

        decrimentFromCart: function () {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }

    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return this.brand + ' ' + this.product + ' are not on sale'
        }
    }
})