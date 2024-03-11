import { CartProvider } from "../context/CartContext.tsx";
import useSliders from "../hooks/useSliders.tsx";

import Header from "../components/Header/Header.tsx";
import Main from "../components/Main.tsx";

function Home() {
  const { slidersForEachCategory } = useSliders();

  return (
    <>
      <CartProvider>
        <Header />
        <Main slidersForEachCategory={slidersForEachCategory} />
      </CartProvider>
    </>
  );
}

export default Home;
