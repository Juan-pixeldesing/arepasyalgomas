const MENU_DATA = [
    // --- AREPAS ---
    {
        id: "reina-pepiada",
        name: "Arepa Reina Pepiada",
        desc: "Una mezcla de pollo, palta y mayonesa.",
        priceBase: 370,
        category: "Arepas",
        img: "img_comidas/arepapepiada.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 370 },
                    { name: "Con Fritas", price: 550 },
                    { name: "Con Tequeños", price: 650 }
                ]
            }
        }
    },
    {
        id: "arepa-sifrina",
        name: "Arepa Sifrina",
        desc: "Una Reina Pepiada con mucho queso.",
        priceBase: 360,
        category: "Arepas",
        img: "img_comidas/arepasifrina.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 360 },
                    { name: "Con Fritas", price: 540 },
                    { name: "Con Tequeños", price: 640 }
                ]
            }
        }
    },
    {
        id: "arepa-pelua",
        name: "Arepa Pelúa",
        desc: "Carne vacuna en hierbas salteadas con morrón, cebolla y queso muzzarella.",
        priceBase: 370,
        category: "Arepas",
        img: "img_comidas/arepapelua.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 370 },
                    { name: "Con Fritas", price: 550 },
                    { name: "Con Tequeños", price: 650 }
                ]
            }
        }
    },
    {
        id: "arepa-rumbera",
        name: "Arepa Rumbera",
        desc: "Carne de cerdo a la plancha y queso muzzarella.",
        priceBase: 360,
        category: "Arepas",
        img: "img_comidas/areparumbera.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 360 },
                    { name: "Con Fritas", price: 540 },
                    { name: "Con Tequeños", price: 640 }
                ]
            }
        }
    },
    {
        id: "arepa-perico",
        name: "Arepa Perico",
        desc: "Huevos revueltos con morrones y cebolla.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepaperico.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-domino",
        name: "Arepa Domino",
        desc: "Porotos negros con queso muzzarella.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepadomino.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-veggie-sencilla",
        name: "Arepa Veggie Sencilla",
        desc: "Mix de vegetales, verduras salteadas y palta.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepaveggie.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-gringa",
        name: "Arepa Gringa",
        desc: "Queso, panceta y huevos revueltos.",
        priceBase: 360,
        category: "Arepas",
        img: "img_comidas/arepaginga.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 360 },
                    { name: "Con Fritas", price: 540 },
                    { name: "ConTequeños", price: 640 }
                ]
            }
        }
    },
    {
        id: "arepa-turca",
        name: "Arepa Turca",
        desc: "Tomate, lechuga, falafel (croquetas árabes) y pollo.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepaturca.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-burger-sencilla",
        name: "Arepa Burger Sencilla",
        desc: "Rellena con hamburguesa, muzzarella, lechuga, tomate y salsa.",
        priceBase: 340,
        category: "Arepas",
        img: "img_comidas/arepaburguersencilla.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 340 },
                    { name: "Con Fritas", price: 520 },
                    { name: "Con Tequeños", price: 620 }
                ]
            }
        }
    },



    {
        id: "arepa-jyq",
        name: "Arepa Jamón y Queso",
        desc: "Jamón en trocitos y queso muzzarella rallado.",
        priceBase: 340,
        category: "Arepas",
        img: "img_comidas/arepajyq.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 340 },
                    { name: "Con Fritas", price: 520 },
                    { name: "Con Tequeños", price: 620 }
                ]
            }
        }
    },
    {
        id: "chori-arepa",
        name: "Chori Arepa",
        desc: "Trozos de chorizo premium a la plancha con queso.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/choriarepa.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-weekend",
        name: "Arepa Weekend",
        desc: "Atún con tomates, cebolla, mayonesa y queso muzzarella.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepaweekend.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-caprese",
        name: "Arepa Caprese",
        desc: "Rellena de queso, tomates, albahaca y un toque de aceite de oliva.",
        priceBase: 350,
        category: "Arepas",
        img: "img_comidas/arepacaprese.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 350 },
                    { name: "Con Fritas", price: 530 },
                    { name: "Con Tequeños", price: 630 }
                ]
            }
        }
    },
    {
        id: "arepa-mechada-solo",
        name: "Arepa Carne Mechada",
        desc: "Jugosa carne mechada preparada con hierbas salteadas.",
        priceBase: 400,
        category: "Arepas",
        img: "",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 400 },
                    { name: "Con Fritas", price: 560 },
                    { name: "Con Tequeños", price: 660 }
                ]
            }
        }
    },
    {
        id: "arepa-catira",
        name: "Arepa Catira",
        desc: "Suprema de pollo en hebras guisada con morrones y cebolla.",
        priceBase: 360,
        category: "Arepas",
        img: "img_comidas/arepacatira.png",
        hasOptions: true,
        options: {
            adicionales: {
                title: "Acompañamiento",
                required: true,
                items: [
                    { name: "Sola", price: 360 },
                    { name: "Con Fritas", price: 540 },
                    { name: "Con Tequeños", price: 640 }
                ]
            }
        }
    },
    { id: "arepa-pabellon", name: "Arepa Pabellón", desc: "Carne mechada, porotos negros, tajadas y muzzarella.", price: 400, category: "Arepas", img: "" },
    { id: "burger-especial", name: "Arepa Burger Especial", desc: "Doble hamburguesa, tomate, lechuga, huevo frito, panceta, queso y salsas.", price: 480, category: "Arepas", img: "" },
    { id: "especial-mechada-porotos", name: "Arepa Mechada y Porotos", desc: "Carne mechada, porotos negros y queso muzzarella.", price: 390, category: "Arepas", img: "img_comidas/arepaburguercombo.png" },
    { id: "especial-verduras-queso", name: "Arepa Verduras y Queso", desc: "Verduras salteadas y queso muzzarella.", price: 350, category: "Arepas", img: "img_comidas/arepaverdurasalteadas.png" },
    { id: "especial-mixta-queso", name: "Arepa Mixta Especial", desc: "Carne mechada, verduras salteadas y queso.", price: 380, category: "Arepas", img: "img_comidas/arepaverdurascarne.png" },
    { id: "salchiarepa", name: "Salchiarepa", desc: "Huevos revueltos con tomate, cebolla y panchos picados.", price: 360, category: "Arepas", img: "img_comidas/salchiarepa.png" },
    { id: "arepa-viuda", name: "Arepa Viuda", desc: "Arepa sola sin relleno.", price: 120, category: "Arepas", img: "img_comidas/arepaviuda.png" },

    // --- CACHAPAS ---
    {
        id: "cachapa-clasica",
        name: "Cachapa Clásica",
        desc: "Fina masa de maíz tierno molido a la plancha rellena de sabor a elección.",
        priceBase: 450,
        category: "Cachapas",
        img: "img_comidas/cachapasrellenox3.png",
        hasOptions: true,
        options: {
            sabor: {
                title: "Elegí el relleno",
                required: true,
                items: [
                    { name: "Carne", price: 450 },
                    { name: "Pollo", price: 450 },
                    { name: "Chorizo", price: 450 },
                    { name: "Cerdo", price: 450 }
                ]
            }
        }
    },
    { id: "cachapa-burger", name: "Cachapa Burger", desc: "Rellena de 2 hamburguesas, panceta y muzzarella con fritas.", price: 500, category: "Cachapas", img: "img_comidas/cachapaburguer.png" },
    { id: "cachapa-crispy", name: "Cachapa Crispy", desc: "Cachapa rellena de pollo crispy crujiente.", price: 450, category: "Cachapas", img: "img_comidas/cachapacrispy.png" },
    { id: "cachapa-jyq", name: "Cachapa Jamón y Queso", desc: "Masa de maíz con trozos de jamón y muzzarella.", price: 420, category: "Cachapas", img: "img_comidas/cachapajyq.png" },
    { id: "cachapa-solo-queso", name: "Cachapa Solo Queso", desc: "La clásica rellena únicamente de muzzarella.", price: 400, category: "Cachapas", img: "img_comidas/cachapasoloqueso.png" },
    { id: "cachapa-veggie", name: "Cachapa Veggie", desc: "Rellena de vegetales frescos y muzzarella.", price: 410, category: "Cachapas", img: "img_comidas/cachapaveggieconqueso.png" },
    { id: "cachapa-chori", name: "Cachapa Chori", desc: "Rellena de vegetales frescos y muzzarella.", price: 345, category: "Cachapas", img: "img_comidas/cachapachori.png" },

    // --- COMBOS & PROMOS ---
    { id: "combo-llovizna", name: "Combo La Llovizna", desc: "2 cachapas grandes + 5 tequeños + bebida 1.5L.", price: 1200, category: "Combos & Promos", img: "" },
    { id: "combo-roques", name: "Combo Los Roques", desc: "2 cachapas grandes + bebida 1.5L.", price: 980, category: "Combos & Promos", img: "" },
    { id: "combo-guaricha", name: "Combo La Guaricha", desc: "3 cachapas medianas (queso) + 10 tequeños + bebida 1.5L.", price: 1010, category: "Combos & Promos", img: "" },
    { id: "combo-canaima", name: "Combo Canaima", desc: "3 cachapas med. + 3 teq. + media ración pollo frito.", price: 700, category: "Combos & Promos", img: "" },
    { id: "combo-cachamay", name: "Combo Cachamay", desc: "Tres cachapas rellenas de queso.", price: 460, category: "Combos & Promos", img: "" },
    { id: "bien-resuelta", name: "Bien Resuelta", desc: "3 arepas a elección + 10 tequeños + bebida 1.5L.", price: 1600, category: "Combos & Promos", img: "" },
    { id: "crispy-box", name: "Crispy Box", desc: "Pollo Crispy + 5 Tequeños + Fritas + Bebida 1.5L.", price: 850, category: "Combos & Promos", img: "" },
    { id: "picada-crispy", name: "Picada Crispy", desc: "Pollo crispy, 4 tostones con queso y papas fritas.", price: 600, category: "Combos & Promos", img: "" },
    { id: "entre-panas", name: "Entre Panas", desc: "6 tequeños + media ración pollo crispy + 3 mini arepitas.", price: 630, category: "Combos & Promos", img: "img_comidas/entrepanas.png" },
    { id: "full-equipo", name: "Full Equipo", desc: "Pollo Crispy + 3 arepitas + 3 tequeños + 3 cachapas med.", price: 840, category: "Combos & Promos", img: "img_comidas/picadafullequipo.png" },

    // --- COMIDA CHINA ---
    { id: "combo-china-1", name: "Media Ración Chow Fan + Pollo Frito", desc: "Media ración de arroz con verduras y pollo frito.", price: 340, category: "Comida China", img: "img_comidas/arrozchowmaspollo.png" },
    { id: "combo-china-2", name: "Media Ración Chow Fan (1 Prot) + Pollo Frito", desc: "Arroz con una proteína y pollo frito.", price: 470, category: "Comida China", img: "" },
    { id: "combo-china-3", name: "Media Ración Chow Fan (2 Prot) + Pollo Frito", desc: "Arroz con dos proteínas y pollo frito.", price: 410, category: "Comida China", img: "" },
    { id: "combo-china-4", name: "Media Ración Chow Fan + 2 Arrolladitos", desc: "Arroz con proteína y 2 arrolladitos primavera.", price: 480, category: "Comida China", img: "" },
    { id: "combo-china-5", name: "Media Ración Chow Fan + 1/4 Pollo", desc: "Media ración de arroz y un cuarto de pollo frito.", price: 330, category: "Comida China", img: "" },
    { id: "combo-china-6", name: "Media Ración Chow Fan + 1 proteína", desc: "Arroz salteado con proteína a elección.", price: 330, category: "Comida China", img: "" },
    { id: "promo-chowfan-1", name: "Promo Arroz Chow Fan Verduras", desc: "Media ración de arroz salteado con verduras.", price: 310, category: "Comida China", img: "" },
    {
        id: "promo-chowfan-2",
        name: "Promo Arroz Chow Fan + proteína",
        desc: "Media ración de arroz con una proteína.",
        priceBase: 330,
        category: "Comida China",
        img: "img_comidas/arrozchowmasprote.png",
        hasOptions: true,
        options: {
            proteina: {
                title: "Elegí tu proteína",
                required: true,
                items: [
                    { name: "Carne", price: 330 },
                    { name: "Pollo", price: 330 },
                    { name: "Cerdo", price: 330 }
                ]
            }
        }
    },
    {
        id: "promo-primavera",
        name: "Arrolladitos Primavera",
        desc: "Ración de 5 arrolladitos de verduras.",
        priceBase: 250,
        category: "Comida China",
        img: "img_comidas/arrolladitoprimavera.png",
        hasOptions: true,
        options: {
            salsa: {
                title: "Salsa",
                required: true,
                items: [
                    { name: "Sin salsa", price: 250 },
                    { name: "Con Salsa de Soja", price: 290 }
                ]
            }
        }
    },
    {
        id: "chow-fan-base",
        name: "Arroz Chow Fan",
        desc: "Arroz salteado con huevo y verduras al wok.",
        priceBase: 350,
        category: "Comida China",
        img: "",
        hasOptions: true,
        options: {
            proteinas: {
                title: "Elegí tus proteínas",
                multiple: true,
                items: [
                    { name: "Verduras únicamente", price: 0 },
                    { name: "Una proteína", price: 80 },
                    { name: "Dos proteínas", price: 100 },
                    { name: "Tres proteínas", price: 130 },
                    { name: "Cuatro proteínas", price: 160 }
                ]
            }
        }
    },
    {
        id: "chow-mein-base",
        name: "Chow Mein",
        desc: "Fideos al wok con verduras sazonados con sésamo y soja.",
        priceBase: 450,
        category: "Comida China",
        img: "",
        hasOptions: true,
        options: {
            proteinas: {
                title: "Elegí tus proteínas",
                multiple: true,
                items: [
                    { name: "Verduras únicamente", price: 0 },
                    { name: "Una proteína", price: 60 },
                    { name: "Dos proteínas", price: 80 },
                    { name: "Tres proteínas", price: 120 }
                ]
            }
        }
    },
    {
        id: "chop-suey-base",
        name: "Chop Suey",
        desc: "Verduras salteadas sazonadas con aceite de sésamo y soja.",
        priceBase: 320,
        category: "Comida China",
        img: "img_comidas/verdurassalteadas.png",
        hasOptions: true,
        options: {
            extra: {
                title: "Elegí tu proteína",
                items: [
                    { name: "Sencillo (solo verduras)", price: 0 },
                    { name: "Con Pollo", price: 40 },
                    { name: "Con Carne", price: 40 },
                    { name: "Con Cerdo", price: 40 }
                ]
            }
        }
    },
    { id: "pollo-frito", name: "Pollo Frito", desc: "Ración de pollo frito crujiente.", price: 320, category: "Comida China", img: "img_comidas/dpollofrito.png" },
    // --- TEQUEÑOS ---
    {
        id: "tequenos-muzzarella",
        name: "Tequeños Mozzarella",
        desc: "Dedos de masa crujiente rellenos de muzzarella.",
        priceBase: 275,
        category: "Tequeños",
        img: "img_comidas/tequeñomozarela.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 275 },
                    { name: "Porción x10", price: 500 }
                ]
            }
        }
    },
    {
        id: "tequenos-cheddar",
        name: "Tequeños Cheddar",
        desc: "Dedos de masa crujiente rellenos de queso cheddar.",
        priceBase: 300,
        category: "Tequeños",
        img: "img_comidas/tequeñoscheddar.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 300 },
                    { name: "Porción x10", price: 550 }
                ]
            }
        }
    },
    {
        id: "tequenos-chocolate",
        name: "Tequeños Chocolate",
        desc: "Dedos de masa crujiente rellenos de chocolate fundido.",
        priceBase: 310,
        category: "Tequeños",
        img: "img_comidas/tequeñochocolate.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 310 },
                    { name: "Porción x10", price: 560 }
                ]
            }
        }
    },
    {
        id: "tequenos-oregano",
        name: "Tequeños Oregano",
        desc: "Bastones de queso envuelto en ricas tiras de masa con oregano.",
        priceBase: 300,
        category: "Tequeños",
        img: "img_comidas/tequñosconoregano.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 300 },
                    { name: "Porción x10", price: 550 }
                ]
            }
        }
    },
    {
        id: "martin-fierro",
        name: "Martin Fierro",
        desc: "Es la combinación simple de queso (generalmente tipo Colonia, fresco o magro) y dulce de membrillo",
        priceBase: 300,
        category: "Tequeños",
        img: "img_comidas/martinfierro.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 300 },
                    { name: "Porción x10", price: 550 }
                ]
            }
        }
    },
    {
        id: "tequenos-normales",
        name: "Tequeños ",
        desc: "Bastones de queso envuelto en ricas tiras de masa con oregano.",
        priceBase: 300,
        category: "Tequeños",
        img: "img_comidas/tequeñosnormales.png",
        hasOptions: true,
        options: {
            cantidad: {
                title: "Elegí cantidad",
                required: true,
                items: [
                    { name: "Porción x5", price: 300 },
                    { name: "Porción x10", price: 550 }
                ]
            }
        }
    },
    { id: "burger-tequeno", name: "Burger Tequeños", desc: "Hamburguesa especial envuelta en masa de tequeño.", price: 580, category: "Tequeños", img: "img_comidas/burguertequeño.png" },
    // --- PICADAS & ENTRADAS ---
    { id: "falafel-5", name: "Croquetas Falafel (x5)", desc: "Croquetas veganas a base de garbanzos y especias.", price: 270, category: "Picadas & Entradas", img: "img_comidas/croqueta_farafel.png" },
    { id: "porcion-papas", name: "Porcion Fritas", desc: "Ración de papas fritas.", price: 270, category: "Picadas & Entradas", img: "img_comidas/papasfritas.png" },

    {
        id: "patacones-base",
        name: "Patacones",
        desc: "Trozos de plátano verde frito con relleno a elección.",
        priceBase: 490,
        category: "Picadas & Entradas",
        hasOptions: true,
        img: "",

        options: {
            relleno: {
                title: "Elegí tu relleno",
                required: true,
                items: [
                    { name: "Carne", price: 0 },
                    { name: "Pollo", price: 0 },
                    { name: "Chorizo", price: 0 },
                    { name: "Cerdo", price: 0 },
                    { name: "Veggie", price: -30 }
                ]
            }
        }
    },

    { id: "tostones", name: "Tostones", desc: "Plátano verde frito crujiente.", price: 250, category: "Picadas & Entradas", img: "" },

    // --- BEBIDAS ---
    { id: "monster-energy", name: "Monster Energy 473ml", desc: "Bebida energética.", price: 135, category: "Bebidas", img: "img_comidas/monster.png" },
    { id: "coca-light-600", name: "Coca Cola Light 600ml", desc: "Bebida sin calorías.", price: 130, category: "Bebidas", img: "img_comidas/coca_light.png" },
    { id: "coca-zero-600", name: "Coca Cola Sin Azúcar 600ml", desc: "Bebida sin azúcar.", price: 130, category: "Bebidas", img: "img_comidas/coca_zero.png" },
    { id: "pepsi-15", name: "Pepsi 1.5L", desc: "Bebida familiar.", price: 210, category: "Bebidas", img: "img_comidas/pepsi.png" },
    { id: "coca-600", name: "Coca Cola 600ml", desc: "Bebida individual.", price: 130, category: "Bebidas", img: "img_comidas/coca.png" },
    { id: "coca-15", name: "Coca Cola 1.5 L", desc: "Bebida familiar.", price: 220, category: "Bebidas", img: "img_comidas/coca.png" },
    { id: "salsa-soja", name: "Salsa de Soja", desc: "Salsa de soja extra para tus platos.", price: 40, category: "Salsas & Extras", img: "img_comidas/salsasoja.png" },
    { id: "salsa-agridulce", name: "Salsa Agridulce", desc: "Salsa agridulce casera.", price: 40, category: "Salsas & Extras", img: "img_comidas/salsaagridulce.png" },
    { id: "salsa-verde", name: "Salsa Verde", desc: "Tradicionalmente confesionada a base de verduras.", price: 50, category: "Salsas & Extras", img: "img_comidas/salsaverde.png" },
    { id: "salsa-ajo", name: "Salsa de Ajo", desc: "salsa de ajo un toque especial a tu paladar.", price: 50, category: "Salsas & Extras", img: "img_comidas/salsaajo.png" },

    // --- POSTRES ---
    { id: "postre-3leches", name: "Tres Leches", desc: "Bizcocho bañado en tres tipos de leche.", price: 240, category: "Postres", img: "img_comidas/3leches.png" },
    { id: "postre-3leches-choc", name: "Tres Leches Chocolate", desc: "Versión de chocolate del clásico postre.", price: 240, category: "Postres", img: "img_comidas/3lecheschocolate.png" },
    { id: "postre-3leches-coco", name: "Tres Leches Coco/DDL", desc: "Con coco y dulce de leche.", price: 240, category: "Postres", img: "img_comidas/3lechescoco.png" },
    { id: "quesillo", name: "Quesillo", desc: "Postre tradicional tipo flan venezolano.", price: 240, category: "Postres", img: "img_comidas/quesillo.png" },

    // --- POLLO FRITO
    { id: "guri-pack", name: "Guri pack-porcion infantil", desc: "Media ración de fritas, media ración de tenders de pollo acompañado de 2 tequeños.", price: 400, category: "Pollo Frito", img: "img_comidas/guripack.png" },
    { id: "pollocrips", name: "Pollo crispy con papas fritas", desc: "Trozos de suprema de pollo fritos con cobertura extra crocante acompañado con papas fritas y Guasacaca.", price: 480, category: "Pollo Frito", img: "img_comidas/pollocrispy.png" },
    { id: "tenders", name: "Tenders de pollo Crispy", desc: "Trozos de suprema de pollo fritos con cobertura extra crocante.", price: 380, category: "Pollo Frito", img: "img_comidas/tendersdepollocrispy.png" },

    // --- EMPANADAS ---
    { id: "empanada-pollo", name: "Empanada de Pollo", desc: "Empanada de maíz frita.", price: 240, category: "Empanadas", img: "img_comidas/empanada_pollo.png" },
    { id: "empanada-jyq", name: "Empanada de Jamón y Queso", desc: "Empanada de maíz frita.", price: 230, category: "Empanadas", img: "img_comidas/empanadajyq.png" },
];
