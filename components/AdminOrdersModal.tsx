'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, ShoppingBag, IndianRupee, MapPin, Phone, User, Database, ShieldCheck } from 'lucide-react';

interface AdminOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminOrdersModal({ isOpen, onClose }: AdminOrdersModalProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const fetchAdminOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders');
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error('Failed to fetch admin orders', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAdminOrders();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        data-lenis-prevent
        className="relative w-full max-w-4xl bg-elan-dark border border-elan-gold/40 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-white/15 text-elan-cream hover:text-elan-gold hover:border-elan-gold transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-elan-gold" />
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-elan-gold font-medium">
                FULL-STACK BACKEND DASHBOARD
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-elan-cream font-medium">
              Live Order Management
            </h2>
          </div>

          <button
            onClick={fetchAdminOrders}
            disabled={loading}
            className="px-4 py-2 rounded-full border border-elan-gold/30 bg-elan-gold/10 text-elan-gold text-xs font-serif tracking-widest uppercase hover:bg-elan-gold hover:text-elan-dark transition-all flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            REFRESH API
          </button>
        </div>

        {/* Analytics Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-elan-gold/10 border border-elan-gold/30 flex items-center justify-center text-elan-gold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-elan-cream/60 uppercase block">Total Reservations</span>
              <span className="font-serif text-2xl text-elan-cream font-bold">{data?.totalOrders || 0}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-elan-cream/60 uppercase block">Total Gross Revenue</span>
              <span className="font-serif text-2xl text-emerald-400 font-bold">₹{data?.totalRevenue || 0}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-elan-cream/60 uppercase block">Backend Status</span>
              <span className="font-sans text-xs text-purple-300 font-medium">Next.js 15 API Active</span>
            </div>
          </div>
        </div>

        {/* Recent Orders List */}
        <div>
          <h3 className="font-serif text-xl text-elan-cream mb-4 font-medium">
            Recent Customer Orders
          </h3>

          <div className="space-y-4">
            {data?.orders && data.orders.length > 0 ? (
              data.orders.map((order: any) => (
                <div
                  key={order.id}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-elan-gold/30 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-elan-gold/15 text-elan-gold border border-elan-gold/30">
                        {order.id}
                      </span>
                      <span className="text-xs text-elan-cream/50">
                        {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg text-elan-cream flex items-center gap-2">
                      <User className="w-4 h-4 text-elan-gold" /> {order.name}
                    </h4>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-elan-cream/70 mt-1">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-elan-gold" /> {order.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-elan-gold" /> {order.address}, {order.city}
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto border-white/5">
                    <span className="text-xs font-serif text-elan-cream block">
                      {order.bottles}x {order.flavourName}
                    </span>
                    <span className="font-serif text-lg text-gold-gradient font-bold">
                      ₹{order.totalPrice}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-elan-cream/60 font-sans text-xs">
                No orders recorded yet. Submit a reservation using the Collection modal.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
