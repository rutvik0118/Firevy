import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const HireMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  return <GenericSubPageManager mainPageId="hireDevelopers" subPageSlug={activeSubPage} />;
};

export default HireMasterPage;

