import React from 'react';
import { useParams } from 'react-router-dom';
import GenericSubPageManager from '../../components/PageManager/GenericSubPageManager';

export const OurWorkMasterPage = () => {
  const params = useParams();
  const activeSubPage = params.slug || params.subPage;

  return <GenericSubPageManager mainPageId="ourWork" subPageSlug={activeSubPage} />;
};

export default OurWorkMasterPage;

