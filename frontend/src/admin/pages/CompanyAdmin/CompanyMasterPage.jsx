import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';
import SubPageDirectory from '../../components/PageManager/SubPageDirectory';

export const CompanyMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.subPage || params.slug;

  if (activeSubPage) {
    return <GenericSubPageManager mainPageId="company" subPageSlug={activeSubPage} />;
  }

  return <SubPageDirectory mainPageId="company" />;
};

export default CompanyMasterPage;
