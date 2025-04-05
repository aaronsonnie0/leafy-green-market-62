
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Add an item to the cart
  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      
      if (existingItemIndex > -1) {
        // Item exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        
        toast({
          title: "Quantity updated",
          description: `${item.name} quantity increased`,
        });
        
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast({
          title: "Item added to cart",
          description: `${item.name} has been added to your cart`,
        });
        
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart
  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find((i) => i.id === itemId);
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.name} has been removed from your cart`,
        });
      }
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  // Update the quantity of an item
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  // Calculate the total number of items
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate the subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
