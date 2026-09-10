import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const ServicesMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  return <GenericSubPageManager mainPageId="services" subPageSlug={activeSubPage} />;
};

export default ServicesMasterPage;

