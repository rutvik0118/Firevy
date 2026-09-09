import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';
import SubPageDirectory from '../../components/PageManager/SubPageDirectory';

export const ServicesMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  if (activeSubPage) {
    return <GenericSubPageManager mainPageId="services" subPageSlug={activeSubPage} />;
  }

  return <SubPageDirectory mainPageId="services" />;
};

export default ServicesMasterPage;
