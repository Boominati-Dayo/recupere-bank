'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';
import PublicRoute from '@/components/PublicRoute';
import { showError, showSuccess } from '@/utils/toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scamType: 'Cryptocurrency Fraud',
    amount: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        showSuccess(data.message);
      } else {
        showError(data.error);
      }
    } catch (err) {
      showError('Failed to transmit enquiry. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicRoute>
      <div className="min-h-screen bg-gray-50">

        {/* Header */}
        <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-800 mb-8 border border-navy-700">
              <Lock className="w-8 h-8 text-primary-500" />
            </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-7 h-0.5 bg-primary-400" />
            <span className="text-primary-400 text-xs font-bold tracking-[0.22em] uppercase">Secure Communications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Secure Communication.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            All communications are protected by end-to-end legal privilege and military-grade encryption. Your case details are safe.
          </p>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white p-10 shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Lock className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8 relative z-10">Encrypted Intake Form</h3>

              {submitted ? (
                <div className="text-center py-12 anime-in bounce-in">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">Transmission Secure</h4>
                  <p className="text-gray-500 mb-8">Case intake confirmed. A recovery officer will be assigned shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary-600 font-bold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                        placeholder="secure@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Scam Type</label>
                      <select 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white font-medium"
                      value={formData.scamType}
                      onChange={(e) => setFormData({...formData, scamType: e.target.value})}
                    >
                      <option>Cryptocurrency Fraud</option>
                      <option>Forex / Trading Platform</option>
                      <option>Romance Scam</option>
                      <option>Bank Transfer Fraud</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Amount Lost</label>
                      <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                      placeholder="AUD $10,000+" 
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Initial Case Details</label>
                      <textarea 
                      required
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none" 
                      placeholder="Provide a brief overview of what happened..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 transition-transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : <Lock className="w-4 h-4 text-primary-500" />}
                    Submit Secure Enquiry
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our strict privacy policy. Information is legally privileged.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info container */}
            <div className="space-y-10">
              {/* Emergency Line */}
              <div className="bg-primary-50 p-8 border border-primary-200 flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldAlert className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Urgent Bank Freeze Line</h4>
                  <p className="text-primary-600 mb-4 text-sm leading-relaxed font-medium">
                    If you transferred funds within the last 48 hours, immediate action is critical. Call our emergency response team.
                  </p>
                  <a href="tel:+61 2 8310 6000" className="text-3xl font-black text-primary-500 hover:text-primary-600 transition-colors">
                    +61 2 8310 6000
                  </a>
                </div>
              </div>

              {/* General Contact */}
              <div className="space-y-6 pl-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email (PGP Available)</p>
                    <a href="mailto:admin@nexusbanking.com.au" className="text-lg font-bold text-navy-900 hover:text-primary-500 transition-colors lowercase">admin@nexusbanking.com.au</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Global Switchboard</p>
                    <a href="tel:+61 2 8310 6000" className="text-lg font-bold text-navy-900 hover:text-primary-500 transition-colors">+61 2 8310 6000</a>
                  </div>
                </div>
              </div>

              {/* Locations Removed */}
              <div className="p-8 bg-navy-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Globe className="w-32 h-32 text-primary-500" />
                </div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-500" />
                  Global Operations
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  While we maintain digital-first response protocols, our legal network operates across major financial hubs including London, Sydney, Singapore, and Dubai to ensure jurisdictional authority.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PublicRoute>
  );
}

// MapPin and Globe needed for the component
import { Globe } from 'lucide-react';
