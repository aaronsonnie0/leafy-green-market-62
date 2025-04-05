
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.salePrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          </div>
          <div className="flex items-center">
            {product.salePrice ? (
              <div className="text-right">
                <span className="text-gray-400 line-through text-sm mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="font-semibold text-red-500">
                  ${product.salePrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="font-semibold text-gray-800">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-leaf-600 hover:bg-leaf-700 text-white flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
