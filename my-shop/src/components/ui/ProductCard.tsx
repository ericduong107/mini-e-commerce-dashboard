import React from 'react';
import { type Product } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Đã thêm vào giỏ!"); // Làm đơn giản trước, sau này dùng Toast sau
  };

  return (
    // <div className="group border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full bg-white">
    //   <img 
    //     src={product.image} 
    //     alt={product.title} 
    //     className="h-48 w-full object-contain mb-4" 
    //   />
    //   <h3 className="text-lg font-bold mb-2 line-clamp-1" title={product.title}>
    //     {product.title}
    //   </h3>
    //   <p className="text-gray-500 text-sm mb-2 capitalize">{product.category}</p>
    //   <div className="mt-auto flex justify-between items-center">
    //     <span className="text-xl font-bold text-blue-600">${product.price}</span>
    //     <button 
    //       onClick={handleAddToCart}
    //       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
    <div className="group relative">
      <img
        src={product.image} 
        alt={product.title}  
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700" title={product.title}>
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
        <button 
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;