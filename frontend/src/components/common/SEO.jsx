import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../../constants/brand';

export const SEO = ({ title, description, canonical, ogImage, ogType = 'website' }) => {
  const pageTitle = title ? `${title} | ${BRAND.name}` : BRAND.meta.defaultTitle;
  const pageDesc = description || BRAND.meta.defaultDescription;
  const siteUrl = BRAND.meta.siteUrl;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const image = ogImage || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BRAND.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
