import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';
import SubPageDirectory from '../../components/PageManager/SubPageDirectory';

export const HireMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  if (activeSubPage) {
    return <GenericSubPageManager mainPageId="hireDevelopers" subPageSlug={activeSubPage} />;
  }

  return <SubPageDirectory mainPageId="hireDevelopers" />;
};

export default HireMasterPage;
