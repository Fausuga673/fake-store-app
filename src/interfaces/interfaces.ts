interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity?: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductProps {
  product: Product;
}

interface SlidersProps {
  sections: Product[][];
}

interface ContentHeaderProps {
  sections: Product[][];
  currentSlide: number;
}

interface SlidersButtonProps {
  value: string;
  sections: Product[][];
  position: string;
  handleSliders: (button: string, numberOfSliders: number) => void;
}

interface BurgerMenuProps {
  burgerMenuContent: HTMLUListElement | null;
}

interface Products {
  products: Product[] | undefined;
}

interface CartItemProps {
  product: Product;
}

interface MainProps {
  slidersForEachCategory: Product[][][] | undefined;
}

interface CartContextProps {
  cart: Product[];
  totalOfNewProducts: number;
  addToCart: (product: Product) => void;
  deleteProductFromCart: (product: Product) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalOfProducts: () => number;
  updateTotalOfNewProducts: (quantity: number) => void;
}

interface MenuProps {
  burgerMenuContent: React.RefObject<HTMLUListElement>;
  user: string;
}

export type {
  Product,
  SlidersProps,
  SlidersButtonProps,
  ContentHeaderProps,
  ProductProps,
  BurgerMenuProps,
  Products,
  CartItemProps,
  CartContextProps,
  MainProps,
  MenuProps
};
