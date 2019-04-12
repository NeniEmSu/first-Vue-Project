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
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
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
        addToCart: function () {
            this.cart += 1
        }
    }
})