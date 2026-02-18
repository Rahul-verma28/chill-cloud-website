export interface Product {
    id: string;
    name: string;
    category: 'Cigrolls' | 'Cones' | 'Rolling Paper' | 'Slims';
    subcategory: string;
    packSize?: string;
    flavor?: string;
    description: string;
    images: string[];
    price?: string;
    tag?: string;
}

export const CATEGORIES = ['All', 'Cigrolls', 'Cones', 'Rolling Paper', 'Slims'] as const;

export const products: Product[] = [
    // 1. Cigrolls - Brown - Pack Box (12 pack)
    {
        id: 'cig-br-12-am',
        name: 'American Freezer Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'American Freezer',
        description: 'Elite hand-rolled cigrolls with a refreshing American Freezer blast.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/American Freezer Flavored/American.png'],
        tag: 'Bestseller'
    },
    {
        id: 'cig-br-12-cm',
        name: 'Commissioner Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Commissioner',
        description: 'The authoritative choice for those who appreciate deep, nuanced flavor.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Commissioner Flavored/DSC05609.jpg'],
        tag: 'Classic'
    },
    {
        id: 'cig-br-12-da',
        name: 'Double Apple Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Double Apple',
        description: 'Twice the crispness, twice the luxury. A timeless apple blend.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Double Apple Flavored/DSC05604.jpg'],
        tag: 'Premium'
    },
    {
        id: 'cig-br-12-dc',
        name: 'Dubai Class Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Dubai Class',
        description: 'Opulence in every roll. Experience the high-end Dubai aesthetic.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Dubai Class Flavored/DSC05602.jpg'],
        tag: 'Exotic'
    },
    {
        id: 'cig-br-12-ks',
        name: 'Kesar Saffron Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Kesar Saffron',
        description: 'Infused with the world\'s most precious spice for a truly golden moment.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Kesar Saffron Flavored/DSC05597.jpg'],
        tag: 'Artisan'
    },
    {
        id: 'cig-br-12-og',
        name: 'Original Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Original',
        description: 'The pure, unadulterated artisanal experience that started it all.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Original Flavored/DSC05594.jpg'],
        tag: 'Heritage'
    },
    {
        id: 'cig-br-12-pk',
        name: 'Paan Kiwi Mint Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Paan Kiwi Mint',
        description: 'A daring fusion of traditional paan, tangy kiwi, and fresh mint.',
        images: ['/products/Cigrolls/Brown/Pack Box-12 pack/Paan Kiwi Mint Flavored/DSC05603.jpg'],
        tag: 'Unique'
    },
    {
        id: 'cig-br-12-sw',
        name: 'Spring Water Cigroll',
        category: 'Cigrolls',
        subcategory: 'Pack Box (12 Pack)',
        flavor: 'Spring Water',
        description: 'Calm and collected. A smooth, clean flavor profile for pure relaxation.',
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
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Banna.jpg'],
        tag: 'Exotic'
    },
    {
        id: 'cone-fl-blunt',
        name: 'Blunt Black Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'Bold blunt black cones in a premium glass jar. For the connoisseur.',
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Blunt-black.jpg'],
        tag: 'Bold'
    },
    {
        id: 'cone-fl-mix',
        name: 'Mixed Flavors Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'A curated selection of our finest flavored cones in one artisan jar.',
        images: ['/products/Cones/Prerolled/Flavored/Jars/Pre-Rolled-Cone-Jar-Mix-flaovrs.jpg'],
        tag: 'Variety'
    },
    {
        id: 'cone-fl-rose',
        name: 'Rose Flavored Cone Jar',
        category: 'Cones',
        subcategory: 'Flavored Jars',
        description: 'Delicate rose-infused cones for an elegant, aromatic experience.',
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
        images: ['/products/Slims/Brown/Pocket box 10 sticks/Spring Water Flavored/DSC05657-removebg-preview.png'],
        tag: 'Pure'
    }
];
