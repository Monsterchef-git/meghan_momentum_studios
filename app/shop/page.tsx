import Image from 'next/image';
import type { Metadata } from 'next';
import ProductSchema from '../../components/schema/ProductSchema';

export const metadata: Metadata = {
  title: 'Shop — Available Works | Meghan\'s Momentum',
  description: 'Browse unique handcrafted pieces including resin jewelry, crochet clothing, bottle jewelry, and painted skulls. Each piece honors the natural world.',
  openGraph: {
    title: 'Shop — Available Works | Meghan\'s Momentum',
    description: 'Browse unique handcrafted pieces including resin jewelry, crochet clothing, bottle jewelry, and painted skulls.',
    type: 'website',
    url: 'https://meghansmomentum.com/shop',
    images: [
      {
        url: 'https://meghansmomentum.com/images/crochet/texas_sunset_acrylic.jpg',
        width: 1200,
        height: 630,
        alt: 'Handcrafted Art by Meghan\'s Momentum'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop — Available Works | Meghan\'s Momentum',
    description: 'Browse unique handcrafted pieces including resin jewelry, crochet clothing, bottle jewelry, and painted skulls.',
    images: ['https://meghansmomentum.com/images/crochet/texas_sunset_acrylic.jpg']
  }
};

// Category descriptions
const categories = [
  {
    slug: 'resin-jewelry',
    title: 'Resin Jewelry',
    description: 'Delicate botanical specimens and ethically sourced bones preserved in crystal-clear resin, wearable art that honors the natural world.',
  },
  {
    slug: 'crochet',
    title: 'Crochet',
    description: 'Size-inclusive fiber art pieces handcrafted with premium yarns, each stitch a meditation on color and texture.',
  },
  {
    slug: 'bottle-jewelry',
    title: 'Bottle Jewelry',
    description: 'Miniature terrariums and botanical curiosities captured in glass, tiny worlds you can wear close to your heart.',
  },
  {
    slug: 'painted-skulls',
    title: 'Painted Skulls',
    description: 'Ethically sourced bones transformed into vibrant memento mori, celebrating the beauty found in life\'s impermanence.',
  },
];

// Product data organized by category
const products = [
  // ✨ RESIN JEWELRY - 6 products
  {
    id: 1,
    title: "Bushy Tailed Wood Rat Mandible and Fern",
    price: 54,
    image: "/images/jewelry/wood_rat_mandible_fern.jpg",
    category: "resin-jewelry",
    materials: ["Wood Rat Mandible", "Fern", "Resin"],
  },
  {
    id: 2,
    title: "Mouse Jaw & Allium Flower",
    price: 38,
    image: "/images/jewelry/mouse_jaw_allium.jpg",
    category: "resin-jewelry",
    materials: ["Mouse Jaw", "Allium Flower", "Resin"],
  },
  {
    id: 3,
    title: "Mouse Skull in Resin",
    price: 35,
    image: "/images/jewelry/mouse_skull_resin.jpg",
    category: "resin-jewelry",
    materials: ["Mouse Skull", "Resin"],
  },
  {
    id: 4,
    title: "Wood Rat Mandible & Fern",
    subtitle: "Variant Design",
    price: 54,
    image: "/images/jewelry/wood_rat_mandible_variant.jpg",
    category: "resin-jewelry",
    materials: ["Wood Rat Mandible", "Fern", "Resin"],
  },
  {
    id: 5,
    title: "In The Aspen Garden",
    subtitle: "Hand Pressed Flowers & Tiger Butterfly",
    price: 75,
    image: "/images/taxidermy/aspen_garden_butterfly.jpg",
    category: "resin-jewelry",
    materials: ["Hand Pressed Flowers", "Tiger Butterfly", "Resin"],
  },
  {
    id: 6,
    title: "Complete Mouse Skull & Lower Jaw",
    price: 75,
    image: "/images/jewelry/complete_mouse_skull.jpg",
    category: "resin-jewelry",
    materials: ["Complete Mouse Skull", "Lower Jaw", "Resin"],
  },

  // ✨ CROCHET - 6 products
  {
    id: 8,
    title: "Tea and Honey",
    subtitle: "100% Soft Wool Crochet",
    price: 175,
    image: "/images/crochet/tea_and_honey_wool.jpg",
    category: "crochet",
    materials: ["100% Soft Wool"],
    care: "Machine washable on delicate, cold. Hang to dry.",
  },
  {
    id: 11,
    title: "Artist Pallet",
    subtitle: "100% Acrylic Crochet",
    price: 200,
    image: "/images/crochet/artist_pallet_acrylic.jpg",
    category: "crochet",
    materials: ["100% Acrylic"],
    care: "Machine washable. Hang to dry.",
  },
  {
    id: 12,
    title: "Texas Sunset",
    subtitle: "100% Acrylic Crochet",
    price: 350,
    image: "/images/crochet/texas_sunset_acrylic.jpg",
    category: "crochet",
    materials: ["100% Acrylic"],
    care: "Machine washable on delicate, cold. Hang to dry.",
  },
  {
    id: 13,
    title: "Lilies in the Pond",
    subtitle: "100% Soft Wool Crochet",
    price: 225,
    image: "/images/crochet/lilies_pond_wool.jpg",
    category: "crochet",
    materials: ["100% Soft Wool"],
    care: "Machine washable on delicate, cold. Hang to dry.",
  },
  {
    id: 14,
    title: "Placeholder Crochet 1",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "crochet",
    materials: ["Coming Soon"],
  },
  {
    id: 15,
    title: "Placeholder Crochet 2",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "crochet",
    materials: ["Coming Soon"],
  },

  // ✨ BOTTLE JEWELRY - 6 products (placeholders)
  {
    id: 20,
    title: "Botanical Bottle Necklace",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass", "Dried Flowers", "Sterling Silver"],
  },
  {
    id: 21,
    title: "Miniature Terrarium Pendant",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass Vial", "Moss", "Tiny Crystals"],
  },
  {
    id: 22,
    title: "Wildflower Bottle Charm",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass", "Colorado Wildflowers"],
  },
  {
    id: 23,
    title: "Crystal Garden Bottle",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass", "Amethyst Chips", "Moss"],
  },
  {
    id: 24,
    title: "Fern & Lichen Vial",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass Vial", "Fern", "Lichen"],
  },
  {
    id: 25,
    title: "Butterfly Wing Bottle",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "bottle-jewelry",
    materials: ["Glass", "Butterfly Wing Fragment"],
  },

  // ✨ PAINTED SKULLS - 6 products
  {
    id: 7,
    title: "Sunlight on the Snow",
    subtitle: "Raccoon Skull with Amethyst Teeth",
    price: 275,
    image: "/images/taxidermy/sunlight_snow_raccoon.jpg",
    category: "painted-skulls",
    materials: ["Raccoon Skull", "Amethyst", "Acrylic Paint"],
    description: "Found in Grand Junction, CO. Teeth replaced with amethyst crystals.",
  },
  {
    id: 9,
    title: "Feeling Blue",
    subtitle: "Bushy Tailed Wood Rat Foot",
    price: 75,
    image: "/images/taxidermy/feeling_blue_rat_foot.jpg",
    category: "painted-skulls",
    materials: ["Wood Rat Foot"],
    description: "Taxidermied by Meghan.",
  },
  {
    id: 30,
    title: "Placeholder Skull 1",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "painted-skulls",
    materials: ["Coming Soon"],
  },
  {
    id: 31,
    title: "Placeholder Skull 2",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "painted-skulls",
    materials: ["Coming Soon"],
  },
  {
    id: 32,
    title: "Placeholder Skull 3",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "painted-skulls",
    materials: ["Coming Soon"],
  },
  {
    id: 33,
    title: "Placeholder Skull 4",
    price: 0,
    image: "/images/placeholder.jpg",
    category: "painted-skulls",
    materials: ["Coming Soon"],
  },
];

export default function Shop() {
  return (
    <>
      {/* Product Schemas */}
      {products.map((product) => (
        <ProductSchema
          key={product.id}
          name={product.title}
          description={product.description || product.subtitle}
          image={product.image}
          price={product.price}
          category={product.category}
          materials={product.materials}
          sku={product.id}
          availability="InStock"
        />
      ))}

      <section className="bg-white">
        <div className="container mx-auto px-6">
          {/* Hero Header */}
          <div className="max-w-3xl py-24 mb-12">
            <h1 className="font-serif text-7xl font-light text-neutral-900 mb-6 tracking-tight leading-tight">
              Available Works
            </h1>
            <p className="font-sans text-neutral-600 text-lg leading-relaxed">
              Each piece is a unique celebration of nature, ethically sourced and handcrafted with care in Colorado.
            </p>
          </div>

          {/* Categories */}
          {categories.map((category, categoryIndex) => {
            const categoryProducts = products.filter(p => p.category === category.slug);

            return (
              <div key={category.slug} className={categoryIndex > 0 ? "mt-32" : ""}>
                {/* Category Header */}
                <div className="max-w-2xl mb-16">
                  <h2 className="font-serif text-5xl font-light text-neutral-900 mb-4 tracking-tight">
                    ✨ {category.title}
                  </h2>
                  <p className="font-sans text-neutral-600 text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Asymmetric Gallery Grid */}
                <div className="grid grid-cols-12 gap-6 mb-24">
                  {categoryProducts.map((product, index) => {
                    // Create asymmetric layouts with different column spans
                    const layouts = [
                      'col-span-12 md:col-span-7',      // Large
                      'col-span-12 md:col-span-5',      // Medium
                      'col-span-12 md:col-span-4',      // Small
                      'col-span-12 md:col-span-5',      // Medium
                      'col-span-12 md:col-span-3',      // Small
                      'col-span-12 md:col-span-6',      // Medium-large
                    ];

                    const aspectRatios = [
                      'aspect-[4/3]',     // Landscape
                      'aspect-square',     // Square
                      'aspect-[3/4]',     // Portrait
                      'aspect-square',     // Square
                      'aspect-[3/4]',     // Portrait
                      'aspect-[4/3]',     // Landscape
                    ];

                    return (
                      <div
                        key={product.id}
                        className={`${layouts[index % layouts.length]} group`}
                      >
                        {/* Image */}
                        <div className={`relative ${aspectRatios[index % aspectRatios.length]} mb-4 overflow-hidden bg-neutral-100`}>
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>

                        {/* Info */}
                        <h3 className="font-serif text-2xl font-light text-neutral-900 mb-2">
                          {product.title}
                        </h3>
                        {product.subtitle && (
                          <p className="font-sans text-sm text-neutral-600 mb-2">{product.subtitle}</p>
                        )}

                        {/* Materials */}
                        {product.materials && product.materials[0] !== "Coming Soon" && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.materials.slice(0, 2).map((material, i) => (
                              <span
                                key={i}
                                className="text-xs font-sans px-2 py-1 bg-neutral-100 text-neutral-600"
                              >
                                {material}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Price */}
                        {product.price > 0 ? (
                          <p className="font-serif text-xl text-neutral-900 mb-3">${product.price}</p>
                        ) : (
                          <p className="font-sans text-sm text-neutral-500 mb-3 italic">Coming Soon</p>
                        )}

                        {/* Description or Care */}
                        {(product.description || product.care) && (
                          <p className="font-sans text-sm text-neutral-600 mb-4 leading-relaxed">
                            {product.description || product.care}
                          </p>
                        )}

                        {/* CTA Button */}
                        {product.price > 0 && (
                          <button className="font-sans text-sm uppercase tracking-widest text-neutral-600 hover:text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-colors">
                            Inquire
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Bottom Spacer */}
          <div className="pb-24" />
        </div>
      </section>
    </>
  );
}
