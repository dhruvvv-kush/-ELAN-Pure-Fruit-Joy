'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FLAVOURS, Flavour } from '@/lib/constants';
import { X, CheckCircle, MapPin, Truck, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedFlavour?: Flavour | null;
}

export function OrderModal({ isOpen, onClose, preselectedFlavour }: OrderModalProps) {
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour>(
    preselectedFlavour || FLAVOURS[0]
  );
  const [quantity, setQuantity] = useState(2);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Bhopal, Madhya Pradesh',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);

  if (!isOpen) return null;

  const numericPrice = parseInt(selectedFlavour.price.replace(/[^\d]/g, '')) || 249;
  const totalPrice = numericPrice * quantity;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          flavourId: selectedFlavour.id,
          flavourName: selectedFlavour.name,
          bottles: quantity,
          totalPrice: totalPrice,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConfirmedOrder(data.order);
        setIsSubmitting(false);
        setIsSubmitted(true);

        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#C8A96A', '#F4A623', '#F78CA2', '#6B3A91'],
        });
      } else {
        alert(data.message || 'Failed to process reservation.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        data-lenis-prevent
        className="relative w-full max-w-2xl bg-elan-dark border border-elan-gold/30 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-white/15 text-elan-cream hover:text-elan-gold hover:border-elan-gold transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-elan-gold font-medium block mb-2">
                RESERVATION PORTAL • BHOPAL HARVEST
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-elan-cream font-medium">
                Reserve Vintage Batch
              </h2>
            </div>

            {/* Flavour Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {FLAVOURS.map((f) => {
                const isSelected = f.id === selectedFlavour.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFlavour(f)}
                    className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      isSelected
                        ? 'bg-elan-gold/15 border-elan-gold text-elan-cream shadow-[0_0_20px_rgba(200,169,106,0.2)]'
                        : 'bg-white/5 border-white/10 text-elan-cream/70 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: f.color }} />
                      <span className="text-[9px] font-sans text-elan-gold uppercase">{f.price}</span>
                    </div>
                    <span className="font-serif text-xs font-medium block truncate">{f.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <div>
                <span className="font-serif text-base text-elan-cream block">Bottles (250ml)</span>
                <span className="text-xs text-elan-cream/60 font-light">Refrigerated Cask Package</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-white/20 text-elan-cream flex items-center justify-center hover:border-elan-gold"
                >
                  -
                </button>
                <span className="font-serif text-lg text-elan-gold font-semibold w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-white/20 text-elan-cream flex items-center justify-center hover:border-elan-gold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Reservation Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-sans tracking-widest text-elan-cream/70 uppercase block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elan-cream focus:border-elan-gold focus:outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-elan-cream/70 uppercase block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98260 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elan-cream focus:border-elan-gold focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-elan-cream/70 uppercase block mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elan-cream focus:border-elan-gold focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans tracking-widest text-elan-cream/70 uppercase block mb-1">
                  Delivery Address
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Street address, house number, area"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elan-cream focus:border-elan-gold focus:outline-none text-sm"
                />
              </div>

              {/* Total & Submit Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-elan-cream/60 uppercase block">Total Investment</span>
                  <span className="font-serif text-3xl text-gold-gradient font-bold">₹{totalPrice}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-elan-gold text-elan-dark font-serif tracking-[0.2em] text-xs uppercase font-semibold hover:bg-elan-goldLight transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> SAVING TO BACKEND...
                    </>
                  ) : (
                    <>
                      CONFIRM RESERVATION
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full border border-elan-gold/40 bg-elan-gold/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-elan-gold" />
            </div>

            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-elan-gold font-medium block mb-2">
              RESERVATION CONFIRMED • TRACKING ID: {confirmedOrder?.id}
            </span>
            <h3 className="font-serif text-4xl text-elan-cream mb-4">
              Thank You, {confirmedOrder?.name}
            </h3>

            <p className="font-sans text-sm text-elan-cream/80 max-w-md mx-auto font-light leading-relaxed mb-6">
              Your order of {confirmedOrder?.bottles}x {confirmedOrder?.flavourName} (Total: ₹{confirmedOrder?.totalPrice}) has been saved to the backend database. Our master Sommelier in Bhopal is preparing your shipment.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-elan-gold">
                <MapPin className="w-4 h-4" /> <span>{confirmedOrder?.address}, {confirmedOrder?.city}</span>
              </div>
              <div className="flex items-center gap-2 text-elan-cream/70">
                <Truck className="w-4 h-4" /> <span>Express Refrigerated Cask Dispatch</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3.5 rounded-full bg-elan-gold text-elan-dark font-serif text-xs tracking-[0.2em] uppercase font-semibold"
            >
              RETURN TO EXPERIENCE
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
