import { COMPANY_INFO } from "./constants"

export const generateJsonLd = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: "https://jaskpreetfood.com",
    logo: "https://jaskpreetfood.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      email: COMPANY_INFO.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressCountry: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.pincode,
    },
    sameAs: [COMPANY_INFO.social.linkedin, COMPANY_INFO.social.facebook, COMPANY_INFO.social.instagram],
  }),

  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    url: "https://jaskpreetfood.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jaskpreetfood.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }),

  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  product: (product: any) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDesc,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: COMPANY_INFO.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  }),
}
