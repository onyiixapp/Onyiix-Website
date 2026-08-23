import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Minus, Check, ArrowRight, Zap, CreditCard } from 'lucide-react';

export const CartSimulator: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Veltrix Obsidian Pro Keyboard', price: 189, qty: 1 },
    { id: 2, name: 'Titanium Desk Mat (Custom)', price: 65, qty: 1 },
  ]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = Math.max(0, item.qty + delta);
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const addExtraItem = () => {
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
    setItems((prev) => {
      const exists = prev.find((i) => i.id === 3);
      if (exists) {
        return prev.map((i) => (i.id === 3 ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: 3, name: 'Magnetic Cable Anchor Set', price: 34, qty: 1 }];
    });
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="rounded-xl border border-white/10 bg-surface/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
      {/* Top Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-amber/20 text-accent-amber border border-accent-amber/40">
            <ShoppingBag className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-semibold text-ink-primary">
            Headless 0ms Drawer Cart
          </span>
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] text-accent-amber bg-accent-amber/10 px-2 py-0.5 rounded border border-accent-amber/20">
          <Zap className="h-2.5 w-2.5" /> Optimistic UI
        </span>
      </div>

      {/* Cart Items List */}
      <div className="space-y-2 mb-3 min-h-[90px]">
        {items.length === 0 ? (
          <div className="py-6 text-center text-xs text-ink-tertiary">
            Cart is empty. Add a product below!
          </div>
        ) : (
          items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-surface-elevated/60 p-2 text-xs"
            >
              <div className="flex-1 pr-2 truncate">
                <p className="font-medium text-ink-primary truncate">{item.name}</p>
                <p className="text-[11px] font-mono text-ink-secondary">${item.price} USD</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center rounded border border-white/10 bg-black/40">
                  <button
                    type="button"
                    onClick={() => updateQty(item.id, -1)}
                    className="p-1 text-ink-muted hover:text-white"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-5 text-center font-mono text-[11px] font-semibold text-ink-primary">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQty(item.id, 1)}
                    className="p-1 text-ink-muted hover:text-white"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <span className="w-12 text-right font-mono text-xs font-semibold text-accent-amber">
                  ${item.price * item.qty}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Quick Add Pill */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={addExtraItem}
          className="flex items-center gap-1 rounded-md border border-white/10 bg-surface-elevated px-2.5 py-1 text-[11px] text-ink-secondary hover:text-white hover:border-white/20 transition-all"
        >
          {justAdded ? (
            <span className="flex items-center gap-1 text-accent-emerald">
              <Check className="h-3 w-3" /> Added Instantly!
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Plus className="h-3 w-3 text-accent-cyan" /> Quick Add Cable Anchor (+$34)
            </span>
          )}
        </button>
        <span className="font-mono text-xs font-bold text-ink-primary">
          Total: <span className="text-gradient-gold">${subtotal}</span>
        </span>
      </div>

      {/* Checkout Button */}
      <button
        type="button"
        onClick={() => {
          setIsCheckingOut(true);
          setTimeout(() => setIsCheckingOut(false), 2000);
        }}
        disabled={items.length === 0 || isCheckingOut}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 text-xs font-bold text-black hover:opacity-95 transition-all shadow-glow-amber disabled:opacity-50"
      >
        {isCheckingOut ? (
          <span className="flex items-center gap-1.5">
            <CreditCard className="h-3.5 w-3.5 animate-bounce" /> Processing Stripe Session...
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <CreditCard className="h-3.5 w-3.5" /> Instant Stripe Checkout <ArrowRight className="h-3 w-3" />
          </span>
        )}
      </button>
    </div>
  );
};
