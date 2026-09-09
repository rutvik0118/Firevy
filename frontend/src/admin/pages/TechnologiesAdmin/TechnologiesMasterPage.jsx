import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';
import SubPageDirectory from '../../components/PageManager/SubPageDirectory';

export const TechnologiesMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  if (activeSubPage) {
    return <GenericSubPageManager mainPageId="technology" subPageSlug={activeSubPage} />;
  }

  return <SubPageDirectory mainPageId="technology" />;
};

export default TechnologiesMasterPage;
