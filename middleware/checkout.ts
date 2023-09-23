export default defineNuxtRouteMiddleware((to, from) => {
  const { localStorageCart } = addToCart();
  if (localStorageCart.value.length <= 0) {
    return navigateTo("/prodavnica");
  }
});
