export interface ProductsProps {
  category?: string;
  id?: number;
  title?: string;
  img?: string[];
  price?: number;
  variableIngredients?: string[];
  requiredIngredients?: string[];
  size?: number[];
  dough?: string[];
  isNew?: boolean;
  isBest?: boolean;
  buttonCart?: boolean;
  description?: string;
  key?: number;
}
