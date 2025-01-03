import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, AlertCircle } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Save Lives Through Blood Donation
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-red-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our community of life-savers. Every donation counts in making a difference.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/donate"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to donate blood
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Digital Donor Card</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Keep track of your donations digitally, no more physical cards needed.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Reward Points</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Earn points for each donation and redeem them for rewards.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Alerts</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get notified when you're eligible to donate again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <span className="text-4xl font-bold text-white">1000+</span>
              <p className="mt-2 text-xl text-red-100">Active Donors</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-white">5000+</span>
              <p className="mt-2 text-xl text-red-100">Lives Saved</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-white">24/7</span>
              <p className="mt-2 text-xl text-red-100">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};