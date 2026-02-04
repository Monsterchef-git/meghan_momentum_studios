export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Meghan's Momentum",
        "alternateName": "Meghan's Momentum Studios",
        "url": "https://meghansmomentum.com",
        "logo": "https://meghansmomentum.com/images/logo.png",
        "description": "Artist and naturalist creating fiber arts, nature-preserved jewelry, and sacred taxidermy art in Colorado. Honoring the delicate relationship between humans and the natural world.",
        "founder": {
            "@type": "Person",
            "name": "Meghan Boston",
            "jobTitle": "Artist & Naturalist",
            "description": "Fiber artist and naturalist who sees life in all things, creating size-inclusive clothing, nature-preserved jewelry, and sacred taxidermy art."
        },
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Colorado",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "meghanmboston@gmail.com"
        },
        "sameAs": [
            "https://www.instagram.com/meghansmomentum/"
        ],
        "artform": ["Fiber Arts", "Jewelry Making", "Taxidermy Art", "Crochet"],
        "knowsAbout": [
            "Sustainable Fashion",
            "Ethical Taxidermy",
            "Nature Preservation",
            "Resin Jewelry",
            "Fiber Arts",
            "Colorado Wildlife"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
