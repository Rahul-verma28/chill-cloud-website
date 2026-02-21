export interface Product {
    id: string;
    slug?: string;
    name: string;
    category: 'Cigrolls' | 'Cones' | 'Rolling Paper' | 'Slims';
    subcategory: string;
    packSize?: string;
    flavor?: string;
    description: string;
    longDescription?: string;
    tagline?: string;
    highlights?: string[];
    images: string[];
    price?: string;
    tag?: string;
}

export const CATEGORIES = ['All', 'Cigrolls', 'Cones', 'Rolling Paper', 'Slims'] as const;

export function generateSlug(product: { id: string; name: string }): string {
    return product.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim() + '-' + product.id;
}

export function getProductSlug(product: Product): string {
    return product.slug || generateSlug(product);
}

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => getProductSlug(p) === slug);
}

export function getRelatedProducts(product: Product, count: number = 4): Product[] {
    // First try same flavor, then same category, then same subcategory
    const related = products
        .filter(p => p.id !== product.id)
        .sort((a, b) => {
            let scoreA = 0;
            let scoreB = 0;
            if (a.flavor && a.flavor === product.flavor) scoreA += 3;
            if (b.flavor && b.flavor === product.flavor) scoreB += 3;
            if (a.category === product.category) scoreA += 2;
            if (b.category === product.category) scoreB += 2;
            if (a.subcategory === product.subcategory) scoreA += 1;
            if (b.subcategory === product.subcategory) scoreB += 1;
            return scoreB - scoreA;
        });
    return related.slice(0, count);
}

export const products: Product[] = [
    // 1. Cigrolls - Brown - Pack Box (12 pack)
    {
        id: 'cig-br-12-am',
        name: 'American Freezer Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'American Freezer',
        description: 'Elite hand-rolled cigrolls with a refreshing American Freezer blast.',
        tagline: 'Turn up the chill, even on the hottest days.',
        longDescription: 'ChillCloud American Freezer Cigrolls are crafted to deliver a cool, refreshing burst of flavor with every smooth draw. Light it up and feel an instant wave of icy freshness that keeps your taste buds satisfied and coming back for more. Whether you\'re relaxing outdoors or just craving something fresh, ChillCloud American Freezer delivers a crisp, luxurious smoking experience that feels as cool as it tastes.',
        highlights: [
            'Cool, revitalizing flavor perfect for summer vibes',
            'Premium Golden Virginia blends for a rich, smooth taste',
            'Fine French rolling papers perfected since 1873',
            'Spirallo Smooth Flow Filters for an effortless, balanced pull',
            'Hand-rolled with natural flavors for a refined finish'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/American Freezer Flavored/American.png'],
        tag: 'Bestseller'
    },
    {
        id: 'cig-br-12-cm',
        slug: 'commissioner-cigroll-12pack',
        name: 'Commissioner Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Commissioner',
        description: 'The authoritative choice for those who appreciate deep, nuanced flavor.',
        tagline: 'Stay cool with ChillCloud — crisp, refreshing flavor for every moment.',
        longDescription: 'ChillCloud Commissioner Cigrolls are crafted for those who crave a smooth, invigorating experience. Each draw delivers a bold wave that awakens your senses and leaves a clean, satisfying finish. The Commissioner is a statement of authority and refined taste.',
        highlights: [
            'Bold, revitalizing flavor — refreshment in every puff',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draw every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — crisp, smooth, and refined'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Commissioner Flavored/DSC05609.jpg'],
        tag: 'Classic'
    },
    {
        id: 'cig-br-12-da',
        slug: 'double-apple-cigroll-12pack',
        name: 'Double Apple Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Double Apple',
        description: 'Twice the crispness, twice the luxury. A timeless apple blend.',
        tagline: 'Twice the chill, twice the refreshment — icy cool in every draw.',
        longDescription: 'ChillCloud Double Apple Cigrolls are crafted for those who crave a crisp, invigorating experience. Each puff delivers a wave of frosty flavor that awakens your senses and leaves a clean, satisfying finish. Double the flavor, double the indulgence.',
        highlights: [
            'Double the freezer flavor — bold, revitalizing, and refreshing',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — crisp, smooth, and refined'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Double Apple Flavored/DSC05604.jpg'],
        tag: 'Premium'
    },
    {
        id: 'cig-br-12-dc',
        slug: 'dubai-class-cigroll-12pack',
        name: 'Dubai Class Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Dubai Class',
        description: 'Opulence in every roll. Experience the high-end Dubai aesthetic.',
        tagline: 'Travel the senses — Middle Eastern luxury in every draw.',
        longDescription: 'Dubai Class Cigrolls are crafted for those who crave a rich, exotic experience. Each puff delivers a smooth, flavorful journey inspired by the sophistication and allure of the Middle East. Indulge in luxury, smoke with style.',
        highlights: [
            'Exotic, luxurious flavor — bold, smooth, and refined',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — smooth, rich, and indulgent'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Dubai Class Flavored/DSC05602.jpg'],
        tag: 'Exotic'
    },
    {
        id: 'cig-br-12-ks',
        slug: 'kesar-saffron-cigroll-12pack',
        name: 'Kesar Saffron Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Kesar Saffron',
        description: 'Infused with the world\'s most precious spice for a truly golden moment.',
        tagline: 'Experience royalty in every draw — the finer things, hand-rolled for you.',
        longDescription: 'Kesar Saffron Cigrolls are crafted for those who savor luxury. Each puff delivers a delicate, aromatic saffron flavor, creating a smooth, refined, and truly indulgent smoking experience. Savor the royal taste, smoke with elegance.',
        highlights: [
            'Exquisite saffron flavor — luxurious, aromatic, and refined',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — smooth, elegant, and indulgent'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Kesar Saffron Flavored/DSC05597.jpg'],
        tag: 'Artisan'
    },
    {
        id: 'cig-br-12-og',
        slug: 'original-cigroll-12pack',
        name: 'Original Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Original',
        description: 'The pure, unadulterated artisanal experience that started it all.',
        tagline: 'Classic taste, timeless enjoyment — a flavor that never goes out of style.',
        longDescription: 'Original Cigrolls are crafted for those who appreciate the essentials done perfectly. Each draw delivers a smooth, rich experience with the balance and refinement of a true classic. Classic enjoyment, smoke smooth.',
        highlights: [
            'Timeless, balanced flavor — smooth, rich, and reliable',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — refined, smooth, and satisfying'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Original Flavored/DSC05594.jpg'],
        tag: 'Heritage'
    },
    {
        id: 'cig-br-12-pk',
        slug: 'paan-kiwi-mint-cigroll-12pack',
        name: 'Paan Kiwi Mint Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Paan Kiwi Mint',
        description: 'A daring fusion of traditional paan, tangy kiwi, and fresh mint.',
        tagline: 'Sweet, refreshing, and unforgettable — a taste of India in every puff.',
        longDescription: 'Paan Kiwi Mint Cigrolls are crafted for those who crave a bold, exotic twist. Each draw delivers a perfectly balanced blend of sweet paan, tangy kiwi, and cool mint for a smooth, invigorating smoking experience. Taste the adventure, smoke with style.',
        highlights: [
            'Exotic, refreshing flavor — sweet, tangy, and cool in every puff',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — smooth, crisp, and indulgent'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Paan Kiwi Mint Flavored/DSC05603.jpg'],
        tag: 'Unique'
    },
    {
        id: 'cig-br-12-sw',
        slug: 'spring-water-cigroll-12pack',
        name: 'Spring Water Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Spring Water',
        description: 'Calm and collected. A smooth, clean flavor profile for pure relaxation.',
        tagline: 'Fresh, breezy, and invigorating — a flavor that truly quenches.',
        longDescription: 'Spring Water Cigrolls are crafted for those who crave a clean, revitalizing experience. Each draw delivers a crisp, refreshing taste that leaves you feeling light, smooth, and completely satisfied. Quench your senses, smoke smooth.',
        highlights: [
            'Crisp, fresh flavor — clean, smooth, and revitalizing',
            'French rolling papers perfected since 1873 — tradition meets quality',
            'Spirallo Smooth Flow Filters — effortless, even draws every time',
            'Premium Golden Virginia blend — hand-rolled with natural flavors',
            'Luxurious smoking experience — refreshing, smooth, and indulgent'
        ],
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Spring Water Flavored/DSC05599.jpg'],
        tag: 'Pure'
    },

    // 1b. Cigrolls - Pocket Box (10 sticks)
    {
        id: 'cig-br-10-am',
        name: 'American Freezer Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'American Freezer',
        description: 'Portable luxury. 10 sticks of our refreshing American Freezer blend.',
        tagline: 'Icy coolness that fits right in your pocket.',
        longDescription: 'Take the chill with you wherever you go. The American Freezer Pocket delivers the same bold, refreshing blast of icy flavor you love — now in a compact 10-stick pocket format. Perfect for on-the-move moments when you need a quick hit of premium coolness.',
        highlights: [
            'Compact 10-stick pocket format — luxury on the go',
            'Same bold American Freezer flavor in a portable size',
            'Premium Golden Virginia blend — hand-rolled perfection',
            'Spirallo Smooth Flow Filters — effortless, cool draws',
            'French rolling papers with a legacy since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/American Freezer Flavored/DSC05636.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/American Freezer Flavored/DSC05637.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/American Freezer Flavored/DSC05638.jpg'
        ],
        tag: 'On-the-go'
    },
    {
        id: 'cig-br-10-cm',
        name: 'Commissioner Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Commissioner',
        description: 'Commanding flavor in a compact, elite pocket-sized box.',
        tagline: 'Authority and refinement, wherever life takes you.',
        longDescription: 'The Commissioner Pocket is your companion for moments that demand presence. Each of the 10 sticks delivers a bold, commanding flavor that leaves a clean, satisfying finish — all in a sleek pocket format designed for those who lead with confidence.',
        highlights: [
            'Bold, commanding flavor — presence in every draw',
            'Sleek 10-stick pocket box — fits your lifestyle',
            'Premium Golden Virginia blend — hand-rolled craftsmanship',
            'Spirallo Smooth Flow Filters — smooth, even pulls',
            'French rolling papers perfected since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Commissioner Flavored/DSC05613.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Commissioner Flavored/DSC05617.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Commissioner Flavored/DSC05620.jpg'
        ],
        tag: 'Elite'
    },
    {
        id: 'cig-br-10-da',
        name: 'Double Apple Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Double Apple',
        description: 'Portable luxury with our signature Double Apple blend in a 10-stick pocket box.',
        tagline: 'Double the apple, double the indulgence — now pocket-sized.',
        longDescription: 'Enjoy the crisp, tantalizing blend of two premium apple varieties wherever you are. The Double Apple Pocket packs the same rich, layered flavor into a convenient 10-stick format — because luxury should never be left behind.',
        highlights: [
            'Rich, dual-apple flavor — crisp and invigorating',
            'Convenient 10-stick pocket format for any occasion',
            'Premium Golden Virginia blend — expertly hand-rolled',
            'Spirallo Smooth Flow Filters — perfectly balanced draw',
            'Fine French rolling papers — tradition since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Double Apple Flavored/DSC05646.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Double Apple Flavored/DSC05648.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Double Apple Flavored/DSC05650.jpg'
        ],
        tag: 'Premium'
    },
    {
        id: 'cig-br-10-dc',
        name: 'Dubai Class Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Dubai Class',
        description: 'Experience Dubai opulence on-the-go with this elite pocket collection.',
        tagline: 'Middle Eastern luxury, always within reach.',
        longDescription: 'Carry the essence of Dubai\'s opulence in your pocket. Rich, exotic, and unmistakably luxurious — each of the 10 sticks transports your senses to a world of sophistication and allure. A pocket-sized passport to indulgence.',
        highlights: [
            'Exotic Middle Eastern-inspired flavor — rich and alluring',
            'Compact 10-stick pocket box — luxury travels with you',
            'Premium Golden Virginia blend — artisan hand-rolled',
            'Spirallo Smooth Flow Filters — seamless, refined draws',
            'French rolling papers crafted since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Dubai Class Flavored/DSC05626.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Dubai Class Flavored/DSC05628.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Dubai Class Flavored/DSC05630.jpg'
        ],
        tag: 'Exotic'
    },
    {
        id: 'cig-br-10-ks',
        name: 'Kesar Saffron Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Kesar Saffron',
        description: 'The world\'s most precious spice in a convenient pocket format.',
        tagline: 'Royalty in your pocket — saffron\'s golden luxury awaits.',
        longDescription: 'Carry the essence of royalty wherever you go. Each of the 10 sticks is infused with delicate, aromatic saffron — the world\'s most precious spice — creating a smooth, refined, and truly indulgent pocket-sized experience.',
        highlights: [
            'Exquisite saffron aroma — luxurious and aromatic',
            'Pocket-sized 10-stick format — elegance on the go',
            'Premium Golden Virginia blend — hand-rolled artisanship',
            'Spirallo Smooth Flow Filters — effortless, smooth draws',
            'French rolling papers with a heritage since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Kesar Saffron Flavored/DSC05640.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Kesar Saffron Flavored/DSC05641.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Kesar Saffron Flavored/DSC05644.jpg'
        ],
        tag: 'Artisan'
    },
    {
        id: 'cig-br-10-og',
        name: 'Original Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Original',
        description: 'The pure heritage experience in a compact 10-stick pocket box.',
        tagline: 'Classic heritage, compact convenience — never compromise.',
        longDescription: 'The Original Pocket brings you the timeless, balanced flavor that started it all — now in a compact 10-stick format. Smooth, rich, and utterly reliable, it\'s the perfect companion for those who appreciate the essentials done right.',
        highlights: [
            'Timeless, balanced Original flavor — consistently smooth',
            'Compact 10-stick pocket format — classic never leaves you',
            'Premium Golden Virginia blend — hand-rolled with care',
            'Spirallo Smooth Flow Filters — even, satisfying draws',
            'French rolling papers perfected since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Original Flavored/DSC05569.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Original Flavored/DSC05575.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Original Flavored/DSC05584.jpg'
        ],
        tag: 'Heritage'
    },
    {
        id: 'cig-br-10-pk',
        name: 'Paan Kiwi Mint Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Paan Kiwi Mint',
        description: 'Our unique fusion blend, now in a portable pocket format.',
        tagline: 'Sweet paan, tangy kiwi, cool mint — adventure in your pocket.',
        longDescription: 'Take a flavor adventure wherever you go. The Paan Kiwi Mint Pocket blends the sweetness of traditional paan, the zing of kiwi, and the coolness of mint into 10 perfectly hand-rolled sticks. Bold, exotic, and irresistibly portable.',
        highlights: [
            'Triple-fusion flavor — sweet, tangy, and refreshingly cool',
            'Portable 10-stick pocket box — adventure on demand',
            'Premium Golden Virginia blend — expertly hand-rolled',
            'Spirallo Smooth Flow Filters — smooth, invigorating pulls',
            'French rolling papers — craftsmanship since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Paan Kiwi Mint Flavored/DSC05621.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Paan Kiwi Mint Flavored/DSC05622.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Paan Kiwi Mint Flavored/DSC05624.jpg'
        ],
        tag: 'Unique'
    },
    {
        id: 'cig-br-10-sw',
        name: 'Spring Water Pocket',
        category: 'Cigrolls',
        subcategory: 'Pocket Box (10 Sticks)',
        flavor: 'Spring Water',
        description: 'Pure relaxation in your pocket. 10 sticks of our cleanest flavor profile.',
        tagline: 'Clean, crisp refreshment that travels with you.',
        longDescription: 'Slip pure relaxation into your pocket with the Spring Water Pocket. Each of the 10 sticks offers a crisp, clean draw that leaves you feeling light and revitalized. The purest flavor profile in our range, designed for those who value simplicity and refinement.',
        highlights: [
            'Crisp, clean Spring Water flavor — pure and revitalizing',
            'Pocket-sized 10-stick format — relaxation on the move',
            'Premium Golden Virginia blend — hand-rolled purity',
            'Spirallo Smooth Flow Filters — light, effortless draws',
            'French rolling papers with a legacy since 1873'
        ],
        images: [
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Spring Water Flavored/DSC05631.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Spring Water Flavored/DSC05632.jpg',
            '/products/Cigrolls/Brown/Pocket box 10 sticks/Spring Water Flavored/DSC05634.jpg'
        ],
        tag: 'Pure'
    },

    // 2. Cones - Brown Prerolled
    {
        id: 'cone-br-55',
        name: 'Brown Cones (55 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '55 Pieces',
        description: 'Hand-crafted brown pre-rolled cones in a generous 55-piece bulk box.',
        tagline: 'Precision-rolled perfection, ready when you are.',
        longDescription: 'ChillCloud Brown Cones are precision-rolled from premium unrefined brown paper, delivering a slow, even burn with a pure, natural taste. This 55-piece box gives you a generous supply of perfectly shaped cones — each one ready to fill and enjoy instantly.',
        highlights: [
            'Premium unrefined brown paper — natural, slow burn',
            'Precision pre-rolled for perfect shape every time',
            'Generous 55-piece bulk box — always stocked',
            'Even airflow design for a smooth, consistent draw',
            'No additives — just pure, clean smoking pleasure'
        ],
        images: [
            '/products/Cones/Prerolled/Brown/55 P/DSC05790.jpg',
            '/products/Cones/Prerolled/Brown/55 P/DSC05799.jpg'
        ],
        tag: 'Bulk'
    },
    {
        id: 'cone-br-64',
        name: 'Brown Cones (64 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '64 Pieces',
        description: 'Superior brown cones meticulously rolled for consistency and flow.',
        tagline: 'Meticulously crafted for the discerning smoker.',
        longDescription: 'Elevate your ritual with 64 meticulously rolled brown cones. Each cone is crafted from premium unrefined paper for a natural taste and slow, even burn. Designed for consistency and flow, these cones deliver a reliable experience every single time.',
        highlights: [
            'Meticulous rolling — consistent shape and burn',
            'Unrefined brown paper — authentic, natural flavor',
            '64-piece value pack — superior stocking option',
            'Optimized airflow for smooth, effortless draws',
            'Chemical-free — pure smoking enjoyment'
        ],
        images: [
            '/products/Cones/Prerolled/Brown/64 P/DSC05771.jpg',
            '/products/Cones/Prerolled/Brown/64 P/DSC05788.jpg'
        ],
        tag: 'Value'
    },
    {
        id: 'cone-br-72',
        name: 'Brown Cones (72 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '72 Pieces',
        description: 'The ultimate bulk pack of our premium brown pre-rolled cones.',
        tagline: 'The master\'s choice — 72 cones of uncompromised quality.',
        longDescription: 'For the true connoisseur who never wants to run out. This ultimate 72-piece master pack delivers our finest brown cones in an unbeatable quantity. Each cone maintains the same premium quality — slow-burning, evenly rolled, and crafted for perfection.',
        highlights: [
            'Ultimate 72-piece master pack — maximum value',
            'Premium unrefined brown paper — slow, clean burn',
            'Each cone individually quality-checked',
            'Perfect shape and airflow in every cone',
            'The connoisseur\'s bulk choice — never run out'
        ],
        images: [
            '/products/Cones/Prerolled/Brown/72 P/DSC05756.jpg',
            '/products/Cones/Prerolled/Brown/72 P/DSC05765.jpg'
        ],
        tag: 'Master'
    },

    // 2b. Cones - White Prerolled
    {
        id: 'cone-wh-55',
        name: 'White Cones (55 Pcs)',
        category: 'Cones',
        subcategory: 'White Prerolled',
        packSize: '55 Pieces',
        description: 'Premium white pre-rolled cones for a pure, clean experience. 55-piece pack.',
        tagline: 'Ultra-pure white cones for a pristine smoking ritual.',
        longDescription: 'Experience pure clarity with ChillCloud White Cones. Crafted from premium ultra-thin white paper, these 55 pre-rolled cones deliver a clean, refined burn with minimal ash. Perfect for those who prefer a purely smooth, unaltered experience.',
        highlights: [
            'Ultra-thin white paper — clean, refined burn',
            'Minimal ash production for a pristine experience',
            '55-piece pack — generous supply of purity',
            'Precision pre-rolled for consistent shape',
            'Smooth, even airflow every time'
        ],
        images: [
            '/products/Cones/Prerolled/White/55 P/DSC05790.jpg',
            '/products/Cones/Prerolled/White/55 P/DSC05798.jpg'
        ],
        tag: 'Pure'
    },
    {
        id: 'cone-wh-64',
        name: 'White Cones (64 Pcs)',
        category: 'Cones',
        subcategory: 'White Prerolled',
        packSize: '64 Pieces',
        description: 'Ultra-thin white cones crafted for smoothness and consistency. 64-piece pack.',
        tagline: 'Premium smoothness, 64 cones of white perfection.',
        longDescription: 'Step into a premium smoking experience with 64 ultra-thin white cones. Each cone is crafted for maximum smoothness and consistency, offering a clean draw and an even burn. The ideal balance between quantity and quality.',
        highlights: [
            'Ultra-thin white paper — maximum smoothness',
            '64-piece premium pack — quantity meets quality',
            'Even burn profile for a consistent experience',
            'Precision-rolled cones — ready to fill and enjoy',
            'Clean, additive-free white paper'
        ],
        images: [
            '/products/Cones/Prerolled/White/64 P/DSC05771.jpg',
            '/products/Cones/Prerolled/White/64 P/DSC05787.jpg'
        ],
        tag: 'Premium'
    },
    {
        id: 'cone-wh-72',
        name: 'White Cones (72 Pcs)',
        category: 'Cones',
        subcategory: 'White Prerolled',
        packSize: '72 Pieces',
        description: 'The ultimate white cone collection. 72 pieces of pure perfection.',
        tagline: 'The elite collection — 72 white cones of absolute perfection.',
        longDescription: 'The pinnacle of our white cone range. 72 pieces of precision-rolled, ultra-thin white perfection. Each cone delivers a pristine, smooth draw with an even burn — making this the elite choice for those who demand the very best in quantity and quality.',
        highlights: [
            'Elite 72-piece collection — the ultimate supply',
            'Ultra-thin white paper — pristine, smooth draws',
            'Individually quality-checked for perfection',
            'Even burn and optimal airflow in every cone',
            'Premium quality — no compromises'
        ],
        images: [
            '/products/Cones/Prerolled/White/72 p/DSC05752.jpg',
            '/products/Cones/Prerolled/White/72 p/DSC05754.jpg'
        ],
        tag: 'Elite'
    },

    // 2c. Cones - Flavored in Jars
    {
        id: 'cone-fl-banana',
        name: 'Banana Flavored Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'Exotic banana-flavored cones preserved in an artisan glass jar for ultimate freshness.',
        tagline: 'Tropical indulgence in every cone — sealed fresh in glass.',
        longDescription: 'Indulge in the sweet, tropical aroma of banana with every cone. Our artisan glass jar preserves each flavored cone at peak freshness, ensuring a lush, fruity experience from the first cone to the last. A uniquely exotic addition to your collection.',
        highlights: [
            'Rich banana flavor — sweet, tropical, and inviting',
            'Artisan glass jar — preserves freshness and aroma',
            'Pre-rolled for instant, hassle-free enjoyment',
            'Natural flavoring — no artificial additives',
            'Premium paper — slow, even burn every time'
        ],
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Banna.jpg'],
        tag: 'Exotic'
    },
    {
        id: 'cone-fl-blunt',
        name: 'Blunt Black Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'Bold blunt black cones in a premium glass jar. For the connoisseur.',
        tagline: 'Bold, dark, and unapologetically premium.',
        longDescription: 'For those who prefer their experience bold and unfiltered. The Blunt Black Cone Jar features rich, dark-wrapper cones with a robust character and a slow, satisfying burn. Sealed in a premium glass jar to maintain their bold essence.',
        highlights: [
            'Bold, dark wrapper — rich, robust character',
            'Premium glass jar — airtight freshness preservation',
            'Slow, satisfying burn for a full experience',
            'Pre-rolled perfection — fill and enjoy',
            'The connoisseur\'s bold choice'
        ],
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Blunt-black.jpg'],
        tag: 'Bold'
    },
    {
        id: 'cone-fl-mix',
        name: 'Mixed Flavors Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'A curated selection of our finest flavored cones in one artisan jar.',
        tagline: 'Every cone a new adventure — variety sealed in style.',
        longDescription: 'Why choose one when you can have them all? Our Mixed Flavors Cone Jar brings together a curated selection of our most popular flavored cones in a single premium glass jar. Each cone is a new sensory adventure waiting to be discovered.',
        highlights: [
            'Curated mix of premium flavors — something for everyone',
            'Artisan glass jar — freshness meets presentation',
            'Discover new favorites with every cone',
            'Pre-rolled and ready to enjoy — zero hassle',
            'Perfect gift or personal variety collection'
        ],
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Mix-flaovrs.jpg'],
        tag: 'Variety'
    },
    {
        id: 'cone-fl-rose',
        name: 'Rose Flavored Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'Delicate rose-infused cones for an elegant, aromatic experience.',
        tagline: 'Floral elegance in every draw — a rose garden in glass.',
        longDescription: 'Experience the delicate beauty of rose in every draw. Our Rose Flavored Cones are gently infused with natural rose essence, creating an elegantly aromatic smoking experience. Preserved in a premium glass jar that\'s as beautiful as the experience itself.',
        highlights: [
            'Delicate natural rose infusion — elegantly aromatic',
            'Premium glass jar — a beautiful presentation piece',
            'Subtle floral notes for a refined experience',
            'Pre-rolled with precision — consistent quality',
            'Natural flavoring — no harsh chemicals'
        ],
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Rose.jpg'],
        tag: 'Elegant'
    },

    // 3. Rolling Paper
    {
        id: 'rp-white-4',
        name: 'White & Brown Four Pack',
        category: 'Rolling Paper',
        subcategory: 'White & Brown',
        packSize: '4 Pack',
        description: 'Elite ultra-thin white and brown papers in a convenient 4-pack variant.',
        tagline: 'Four packs of pure rolling artistry — ultra-thin, ultra-smooth.',
        longDescription: 'The Four Pack brings you the best of both worlds — premium white and brown rolling papers in a generous 4-pack format. Each sheet is ultra-thin for a slow, even burn and a clean, natural taste. Perfect for the enthusiast who values variety and quality.',
        highlights: [
            'Ultra-thin papers — slow, even burn every time',
            'Both white and brown varieties included',
            'Generous 4-pack format — always prepared',
            'Premium paper quality — crafted for smoothness',
            'Natural, additive-free papers for a clean experience'
        ],
        images: [
            '/products/Rolling Paper/White-Brown/Four-Pack-White-Brown/DSC05805.jpg',
            '/products/Rolling Paper/White-Brown/Four-Pack-White-Brown/DSC05809.jpg',
            '/products/Rolling Paper/White-Brown/Four-Pack-White-Brown/DSC05811.jpg',
            '/products/Rolling Paper/White-Brown/Four-Pack-White-Brown/DSC05812.jpg'
        ],
        tag: 'Popular'
    },
    {
        id: 'rp-white-3',
        name: 'White & Brown Trio Pack',
        category: 'Rolling Paper',
        subcategory: 'White & Brown',
        packSize: '3 Pack',
        description: 'The perfect trio of premium rolling papers for any occasion.',
        tagline: 'Three packs, one perfect experience — roll with confidence.',
        longDescription: 'The Trio Pack is the sweet spot for those who want premium quality without excess. Three packs of our finest white and brown rolling papers, each crafted for maximum smoothness and an even burn. Ideal for everyday enjoyment or sharing with friends.',
        highlights: [
            'Perfect trio format — ideal balance of value and quality',
            'White and brown paper varieties for versatility',
            'Ultra-thin construction — clean, smooth draws',
            'Premium quality paper — even burn guaranteed',
            'Compact packaging — easy to carry and share'
        ],
        images: [
            '/products/Rolling Paper/White-Brown/Trio-Pack-White-Brown/DSC05822.jpg',
            '/products/Rolling Paper/White-Brown/Trio-Pack-White-Brown/DSC05823.jpg',
            '/products/Rolling Paper/White-Brown/Trio-Pack-White-Brown/DSC05825.jpg',
            '/products/Rolling Paper/White-Brown/Trio-Pack-White-Brown/DSC05826.jpg'
        ],
        tag: 'Value'
    },
    {
        id: 'rp-white-2',
        name: 'White & Brown Twice Pack',
        category: 'Rolling Paper',
        subcategory: 'White & Brown',
        packSize: '2 Pack',
        description: 'Compact luxury. Two packs of our finest white and brown rolling papers.',
        tagline: 'Two packs of pure luxury — compact and premium.',
        longDescription: 'The Twice Pack is luxury simplified. Two carefully curated packs of our finest white and brown rolling papers — perfect for those who want premium quality in a compact, travel-friendly format. Every sheet delivers a smooth, even burn.',
        highlights: [
            'Compact 2-pack format — perfect for on-the-go',
            'Premium white and brown paper options',
            'Ultra-thin — smooth, slow-burning experience',
            'Travel-friendly size — fits anywhere',
            'No compromises on quality — every sheet counts'
        ],
        images: [
            '/products/Rolling Paper/White-Brown/Twice-pack-White-Brown/DSC05816.jpg',
            '/products/Rolling Paper/White-Brown/Twice-pack-White-Brown/DSC05817.jpg',
            '/products/Rolling Paper/White-Brown/Twice-pack-White-Brown/DSC05818.jpg',
            '/products/Rolling Paper/White-Brown/Twice-pack-White-Brown/DSC05819.jpg'
        ],
        tag: 'Compact'
    },

    // 4. Slims - Brown - Pack Box (10 pack)
    {
        id: 'slims-br-10-am',
        name: 'American Freezer Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'American Freezer',
        description: 'Refined slim format with our signature American Freezer chill in a 10-pack box.',
        tagline: 'Icy cool refinement in every slim draw.',
        longDescription: 'Experience the signature American Freezer blast reimagined in our elegant slim format. Each of the 10 slims delivers a lighter, more delicate draw while maintaining the full, refreshing coolness you crave. Refined without compromise.',
        highlights: [
            'Signature American Freezer coolness in slim format',
            'Lighter, more delicate profile — refined elegance',
            '10-pack box — premium quantity, premium quality',
            'Spirallo Smooth Flow Filters — effortless slim draws',
            'Premium Golden Virginia blend — hand-rolled artistry'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/American Freezer Flavored/DSC05686.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/American Freezer Flavored/DSC05688.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/American Freezer Flavored/DSC05689.jpg'
        ],
        tag: 'Refined'
    },
    {
        id: 'slims-br-10-cm',
        name: 'Commissioner Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Commissioner',
        description: 'Maximum sophistication in our lighter, more delicate slim roll.',
        tagline: 'Sophisticated authority, distilled into a slim silhouette.',
        longDescription: 'The Commissioner Slims Pack distills our boldest flavor into an elegant, refined slim profile. Each of the 10 slims delivers a sophisticated, commanding taste with a lighter touch. For those who want authority without the weight.',
        highlights: [
            'Bold Commissioner flavor in a refined slim format',
            'Lighter profile — sophisticated, not heavy',
            '10-pack box — premium presentation and value',
            'Spirallo Smooth Flow Filters — smooth, slim draws',
            'Premium Golden Virginia blend — expert craftsmanship'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Commissioner Flavored/DSC05672.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Commissioner Flavored/DSC05674.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Commissioner Flavored/DSC05677.jpg'
        ],
        tag: 'Elite'
    },
    {
        id: 'slims-br-10-da',
        name: 'Double Apple Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Double Apple',
        description: 'Crisp apple flavor in our elegant slim format, 10-pack box.',
        tagline: 'Double apple crispness, refined into a slim experience.',
        longDescription: 'The Double Apple Slims Pack offers the crisp, dual-apple experience you love in a more refined, elegant slim format. Lighter and more delicate without sacrificing flavor, it\'s the perfect slim companion for apple lovers.',
        highlights: [
            'Crisp dual-apple flavor — naturally refreshing',
            'Slim format — elegant, lighter profile',
            '10-pack box — generous supply of slim luxury',
            'Spirallo Smooth Flow Filters — balanced, smooth pulls',
            'Premium Golden Virginia blend — artisan quality'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Double Apple Flavored/DSC05692.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Double Apple Flavored/DSC05693.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Double Apple Flavored/DSC05694.jpg'
        ],
        tag: 'Premium'
    },
    {
        id: 'slims-br-10-dc',
        name: 'Dubai Class Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Dubai Class',
        description: 'Opulent Dubai aesthetic in a refined slim profile, 10-pack box.',
        tagline: 'Middle Eastern opulence, refined into a slim silhouette.',
        longDescription: 'The Dubai Class Slims Pack brings the exotic allure and sophistication of the Middle East into a delicate, refined slim format. Rich, smooth, and unmistakably luxurious — a slim experience that feels like a first-class journey.',
        highlights: [
            'Exotic Dubai-inspired flavor — rich and sophisticated',
            'Slim format — refined, elegant draw',
            '10-pack box — premium presentation',
            'Spirallo Smooth Flow Filters — seamless slim experience',
            'Premium Golden Virginia blend — hand-rolled luxury'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Dubai Class Flavored/DSC05731.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Dubai Class Flavored/DSC05733.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Dubai Class Flavored/DSC05735.jpg'
        ],
        tag: 'Exotic'
    },
    {
        id: 'slims-br-10-ks',
        name: 'Kesar Saffron Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Kesar Saffron',
        description: 'The world\'s most precious spice in our delicate slim format, 10-pack box.',
        tagline: 'Saffron\'s golden luxury, delicately slimmed to perfection.',
        longDescription: 'Experience the precious aroma of Kesar Saffron in our most refined format. Each slim delivers a delicate, aromatic saffron experience with a lighter touch that enhances rather than overwhelms. A truly regal slim smoking experience.',
        highlights: [
            'Precious saffron aroma — delicate and refined',
            'Slim format — lighter, more elegant delivery',
            '10-pack box — premium saffron luxury',
            'Spirallo Smooth Flow Filters — graceful, aromatic draws',
            'Premium Golden Virginia blend — artisan perfection'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Kesar Saffron Flavored/DSC05678.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Kesar Saffron Flavored/DSC05680.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Kesar Saffron Flavored/DSC05683.jpg'
        ],
        tag: 'Artisan'
    },
    {
        id: 'slims-br-10-og',
        name: 'Original Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Original',
        description: 'The pure, unadulterated experience in our refined slim format, 10-pack box.',
        tagline: 'Timeless Original, reimagined in a slim silhouette.',
        longDescription: 'The Original Slims Pack brings you the classic, balanced flavor that built our legacy — now in a refined slim format. Each slim offers a lighter, more elegant draw while preserving the timeless richness that defines the Original experience.',
        highlights: [
            'Classic Original flavor — timeless and balanced',
            'Slim format — lighter, refined, and elegant',
            '10-pack box — heritage in a premium package',
            'Spirallo Smooth Flow Filters — smooth, classic draws',
            'Premium Golden Virginia blend — heritage craftsmanship'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Original Flavored/DSC05665-removebg-preview.png',
            '/products/Slims/Brown/Pack Box-10 pack/Original Flavored/DSC05667-removebg-preview.png',
            '/products/Slims/Brown/Pack Box-10 pack/Original Flavored/DSC05670-removebg-preview.png'
        ],
        tag: 'Heritage'
    },
    {
        id: 'slims-br-10-pk',
        name: 'Paan Kiwi Mint Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Paan Kiwi Mint',
        description: 'Our unique fusion blend in a sophisticated slim format, 10-pack box.',
        tagline: 'A fusion adventure, refined into slim elegance.',
        longDescription: 'The Paan Kiwi Mint Slims Pack takes our boldest fusion flavor and reimagines it in a sophisticated slim format. The sweet paan, tangy kiwi, and cool mint blend comes through beautifully in a lighter, more refined draw. Unique flavor, elegant delivery.',
        highlights: [
            'Triple-fusion flavor — sweet, tangy, cool in slim form',
            'Slim format — sophisticated, elegant delivery',
            '10-pack box — fusion luxury in premium packaging',
            'Spirallo Smooth Flow Filters — smooth, invigorating pulls',
            'Premium Golden Virginia blend — hand-rolled uniqueness'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Paan Kiwi Mint Flavored/DSC05724.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Paan Kiwi Mint Flavored/DSC05727.jpg',
            '/products/Slims/Brown/Pack Box-10 pack/Paan Kiwi Mint Flavored/DSC05728.jpg'
        ],
        tag: 'Unique'
    },
    {
        id: 'slims-br-10-sw',
        name: 'Spring Water Slims Pack',
        category: 'Slims',
        subcategory: 'Brown Slims Pack Box',
        flavor: 'Spring Water',
        description: 'Pure, clean flavor in our elegant slim format, 10-pack box.',
        tagline: 'Pure spring freshness, refined into a slim experience.',
        longDescription: 'The Spring Water Slims Pack delivers our purest, cleanest flavor in the most refined format. Each slim offers a crisp, revitalizing draw that\'s lighter and more delicate than our standard cigrolls. Pure simplicity, slim perfection.',
        highlights: [
            'Crisp Spring Water flavor — pure and clean',
            'Slim format — the most refined experience',
            '10-pack box — pure luxury, premium packaging',
            'Spirallo Smooth Flow Filters — light, refreshing draws',
            'Premium Golden Virginia blend — hand-rolled purity'
        ],
        images: [
            '/products/Slims/Brown/Pack Box-10 pack/Spring Water Flavored/DSC05654-removebg-preview.png',
            '/products/Slims/Brown/Pack Box-10 pack/Spring Water Flavored/DSC05656-removebg-preview.png',
            '/products/Slims/Brown/Pack Box-10 pack/Spring Water Flavored/DSC05659-removebg-preview.png'
        ],
        tag: 'Pure'
    },

    // 4b. Slims - Brown - Pocket Box (10 sticks)
    {
        id: 'slims-br-pocket-am',
        name: 'American Freezer Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'American Freezer',
        description: 'Portable slim luxury with our refreshing American Freezer blend.',
        tagline: 'Slim, cool, and always ready — icy freshness in your pocket.',
        longDescription: 'The ultimate pocket companion for icy-cool refreshment. The American Freezer Slims Pocket combines our slim format\'s refined elegance with the bold, refreshing blast of American Freezer — all in a compact pocket box that goes wherever you do.',
        highlights: [
            'Icy American Freezer coolness in slim pocket format',
            'Ultra-portable — the slimmest luxury you can carry',
            'Premium Golden Virginia blend — hand-rolled finesse',
            'Spirallo Smooth Flow Filters — effortless cool draws',
            'French rolling papers — heritage quality since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/American Freezer Flavored/DSC05690.jpg'],
        tag: 'On-the-go'
    },
    {
        id: 'slims-br-pocket-cm',
        name: 'Commissioner Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Commissioner',
        description: 'Elite sophistication in a compact, pocket-sized slim format.',
        tagline: 'Command respect with every slim draw, anywhere you are.',
        longDescription: 'Carry authority in your pocket. The Commissioner Slims Pocket delivers the same bold, commanding flavor in our most compact slim format. Sophisticated, confident, and designed for those who lead from the front — no matter where they are.',
        highlights: [
            'Bold Commissioner presence in a pocket-slim format',
            'Compact — sophistication that fits anywhere',
            'Premium Golden Virginia blend — hand-rolled confidence',
            'Spirallo Smooth Flow Filters — smooth, authoritative draws',
            'French rolling papers — crafted since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Commissioner Flavored/DSC05676.jpg'],
        tag: 'Elite'
    },
    {
        id: 'slims-br-pocket-da',
        name: 'Double Apple Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Double Apple',
        description: 'Crisp apple flavor in a portable slim pocket box.',
        tagline: 'Double apple crispness, slim and pocket-ready.',
        longDescription: 'The Double Apple Slims Pocket puts the crisp, dual-apple experience in your pocket. Each slim delivers a refreshing, fruity draw in the most portable format we offer. Perfect for apple lovers who are always on the move.',
        highlights: [
            'Dual-apple crispness in the slimmest pocket format',
            'Ultra-portable — luxury that goes where you go',
            'Premium Golden Virginia blend — hand-rolled quality',
            'Spirallo Smooth Flow Filters — refreshing, balanced pulls',
            'French rolling papers — tradition since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Double Apple Flavored/DSC05697.jpg'],
        tag: 'Premium'
    },
    {
        id: 'slims-br-pocket-dc',
        name: 'Dubai Class Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Dubai Class',
        description: 'Dubai opulence in a refined, portable slim format.',
        tagline: 'Pocket-sized luxury inspired by the Gulf\'s finest.',
        longDescription: 'Carry the exotic essence of Dubai in the slimmest, most portable format. The Dubai Class Slims Pocket delivers rich, sophisticated Middle Eastern-inspired flavor in a compact package that\'s always ready when inspiration strikes.',
        highlights: [
            'Exotic Dubai-inspired richness in pocket-slim format',
            'The most portable luxury — slim and compact',
            'Premium Golden Virginia blend — artisan hand-rolled',
            'Spirallo Smooth Flow Filters — exotic, smooth draws',
            'French rolling papers — refined since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Dubai Class Flavored/DSC05734.jpg'],
        tag: 'Exotic'
    },
    {
        id: 'slims-br-pocket-ks',
        name: 'Kesar Saffron Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Kesar Saffron',
        description: 'Precious saffron in a convenient slim pocket format.',
        tagline: 'Saffron\'s royal aroma, slimmed and pocketed for luxury on the move.',
        longDescription: 'The Kesar Saffron Slims Pocket brings the regal, aromatic luxury of saffron into the most portable slim format. Each draw delivers a delicate saffron kiss in a compact, elegant package. Royalty that fits in your pocket.',
        highlights: [
            'Precious saffron aroma in the slimmest pocket format',
            'Compact royalty — elegance that travels with you',
            'Premium Golden Virginia blend — hand-rolled regality',
            'Spirallo Smooth Flow Filters — aromatic, graceful draws',
            'French rolling papers — heritage since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Kesar Saffron Flavored/DSC05684.jpg'],
        tag: 'Artisan'
    },
    {
        id: 'slims-br-pocket-og',
        name: 'Original Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Original',
        description: 'The pure heritage experience in a portable slim format.',
        tagline: 'Classic heritage, pocketed for life\'s finest moments.',
        longDescription: 'The Original Slims Pocket is the most portable expression of our timeless classic. Each slim delivers the balanced, rich flavor that built our reputation — in a compact pocket format that\'s always within reach. Heritage refined, pocket perfected.',
        highlights: [
            'Timeless Original flavor in pocket-slim format',
            'Our most compact heritage expression',
            'Premium Golden Virginia blend — hand-rolled tradition',
            'Spirallo Smooth Flow Filters — classic, smooth draws',
            'French rolling papers — perfected since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Original Flavored/DSC05668-removebg-preview.png'],
        tag: 'Heritage'
    },
    {
        id: 'slims-br-pocket-pk',
        name: 'Paan Kiwi Mint Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Paan Kiwi Mint',
        description: 'Unique fusion blend in a compact slim pocket box.',
        tagline: 'A bold fusion adventure that fits in your pocket.',
        longDescription: 'Our most daring flavor meets our most portable format. The Paan Kiwi Mint Slims Pocket packs the sweet-tangy-cool triple fusion into a compact slim pocket box. Bold flavor, slim elegance, pocket convenience.',
        highlights: [
            'Triple-fusion flavor in pocket-slim format',
            'Bold adventure in the most compact package',
            'Premium Golden Virginia blend — hand-rolled boldness',
            'Spirallo Smooth Flow Filters — invigorating, crisp draws',
            'French rolling papers — craftsmanship since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Paan Kiwi Mint Flavored/DSC05729.jpg'],
        tag: 'Unique'
    },
    {
        id: 'slims-br-pocket-sw',
        name: 'Spring Water Slims Pocket',
        category: 'Slims',
        subcategory: 'Brown Slims Pocket',
        flavor: 'Spring Water',
        description: 'Pure relaxation in a portable slim pocket format.',
        tagline: 'The purest, most portable slim experience — spring freshness on demand.',
        longDescription: 'The Spring Water Slims Pocket is purity distilled into its most portable form. Each slim delivers a crisp, clean draw that refreshes and revitalizes — all in a compact pocket box. The ultimate in slim, pure, on-the-go relaxation.',
        highlights: [
            'Pure Spring Water freshness in pocket-slim format',
            'The most portable expression of purity',
            'Premium Golden Virginia blend — hand-rolled clarity',
            'Spirallo Smooth Flow Filters — light, clean draws',
            'French rolling papers — heritage quality since 1873'
        ],
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Spring Water Flavored/DSC05657-removebg-preview.png'],
        tag: 'Pure'
    }
];
