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

    // 2. Cones - Brown
    {
        id: 'cone-br-55',
        name: 'Brown Cones (55 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '55 Pieces',
        description: 'Hand-crafted brown pre-rolled cones in a generous 55-piece bulk box.',
        images: ['/products/Cones/Prerolled/Brown/55 P/DSC05790.jpg'],
        tag: 'Bulk'
    },
    {
        id: 'cone-br-64',
        name: 'Brown Cones (64 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '64 Pieces',
        description: 'Superior brown cones meticulously rolled for consistency and flow.',
        images: ['/products/Cones/Prerolled/Brown/64 P/DSC05771.jpg'],
        tag: 'Value'
    },
    {
        id: 'cone-br-72',
        name: 'Brown Cones (72 Pcs)',
        category: 'Cones',
        subcategory: 'Brown Prerolled',
        packSize: '72 Pieces',
        description: 'The ultimate bulk pack of our premium brown pre-rolled cones.',
        images: ['/products/Cones/Prerolled/Brown/72 P/DSC05756.jpg'],
        tag: 'Master'
    },
    {
        id: 'cone-fl-jars',
        name: 'Flavored Cones in Jars',
        category: 'Cones',
        subcategory: 'Flavored',
        description: 'Exotic flavored cones preserved in artisan glass jars for freshness.',
        images: ['/products/Cones/Flavored in jars/10-removebg-preview.png'],
        tag: 'Artisan'
    },

    // 3. Rolling Paper
    {
        id: 'rp-white-4',
        name: 'White Paper Four Pack',
        category: 'Rolling Paper',
        subcategory: 'White & Brown',
        packSize: '4 Pack',
        description: 'Elite ultra-thin white papers in a convenient 4-pack variant.',
        images: ['/products/Rolling Paper/White and brown/Four pack/11-removebg-preview.png'],
        tag: 'Popular'
    },
    {
        id: 'rp-white-3',
        name: 'White Paper Trio Pack',
        category: 'Rolling Paper',
        subcategory: 'White & Brown',
        packSize: '3 Pack',
        description: 'The perfect trio of premium rolling papers for any occasion.',
        images: ['/products/Rolling Paper/White and brown/Trio pack/12-removebg-preview.png'],
        tag: 'Value'
    },

    // 4. Slims - Brown
    {
        id: 'slims-br-am',
        name: 'American Freezer Slims',
        category: 'Slims',
        subcategory: 'Brown Slims',
        flavor: 'American Freezer',
        description: 'Refined slim format with our signature American Freezer chill.',
        images: ['/products/Slims/Brown/Pack box - 10 pack/American Freezer Flavored/American_1.png'],
        tag: 'Refined'
    },
    {
        id: 'slims-br-cm',
        name: 'Commissioner Slims',
        category: 'Slims',
        subcategory: 'Brown Slims',
        flavor: 'Commissioner',
        description: 'Maximum sophistication in our lighter, more delicate slim roll.',
        images: ['/products/Slims/Brown/Pack box - 10 pack/Commissioner Flavored/DSC05657-removebg-preview.png'],
        tag: 'Elite'
    }
];
