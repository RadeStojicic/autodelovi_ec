import { CarPart } from "../types/cardType";
import { useProductStore } from "../store/product";
import { useStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";

export default function addToWishList() {
  const wishListArr = ref<CarPart[]>([]);
  const { cards } = storeToRefs(useProductStore());

  function toggleWishList(card: CarPart) {
    card.showFilledHeart = !card.showFilledHeart;
    const index = wishListArr.value.findIndex((item) => item.id === card.id);

    if (index === -1) {
      wishListArr.value.push(card);
    } else {
      wishListArr.value.splice(index, 1);
    }
  }

  const wishList = useStorage("wishList", wishListArr);

  return { wishList, toggleWishList };
}
