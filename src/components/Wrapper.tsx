import { ReactNode } from 'react';
import { NavBar, Footer } from '../sections';

const Wrapper = ({
  children,
  isFullVersion = false,
}: {
  children: ReactNode;
  isFullVersion?: boolean;
}) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
