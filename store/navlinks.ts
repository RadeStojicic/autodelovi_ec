import { defineStore } from "pinia";

export const useLinkStore = defineStore("links", () => {
  const navLinks = ref([
    { names: "Početna", to: "/" },
    {
      names: "Prodavnica",
      to: "/prodavnica",
      categories: [
        {
          title: "Motor i Pogon",
          to: "/motor-i-pogon",
          showMore: true,
          sublinks: [
            { names: "Motorne komponente", to: "/motorne-komponente" },
            { names: "Kuleri i hladnjaci", to: "/kuleri-i-hladnjaci" },
            { names: "Filteri za motor", to: "/filteri-za-motor" },
            { names: "Kaiševi i remeni", to: "/kaisevi-i-remeni" },
            { names: "Pumpa za gorivo", to: "/pumpa-za-gorivo" },
          ],
        },
        {
          title: "Elektrika i Elektronika",
          to: "/elektrika-i-elektronika",
          showMore: false,
          sublinks: [
            { names: "Akumulatori", to: "/akumulatori" },
            { names: "Svećice i kablovi", to: "/svecice-i-kablovi" },
            { names: "Alnaseri i paljenje", to: "/alnaseri-i-paljenje" },
            { names: "Senzori i regulatori", to: "/senzori-i-regulatori" },
            { names: "Elektronske kontrole", to: "/elektronske-kontrole" },
          ],
        },

        {
          title: "Osvetljenje i Signalizacija",
          to: "/osvetljenje-i-signalizacija",
          showMore: false,
          sublinks: [
            { names: "Farovi i sijalice", to: "/farovi-i-sijalice" },
            {
              names: "Migavci i svetla za maglu",
              to: "/migavci-i-svetla-za-maglu",
            },
            {
              names: "Stop svetla i reflektori",
              to: "/stop-svetla-i-reflektori",
            },
            {
              names: "Svetla za regulisanje saobraćaja",
              to: "/svetla-za-regulisanje-saobracaja",
            },
            { names: "Svetla unutar vozila", to: "/svetla-unutar-vozila" },
          ],
        },
        {
          title: "Karoserija i Enterijer",
          to: "/karoserija-i-enterijer",
          showMore: false,
          sublinks: [
            { names: "Spoljna ogledala", to: "/spoljna-ogledala" },
            { names: "Branici i amortizeri", to: "/branici-i-amortizeri" },
            { names: "Stakla i vetrobrani", to: "/stakla-i-vetrobrani" },
            {
              names: "Enterijerni delovi i tapacirung",
              to: "/enterijerni-delovi-i-tapacirung",
            },
            { names: "Vrata i zaključavanje", to: "/vrata-i-zakljucavanje" },
          ],
        },
        {
          title: "Pneumatici",
          to: "/pneumatici",
          showMore: false,
          sublinks: [
            { names: "Zimske i letnje gume", to: "/zimske-i-letnje-gume" },
            { names: "Felne i ratkapne", to: "/felne-i-ratkapne" },
            { names: "Rezervni točkovi", to: "/rezervni-tockovi" },
            { names: "Ventili za gume", to: "/ventili-za-gume" },
            { names: "Pneumatski sistemi", to: "/pneumatski-sistemi" },
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
