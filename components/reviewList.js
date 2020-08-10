app.component('review-list', {
  props: {
    reviews: {type: Array, required: true}
  },
  template:
  /*html*/
  `<div class="review-container">
    <h3>Reviews:</h3>
    <ul v-for="review in reviews">
      <li>Name: {{ review.name }}</li>
      <li>Review: {{ review.review }}</li>
      <li>Rating: {{ review.rating }}</li>
    </ul>
  </div>`
})
