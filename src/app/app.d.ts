type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type Orientation = 'vertical' | 'horizontal';
type ColorScheme = 'auto' | 'ligth' | 'dark';
type Sizeable<T> = {
  [key in Size]: T;
};