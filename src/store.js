import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  test: "just a test",
  products: [],

  getProducts() {
    axios.get("http://localhost:3000/products").then((response) => {
      this.products = response.data;
    });
  },
});
