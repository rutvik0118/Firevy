import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const CompanyMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.subPage || params.slug;

  return <GenericSubPageManager mainPageId="company" subPageSlug={activeSubPage} />;
};

export default CompanyMasterPage;

