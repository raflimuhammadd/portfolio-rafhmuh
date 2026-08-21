export const categoryVariants = {
  web: 'secondary',
  cloud: 'tertiary',
  api: 'muted',
  ml: 'quaternary',
  personal: 'senary',
  academic: 'septenary',
  fun: 'octonary',
  'team': 'quinary',
} as const;

export type CategoryVariant = (typeof categoryVariants)[keyof typeof categoryVariants];

export const categories = Object.keys(categoryVariants) as Array<keyof typeof categoryVariants>;

export const getCategoryVariant = (category: string): CategoryVariant =>
  categoryVariants[category as keyof typeof categoryVariants] ?? 'accent';
