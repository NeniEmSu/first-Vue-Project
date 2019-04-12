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
        product: 'Socks',
        image: "./img/vmSocks-green-onWhite.jpg",
        description: 'These socks are the the best socks you will ever wear',
        inStock: true,
        inventory: 2,
        onSale: true,
        items: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [{
                variantId: 2234,
                variantColor: "green",
                variantImage: "./img/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./img/vmSocks-blue-onWhite.jpg"
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
        updateProduct(variantImage) {
            this.image = variantImage
        }

    }
})