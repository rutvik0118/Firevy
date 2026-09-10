import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const TechnologiesMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  return <GenericSubPageManager mainPageId="technology" subPageSlug={activeSubPage} />;
};

export default TechnologiesMasterPage;

