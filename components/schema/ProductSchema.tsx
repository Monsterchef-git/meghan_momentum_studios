interface ProductSchemaProps {
    name: string;
    description?: string;
    image: string;
    price: number;
    category: string;
    materials?: string[];
    sku?: string | number;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
}

export default function ProductSchema({
    name,
    description,
    image,
    price,
    category,
    materials,
    sku,
    availability = 'InStock'
}: ProductSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": name,
        "description": description || `Handcrafted ${category.toLowerCase()} by Meghan Boston. ${materials ? `Made with ${materials.join(', ')}.` : ''}`,
        "image": `https://meghansmomentum.com${image}`,
        "sku": sku?.toString() || `MM-${name.replace(/\s+/g, '-').toUpperCase()}`,
        "brand": {
            "@type": "Brand",
            "name": "Meghan's Momentum"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://meghansmomentum.com/shop",
            "priceCurrency": "USD",
            "price": price,
            "availability": `https://schema.org/${availability}`,
            "seller": {
                "@type": "Organization",
                "name": "Meghan's Momentum"
            }
        },
        "category": category,
        ...(materials && materials.length > 0 && {
            "material": materials.join(', ')
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
