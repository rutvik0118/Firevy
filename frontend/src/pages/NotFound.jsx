import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <section className="min-h-[70vh] flex items-center justify-center bg-brand-dark py-20 text-center">
        <Container className="max-w-md space-y-6">
          <div className="text-7xl font-extrabold text-gradient font-mono">404</div>
          <h2 className="text-2xl font-bold text-white">System Endpoint Not Found</h2>
          <p className="text-sm text-slate-400">
            The page or software resource you requested could not be located. It may have been moved or updated.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button to="/" variant="primary" icon={Home}>
              Return Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
