
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/use-cart";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvv: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (Object.values(formData).some(value => value === "")) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase",
      });
      
      clearCart();
      navigate("/checkout/success");
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Calculate totals
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-2">Checkout</h1>
            <Button 
              variant="ghost" 
              asChild
              className="text-leaf-600 px-0"
            >
              <Link to="/cart" className="flex items-center">
                <ChevronLeft size={16} className="mr-1" />
                Back to Cart
              </Link>
            </Button>
          </div>
          
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Please add some items to your cart before checking out.
              </p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  {/* Shipping information */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                              State <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                              ZIP <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              value={formData.zip}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment information */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h2>
                      <div className="mb-4">
                        <div className="flex items-center mb-4">
                          <CreditCard size={24} className="text-gray-600 mr-2" />
                          <span className="text-gray-600">Credit Card</span>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                              Name on Card <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="**** **** **** ****"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
                                Expiration <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="***"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                    
                    <div className="mb-4">
                      <div className="flow-root">
                        <ul className="-my-4 divide-y divide-gray-200">
                          {items.map((item) => (
                            <li key={item.id} className="py-4 flex">
                              <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="flex justify-between text-base font-medium text-gray-800">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="text-gray-800">${subtotal.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p className="text-gray-600">Shipping</p>
                        <p className="text-gray-800">
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p className="text-gray-600">Tax</p>
                        <p className="text-gray-800">${tax.toFixed(2)}</p>
                      </div>
                      
                      <Separator className="my-2" />
                      
                      <div className="flex justify-between font-medium">
                        <p className="text-gray-800">Total</p>
                        <p className="text-gray-800">${total.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-leaf-600 hover:bg-leaf-700 text-white"
                      >
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                      <Check size={16} className="text-leaf-600 mr-1" />
                      Secure checkout
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

export default CheckoutPage;
