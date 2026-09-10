import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const ProductMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  return <GenericSubPageManager mainPageId="product" subPageSlug={activeSubPage} />;
};

export default ProductMasterPage;

