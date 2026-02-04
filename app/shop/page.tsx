import Image from 'next/image';
import type { Metadata } from 'next';
import ProductSchema from '../../components/schema/ProductSchema';

export const metadata: Metadata = {
  title: 'Shop — Available Works | Meghan\'s Momentum',
  description: 'Browse unique handcrafted pieces including resin jewelry with Colorado wildflowers, size-inclusive crochet clothing, and ethical taxidermy art. Each piece honors the natural world.',
  openGraph: {
    title: 'Shop — Available Works | Meghan\'s Momentum',
    description: 'Browse unique handcrafted pieces including resin jewelry, crochet clothing, and ethical taxidermy art.',
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
    description: 'Browse unique handcrafted pieces including resin jewelry, crochet clothing, and ethical taxidermy art.',
    images: ['https://meghansmomentum.com/images/crochet/texas_sunset_acrylic.jpg']
  }
};

// Product data from Image Catalog V2
const products = [
  // 💎 JEWELRY (Resin Pieces) - 5 products
  {
    id: 1,
    title: "Bushy Tailed Wood Rat Mandible and Fern",
    price: 54,
    image: "/images/jewelry/wood_rat_mandible_fern.jpg",
    category: "Resin Jewelry",
    materials: ["Wood Rat Mandible", "Fern", "Resin"],
    featured: true,
  },
  {
    id: 2,
    title: "Mouse Jaw & Allium Flower",
    price: 38,
    image: "/images/jewelry/mouse_jaw_allium.jpg",
    category: "Resin Jewelry",
    materials: ["Mouse Jaw", "Allium Flower", "Resin"],
  },
  {
    id: 3,
    title: "Mouse Skull in Resin",
    price: 35,
    image: "/images/jewelry/mouse_skull_resin.jpg",
    category: "Resin Jewelry",
    materials: ["Mouse Skull", "Resin"],
    badge: "Most Affordable",
  },
  {
    id: 4,
    title: "Wood Rat Mandible & Fern",
    subtitle: "Variant Design",
    price: 54,
    image: "/images/jewelry/wood_rat_mandible_variant.jpg",
    category: "Resin Jewelry",
    materials: ["Wood Rat Mandible", "Fern", "Resin"],
  },
  {
    id: 6,
    title: "Complete Mouse Skull & Lower Jaw",
    price: 75,
    image: "/images/jewelry/complete_mouse_skull.jpg",
    category: "Resin Jewelry",
    materials: ["Complete Mouse Skull", "Lower Jaw", "Resin"],
  },

  // 🧶 CROCHET (Fiber Arts) - 4 products
  {
    id: 8,
    title: "Tea and Honey",
    subtitle: "100% Soft Wool Crochet",
    price: 175,
    image: "/images/crochet/tea_and_honey_wool.jpg",
    category: "Fiber Arts",
    materials: ["100% Soft Wool"],
    care: "Machine washable on delicate, cold. Hang to dry.",
  },
  {
    id: 11,
    title: "Artist Pallet",
    subtitle: "100% Acrylic Crochet",
    price: 200,
    image: "/images/crochet/artist_pallet_acrylic.jpg",
    category: "Fiber Arts",
    materials: ["100% Acrylic"],
    care: "Machine washable. Hang to dry.",
  },
  {
    id: 12,
    title: "Texas Sunset",
    subtitle: "100% Acrylic Crochet",
    price: 350,
    image: "/images/crochet/texas_sunset_acrylic.jpg",
    category: "Fiber Arts",
    materials: ["100% Acrylic"],
    care: "Machine washable on delicate, cold. Hang to dry.",
    featured: true,
    badge: "Premium",
  },
  {
    id: 13,
    title: "Lilies in the Pond",
    subtitle: "100% Soft Wool Crochet",
    price: 225,
    image: "/images/crochet/lilies_pond_wool.jpg",
    category: "Fiber Arts",
    materials: ["100% Soft Wool"],
    care: "Machine washable on delicate, cold. Hang to dry.",
  },

  // 🦴 TAXIDERMY (Ethical Taxidermy Art) - 3 products
  {
    id: 7,
    title: "Sunlight on the Snow",
    subtitle: "Raccoon Skull with Amethyst Teeth",
    price: 275,
    image: "/images/taxidermy/sunlight_snow_raccoon.jpg",
    category: "Painted Taxidermy",
    materials: ["Raccoon Skull", "Amethyst", "Acrylic Paint"],
    description: "Found in Grand Junction, CO. Teeth replaced with amethyst crystals.",
    featured: true,
    badge: "Premium",
  },
  {
    id: 9,
    title: "Feeling Blue",
    subtitle: "Bushy Tailed Wood Rat Foot",
    price: 75,
    image: "/images/taxidermy/feeling_blue_rat_foot.jpg",
    category: "Taxidermy",
    materials: ["Wood Rat Foot"],
    description: "Taxidermied by Meghan.",
  },
  {
    id: 5,
    title: "In The Aspen Garden",
    subtitle: "Hand Pressed Flowers & Tiger Butterfly",
    price: 75,
    image: "/images/taxidermy/aspen_garden_butterfly.jpg",
    category: "Taxidermy",
    materials: ["Hand Pressed Flowers", "Tiger Butterfly", "Resin"],
    featured: true,
  },
];

export default function Shop() {
  const featuredProducts = products.filter(p => p.featured);

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h1 className="font-serif text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              Available Works
            </h1>
            <p className="font-sans text-neutral-600 text-lg leading-relaxed">
              Each piece is a unique celebration of nature, ethically sourced and handcrafted with care in Colorado.
              From resin jewelry to fiber arts and painted taxidermy.
            </p>
          </div>

          {/* Featured Products */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-light text-neutral-900 mb-10">Featured Pieces</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Badge */}
                  {product.badge && (
                    <div className="mb-3">
                      <span className="text-xs font-sans uppercase tracking-widest px-3 py-1 bg-amber-100 text-amber-900">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square mb-4 overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Info */}
                  <p className="font-sans text-sm text-neutral-500 mb-1">{product.category}</p>
                  <h3 className="font-serif text-xl font-light text-neutral-900 mb-1">{product.title}</h3>
                  {product.subtitle && (
                    <p className="font-sans text-sm text-neutral-600 mb-2">{product.subtitle}</p>
                  )}
                  <p className="font-serif text-xl text-neutral-900">${product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div>
            <h2 className="font-serif text-3xl font-light text-neutral-900 mb-10">All Pieces</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product) => (
                <div key={product.id} className="group">
                  {/* Badge */}
                  {product.badge && (
                    <div className="mb-3">
                      <span className="text-xs font-sans uppercase tracking-widest px-3 py-1 bg-amber-100 text-amber-900">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square mb-4 overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={`${product.title} - ${product.category}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <p className="font-sans text-sm text-neutral-500 mb-1">{product.category}</p>
                  <h3 className="font-serif text-2xl font-light text-neutral-900 mb-2">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="font-sans text-sm text-neutral-600 mb-2">{product.subtitle}</p>
                  )}

                  {/* Materials */}
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

                  {/* Price */}
                  <p className="font-serif text-xl text-neutral-900 mb-3">${product.price}</p>

                  {/* Description or Care */}
                  {(product.description || product.care) && (
                    <p className="font-sans text-sm text-neutral-600 mb-4">
                      {product.description || product.care}
                    </p>
                  )}

                  {/* CTA Button */}
                  <button className="font-sans text-sm uppercase tracking-widest text-neutral-600 hover:text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-colors">
                    Inquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
