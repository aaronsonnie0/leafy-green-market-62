
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
            <div className="text-sm text-left space-y-3">
              <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Order Number:</span>
                <span className="text-gray-800">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Date:</span>
                <span className="text-gray-800">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Estimated Delivery:</span>
                <span className="text-gray-800">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Processing</span>
              </div>
            </div>
          </div>
          
          <div className="bg-leaf-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">What's Next?</h2>
            <p className="text-gray-600 text-sm mb-4">
              You will receive an email confirmation with your order details.
              We'll notify you when your order ships.
            </p>
            <p className="text-gray-600 text-sm">
              Need help? <Link to="/contact" className="text-leaf-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              className="flex-1 bg-leaf-600 hover:bg-leaf-700 text-white"
            >
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="flex-1 border-leaf-600 text-leaf-600 hover:bg-leaf-50"
            >
              <Link to="/account">
                View Orders
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
