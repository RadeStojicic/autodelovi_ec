import { defineStore } from "pinia";

export const useLinkStore = defineStore("links", () => {
  const navLinks = ref([
    { names: "Početna", to: "/" },
    {
      names: "Prodavnica",
      to: "/prodavnica",
      categories: [
        {
          title: "Enterijer",
          to: "/motor-i-pogon",
          category_image: "/shocks.png",
          showMore: true,
          sublinks: [
            { names: "Sedista", to: "/motorne-komponente" },
            { names: "Podne prostirke", to: "/kuleri-i-hladnjaci" },
            { names: "Volani i komande", to: "/filteri-za-motor" },
            { names: "Tabla i instrumenti", to: "/kaisevi-i-remeni" },
            { names: "Klima uređaji", to: "/pumpa-za-gorivo" },
            { names: "Radio i multimedija", to: "/pumpa-za-gorivo" },
          ],
        },
        {
          title: "Eksterijer",
          to: "/elektrika-i-elektronika",
          category_image: "/shocks.png",
          showMore: false,
          sublinks: [
            { names: "Branici i spojleri", to: "/akumulatori" },
            { names: "Retrovizori", to: "/svecice-i-kablovi" },
            { names: "Stakla i brisači", to: "/alnaseri-i-paljenje" },
            { names: "Tegovi i šine", to: "/senzori-i-regulatori" },
            { names: "Krovni nosači", to: "/elektronske-kontrole" },
            { names: "Zaštita od sunca i kise", to: "/elektronske-kontrole" },
          ],
        },

        {
          title: "Pribor",
          to: "/osvetljenje-i-signalizacija",
          category_image: "/shocks.png",
          showMore: false,
          sublinks: [
            {
              names: "Filteri (vazduh, ulje, gorivo)",
              to: "/farovi-i-sijalice",
            },
            {
              names: "Akumulatori",
              to: "/migavci-i-svetla-za-maglu",
            },
            {
              names: "Zupčasti kaiševi",
              to: "/stop-svetla-i-reflektori",
            },
            {
              names: "Svećice i žice",
              to: "/svetla-za-regulisanje-saobracaja",
            },
            { names: "Kočioni sistemi", to: "/svetla-unutar-vozila" },
            { names: "Motorno ulje", to: "/svetla-unutar-vozila" },
          ],
        },
        {
          title: "Svetla",
          to: "/karoserija-i-enterijer",
          category_image: "/shocks.png",
          showMore: false,
          sublinks: [
            { names: "Prednja svetla", to: "/spoljna-ogledala" },
            { names: "Zadnja svetla", to: "/branici-i-amortizeri" },
            { names: "Svetlosne grupe", to: "/stakla-i-vetrobrani" },
            {
              names: "Sijalice i LED rasveta",
              to: "/enterijerni-delovi-i-tapacirung",
            },
            { names: "Releji i osigurači", to: "/vrata-i-zakljucavanje" },
            { names: "Farovi za maglu", to: "/vrata-i-zakljucavanje" },
          ],
        },
        {
          title: "Ostalo",
          to: "/pneumatici",
          category_image: "/shocks.png",
          showMore: false,
          sublinks: [
            { names: "Auspuh i izduvni sistemi", to: "/zimske-i-letnje-gume" },
            { names: "Vešanje i amortizeri", to: "/felne-i-ratkapne" },
            { names: "Točkovi i gume", to: "/rezervni-tockovi" },
            { names: "Električni delovi", to: "/ventili-za-gume" },
            { names: "Brava i ključevi", to: "/pneumatski-sistemi" },
            { names: "Pumpe i sistemi za gorivo", to: "/pneumatski-sistemi" },
          ],
        },
      ],
    },
    { names: "Novosti", to: "/novosti" },
    { names: "Kontakt", to: "/kontakt" },
  ]);
  const categories = navLinks.value[1].categories;
  return { navLinks, categories };
});
