import { useEffect } from "react";

import { Navbar, Footer } from "src/documentation/components";

export const Home = (): JSX.Element => {
  useEffect(() => {
    document.title = "byoti UI";
  }, []);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};
