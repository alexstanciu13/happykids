export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    description: string;
    longDescription?: string;
    features: string[];
    inStock: boolean;
    isNew?: boolean;
    oldPrice?: number;
    relatedIds?: string[]; // IDs for upsell/cross-sell
}

export const products: Product[] = [
    // Botez - Trusouri
    {
        id: "trusou-royal",
        name: "Trusou Botez 'Royal' - 7 Piese Personalizate",
        price: 549,
        category: "botez",
        images: ["/images/category_trusou_1767888542931.png", "/images/menu_featured_trusou_1767890000162.png"],
        description: "Un set complet pentru botez, realizat din materiale premium. Include prosop bebe cu capișon, pânză de mir, fașă, prosop preot, săpun preot, sticluță mir și cutie pentru șuviță.",
        longDescription: "Trusoul Royal este definitia elegantei si a calitatii. Realizat in totalitate in atelierul nostru, fiecare piesa este atent verificata. Prosopul este din bumbac 100% cu o densitate mare, foarte absorbant. Broderia este realizata cu ata de matase, rezistenta la spalare. Setul vine ambalat intr-o cutie eleganta, gata de a fi oferit cadou.",
        features: ["Bumbac 100%", "Broderie personalizată", "Include cutie cadou"],
        inStock: true,
        relatedIds: ["lumanare-spring", "costum-micul-print", "cufar-amintiri"]
    },
    {
        id: "trusou-angel",
        name: "Trusou Botez 'Angel' - Dantelă Fină",
        price: 620,
        oldPrice: 750,
        category: "botez",
        images: ["/images/menu_featured_trusou_1767890000162.png"],
        description: "Eleganță pură pentru creștinarea micuțului. Detalii din dantelă de bumbac și broderie cu îngerași.",
        longDescription: "Inspirat de puritatea ingerilor, acest trusou foloseste dantela de bumbac aplicata manual. Panza de mir este din finet moale, placut la atingere. Este alegerea perfecta pentru un botez clasic si rafinat.",
        features: ["Dantelă manuală", "Personalizare gratuită", "Set complet 7 piese"],
        inStock: true,
        isNew: true,
        relatedIds: ["lumanare-spring", "rochita-princess"]
    },

    // Botez - Lumânări
    {
        id: "lumanare-spring",
        name: "Lumânare Botez 'Spring' - Flori Naturale",
        price: 180,
        oldPrice: 220,
        category: "botez",
        images: ["/images/best_seller_candles_1767890918950.png"],
        description: "Lumânare de ceară naturală, decorată manual cu flori uscate și panglici de mătase.",
        longDescription: "Fiecare lumanare este unicat, decorata manual de artistii nostri florali. Folosim flori uscate natural care isi pastreaza culoarea si forma ani la rand. Fitilul este din bumbac, asigurand o ardere curata fara fum.",
        features: ["Ceară naturală", "Ardere curată", "Rezistă la transport"],
        inStock: true,
        relatedIds: ["trusou-royal", "trusou-angel"]
    },

    // Hăinuțe - Costume
    {
        id: "costum-micul-print",
        name: "Costum 'Micul Prinț' - Catifea Navy",
        price: 340,
        category: "hainute",
        images: ["/images/best_seller_costume_1767890900501.png"],
        description: "Costumaș elegant din catifea moale, perfect pentru botez sau ocazii speciale. Include sacou, pantaloni, cămașă și papion.",
        longDescription: "Un costum regal pentru micul tau print. Catifeaua este moale si elastica, permitand libertate de miscare. Camasa este din bumbac poplin fin. Pantalonii au talie reglabila pentru un fit perfect.",
        features: ["Catifea premium", "Căptușeală bumbac", "Papion inclus"],
        inStock: true,
        relatedIds: ["botosei-tricotati", "trusou-royal"]
    },
    {
        id: "rochita-princess",
        name: "Rochiță 'Princess' - Tulle și Mătase",
        price: 380,
        oldPrice: 450,
        category: "hainute",
        images: ["/images/menu_featured_gown_1767890017856.png"],
        description: "O rochiță de poveste pentru o mică prințesă. Straturi bogate de tulle și dublură din bumbac pentru confort.",
        longDescription: "Volum spectaculos dat de 5 straturi de tulle fin. Corsetul este dublat cu bumbac pentru a nu irita pielea. Accesorizata cu o funda mare la spate si mici perle cusute manual.",
        features: ["Tulle fin", "Dublură bumbac", "Accesorii incluse"],
        inStock: true,
        relatedIds: ["bavetica-personalizata", "trusou-angel"]
    },
    {
        id: "body-my-first",
        name: "Body Personalizat 'Primul meu Botez'",
        price: 65,
        category: "hainute",
        images: ["/images/home_step_1_choose_1767890123682.png"],
        description: "Body din bumbac organic, imprimat cu cerneluri non-toxice.",
        longDescription: "Simplu si de efect. Un body comod pe care il poti pastra ca amintire. Imprimeul este rezistent la spalari repetate si sigur pentru bebelusi.",
        features: ["Bumbac Organic", "Print Eco", "Capsă fără nichel"],
        inStock: true,
        relatedIds: ["costum-micul-print"]
    },

    // Cadouri
    {
        id: "set-cadou-nasi",
        name: "Set Cadou pentru Nași - 'Best Godparents'",
        price: 150,
        category: "cadouri",
        images: ["/images/category_gifts_1767888581315.png"],
        description: "Un gest frumos pentru părinții spirituali. Include prosoape brodate și halate.",
        longDescription: "Multumeste-le nasilor cu un cadou pe masura. Prosoapele sunt pufoase si absorbante, iar broderia 'Nasii nostri dragi' le va aminti mereu de acest moment special.",
        features: ["Broderie text dedicat", "Ambalaj cadou", "Bumbac 100%"],
        inStock: true,
        relatedIds: ["trusou-royal"]
    },
    {
        id: "cufar-amintiri",
        name: "Cufăr Amintiri 'Memory Box'",
        price: 220,
        category: "cadouri",
        images: ["/images/home_step_3_delivery_1767890155067.png"],
        description: "Păstrează toate amintirile prețioase de la botez în acest cufăr elegant.",
        longDescription: "O cutie de zestre moderna. Suficient de incapatoare pentru trusou, lumanare (taiata), felicitarile primite si primul dintisor. Realizata din lemn si decorata manual.",
        features: ["Lemn natural", "Personalizabil", "Dimensiuni mari"],
        inStock: true,
        relatedIds: ["trusou-royal", "trusou-angel"]
    },

    // Accesorii
    {
        id: "botosei-tricotati",
        name: "Botosei Tricotați Manual",
        price: 65,
        category: "accesorii",
        images: ["/images/cart_product_socks_1767889437991.png"],
        description: "Botosei moi și călduroși, tricotați cu dragoste.",
        longDescription: "Tricotati manual din lana merinos care regleaza temperatura. Nu strang piciorul, dar stau bine fixati datorita snurului reglabil.",
        features: ["Lână merinos", "Lucrat manual", "Moale la atingere"],
        inStock: true,
        relatedIds: ["costum-micul-print"]
    },
    {
        id: "bavetica-personalizata",
        name: "Bavețică Personalizată",
        price: 45,
        category: "accesorii",
        images: ["/images/cart_product_bib_1767889418338.png"],
        description: "Bavețică practică și elegantă, esențială pentru masa bebelușului.",
        longDescription: "Protejeaza hainutele elegante de la botez. Are doua fete: una din bumbac satinat (pentru poze) si una din prosop absorbant (pentru utilitate).",
        features: ["Impermeabilă", "Bumbac", "Închidere ușoară"],
        inStock: true,
        relatedIds: ["rochita-princess", "trusou-angel"]
    },
    // New Products to fill gaps
    {
        id: "set-nou-nascut",
        name: "Set Nou Născut - Welcome Home",
        price: 280,
        category: "cadouri",
        images: ["/images/category_clothes_1767888562227.png"],
        description: "Tot ce ai nevoie pentru primele zile acasă. Păturică, body și căciuliță.",
        longDescription: "Setul Welcome Home este cadoul ideal pentru o proaspata mamica. Contine esentialele de care are nevoie: o paturica moale de muselina, un body petrecut (usor de imbracat) si o caciulita.",
        features: ["Muselină Organică", "4 piese", "Cutie cadou"],
        inStock: true,
        relatedIds: ["botosei-tricotati"]
    },
    {
        id: "pijamale-bebe",
        name: "Pijamale Bebe - Somn Ușor",
        price: 89,
        category: "hainute",
        images: ["/images/home_story_atelier_1767890107165.png"], // Placeholder
        description: "Pijamale confortabile cu fermoar, pentru schimbări rapide de scutec.",
        longDescription: "Noptile sunt mai usoare cu pijamalele noastre inteligente. Fermoarul bidirectional permite schimbarea scutecului fara a dezbraca complet bebelusul. Mansetele se pot trage peste manute ca manusi.",
        features: ["Fermoar bidirecțional", "Bumbac moale", "Protecție fermoar"],
        inStock: true,
        relatedIds: ["set-nou-nascut"]
    }
];
