app.component('product-display', {
  props: {
    premium: {type: Boolean, required: true}
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" :alt="product" :class="{ 'out-of-stock-img': !inStock }">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In stock</p>
          <p v-else>Out of stock</p>
          <p>Shipping : {{ shipping }}</p>
          <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
          </ul>
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          >
          </div>
          <button
            :class ="{ disabledButton: !inStock }"
            class="button" @click="addToCart"
            :disabled="!inStock"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>`,
  data() {
    return {
      product: 'socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0
        }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0
    },
    shipping() {
      if(!this.premium) {
        return '$4.99'
      }

      return 'Free'
    }
  }
})
