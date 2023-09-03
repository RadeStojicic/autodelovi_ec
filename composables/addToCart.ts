import { CarPart } from "../types/cardType";
import { useStorage } from "@vueuse/core";
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";
import { showCart } from "../store/constants";

export default function addToCart() {
  const cart = ref<CarPart[]>([]);
  const { cards } = storeToRefs(useProductStore());
  function insertCard(card_id: string) {
    if (process.client) {
      const product = cards.value.find((item: CarPart) => item.id === card_id);
      showCart.value = true;
      if (product) {
        if (!cart.value.some((item) => item.id === card_id)) {
          cart.value.push(product);
        }
      } else {
        console.error(`Proizvod ${card_id} nije nadjen.`);
      }
    }
  }
  function removeFromCart(card_id: string) {
    if (process.client) {
      const index = cart.value.findIndex((item) => item.id === card_id);
      if (index !== -1) {
        cart.value.splice(index, 1);
      }
    }
  }

  const totalPrice = computed(() =>
    cart.value.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0,
    ),
  );

  const localStorageCart = useStorage("cart", cart);

  return {
    localStorageCart,
    insertCard,
    removeFromCart,
    totalPrice,
  };
}
