import { defineStore } from "pinia";
import { CarPart } from "../types/cardType";

export const useProductStore = defineStore("product", () => {
  const cards: CarPart[] = reactive([
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod1.jpg",
      main_category: "Elektrika i Elektronika",
      category: "Akumulatori",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "BMW",
      model: "X4, i8",
      year: "2004",
      type: "popular",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 15,
      showFilledHeart: false,
      id: "A1",
    },
    {
      to: "mobili-150236-ulje-za-motor-hemijski-proizvodi",
      image: "/prod2.jpg",
      main_category: "Motor i Pogon",
      category: "Motorne komponente",
      title: "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "Audi",
      model: "Q7",
      year: "2008",
      type: "popular",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 0,
      showFilledHeart: false,
      id: "B1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod3.jpg",
      main_category: "Motor i Pogon",
      category: "Motorne komponente",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "BMW",
      model: "X4",
      year: "2005",
      type: "popular",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 20,
      showFilledHeart: false,
      id: "C1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod4.jpg",
      main_category: "Motor i Pogon",
      category: "Filteri za motor",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "Audi",
      model: "Q7",
      year: "2008",
      type: "popular",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 0,
      showFilledHeart: false,
      id: "G1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod2.jpg",
      main_category: "Elektrika i Elektronika",
      category: "Akumulatori",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "BMW",
      model: "X4",
      year: "2005",
      type: "feautured",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 15,
      showFilledHeart: false,
      id: "D1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod1.jpg",
      main_category: "Motor i Pogon",
      category: "Filteri za motor",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "Audi",
      model: "Q7",
      year: "2008",
      type: "new",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 0,
      showFilledHeart: false,
      id: "G1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod4.jpg",
      main_category: "Motor i Pogon",
      category: "Pumpa za gorivo",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 2199,
      newPrice: 1599,
      quantity: 1,
      mark: "BMW",
      model: "X4",
      year: "2005",
      type: "new",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 0,
      showFilledHeart: false,
      id: "E1",
    },
    {
      to: "mobili-150866-ulje-za-motor-hemijski-proizvodi",
      image: "/prod3.jpg",
      main_category: "Motor i Pogon",
      category: "Pumpa za gorivo",
      title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
      oldPrice: 0,
      newPrice: 1599,
      quantity: 1,
      mark: "Audi",
      model: "Q7",
      year: "2008",
      type: "feautured",
      aboutProduct:
        "Mobil - 150236 - Ulje za motor (hemijski proizvodi) je visokokvalitetno ulje namijenjeno za podmazivanje i zaštitu motora vozila. Ovaj hemijski proizvod je posebno formuliran da pruži optimalnu zaštitu i performans.",
      description:
        "MOBIL - 150236 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI) je premijum proizvod koji se ističe kao visoko efikasno ulje namijenjeno za optimalno podmazivanje i zaštitu motora vozila. Sa pažljivo izbalansiranom formulacijom i visokokvalitetnim aditivima, ovaj proizvod pruža izuzetnu zaštitu protiv habanja i korozije, čime produžava životni vijek motora i održava visoke performanse. Ovaj uljni proizvod je posebno kreiran da zadovolji zahtjeve suvremenih motora i tehnologija, pružajući optimalne performanse čak i u zahtjevnim uslovima vožnje. Sa svojom viskoznom formulom, omogućava glatko pokretanje motora, smanjujući trenje i habanje ključnih komponenata. Osim toga, viskoznost ovog ulja ostaje stabilna čak i pri visokim temperaturama, što doprinosi očuvanju performansi motora tokom dužih perioda vožnje.",
      additionalInfo:
        "Formuliran je sa posebnom pažnjom prema najnovijim tehnološkim standardima, što omogućava da se postignu optimalne performanse motora. Njegova napredna hemijska formula obezbeđuje smanjenje trenja i habanja unutar motora, čime se produžava životni vek motora i smanjuju potrebe za redovnim održavanjem.",
      other_images: [
        "/other_image1.jpg",
        "/other_image2.jpg",
        "/other_image3.jpg",
        "/other_image4.jpg",
      ],
      discount: 0,
      showFilledHeart: false,
      id: "F1",
    },
  ]);

  return { cards };
});
