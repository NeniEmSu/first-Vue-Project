Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    `
})

Vue.component('product-sizes', {
    props: {
        sizes: {
            type: Array,
            required: true,
            default: ["Medium"]
        }
    },
    template: `
    <ol>
        <li v-for="size in sizes">{{ size }}</li>
    </ol>
    `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
     <div class="product">
          
        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
        
            <h1>{{ product }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>{{ sale }}</p>
            <p>Shipping: $ {{ shipping }}</p>
  
            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 

            <product-details :details="details"></product-details>
            <product-sizes :sizes="sizes"></product-sizes>
            
  
            <div><button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to
                        Cart</button>
                </div>
                <div><button v-on:click="decrimentFromCart">Dectrment From cart</button></div>
  
         </div>  
      
      </div>
     `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: "The socks thats gives you mastery over the most Beginer friendly Js framework ever!",
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [{
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            sizes: [
                "ExtraLarge",
                "large",
                "Medium",
                "Small",
                "Tiny"
            ]
        }
    },
    methods: {
        addToCart: function () {
            this.$emit("add-to-cart")
        },
        decrimentFromCart: function () {
            this.$emit("decriment-from-cart")
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale &&
                this.variants[this.selectedVariant].variantQuantity < 5 && this.variants[this.selectedVariant].variantQuantity != 0) {
                return this.brand + ' ' + this.product + ' are on sale!'
            } else if (this.variants[this.selectedVariant].variantQuantity == 0) {
                return this.brand + ' ' + this.product + ' are no longer in Stock.'
            }

            return this.brand + ' ' + this.product + ' are not on sale'
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

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
        premium: false,
        cart: 0
    },
    methods: {
        updateCart() {
            this.cart += 1
        },
        decreseCart() {
            this.cart -= 1
        }
    }
})