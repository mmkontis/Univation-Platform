// Mock data and types for products

export const statusEnum = {
  active: 'active',
  inactive: 'inactive',
  archived: 'archived'
} as const;

export type Status = typeof statusEnum[keyof typeof statusEnum];

export type Product = {
  id: number;
  imageUrl: string;
  name: string;
  status: Status;
  price: number;
  stock: number;
  availableAt: Date;
};

// Mock products data
const mockProducts: Product[] = [
  {
    id: 1,
    imageUrl: '/placeholder.svg',
    name: 'Product 1',
    status: 'active',
    price: 19.99,
    stock: 100,
    availableAt: new Date()
  },
  {
    id: 2,
    imageUrl: '/placeholder.svg',
    name: 'Product 2',
    status: 'inactive',
    price: 29.99,
    stock: 50,
    availableAt: new Date()
  },
  // Add more mock products as needed
];

export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: Product[];
  newOffset: number | null;
  totalProducts: number;
}> {
  let filteredProducts = mockProducts;

  if (search) {
    filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const totalProducts = filteredProducts.length;
  const productsToReturn = filteredProducts.slice(offset, offset + 5);
  const newOffset = offset + 5 < totalProducts ? offset + 5 : null;

  return {
    products: productsToReturn,
    newOffset,
    totalProducts
  };
}

export async function deleteProductById(id: number): Promise<void> {
  const index = mockProducts.findIndex(product => product.id === id);
  if (index !== -1) {
    mockProducts.splice(index, 1);
  }
}

export const insertProductSchema = {
  // Define a simple validation schema if needed
  parse: (data: any) => {
    // Implement basic validation logic here
    return data as Product;
  }
};
