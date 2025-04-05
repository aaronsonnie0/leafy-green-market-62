
import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ChevronLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-6">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <ShoppingBag size={32} className="text-gray-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {items.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-800">
                                  <h3>
                                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                                  </h3>
                                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
                              </div>
                              
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                  <button 
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="px-4 py-1">{item.quantity}</span>
                                  <button 
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                                
                                <button 
                                  type="button" 
                                  className="text-red-500 hover:text-red-600 font-medium flex items-center"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 size={16} className="mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                    <div className="flex justify-between">
                      <Button 
                        variant="ghost" 
                        asChild
                        className="text-leaf-600"
                      >
                        <Link to="/" className="flex items-center">
                          <ChevronLeft size={16} className="mr-1" />
                          Continue Shopping
                        </Link>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="text-red-500 border-red-300 hover:bg-red-50"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                    
                    <div className="flow-root">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <p className="text-base text-gray-600">Subtotal</p>
                          <p className="text-base font-medium text-gray-800">${subtotal.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex justify-between">
                          <p className="text-base text-gray-600">Shipping</p>
                          <p className="text-base text-gray-800">
                            {subtotal >= 50 ? "Free" : "$4.99"}
                          </p>
                        </div>
                        
                        <div className="flex justify-between">
                          <p className="text-base text-gray-600">Tax</p>
                          <p className="text-base text-gray-800">${(subtotal * 0.1).toFixed(2)}</p>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between font-medium">
                          <p className="text-lg text-gray-800">Total</p>
                          <p className="text-lg text-gray-800">
                            ${(subtotal + (subtotal >= 50 ? 0 : 4.99) + (subtotal * 0.1)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        asChild
                        className="w-full bg-leaf-600 hover:bg-leaf-700 text-white"
                      >
                        <Link to="/checkout">
                          Proceed to Checkout
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-center">
                        <img src="/placeholder.svg" alt="Payment methods" className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Promo code - could be expanded */}
                <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Promo Code</h2>
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Enter promo code" 
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
