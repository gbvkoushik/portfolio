import React, { useState, useEffect } from 'react';
import { Home, Calendar, Clock, MapPin, CheckCircle2, User, Phone, ShieldCheck } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../../data/sinaiData';

interface HomeCollectionProps {
  preselectedTestName?: string;
  onClose?: () => void;
}

export const HomeCollection: React.FC<HomeCollectionProps> = ({ preselectedTestName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    testSelected: preselectedTestName || 'Complete Blood Count (CBC) with ESR',
    address: '',
    pincode: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '07:00 AM - 09:00 AM'
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (preselectedTestName) {
      setFormData((prev) => ({ ...prev, testSelected: preselectedTestName }));
    }
  }, [preselectedTestName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    const generatedId = `HC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setBookingConfirmed(true);
  };

  return (
    <section id="home-collection" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Home className="w-4 h-4 text-emerald-400" />
            <span>Doorstep Sample Pickup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Book Home <span className="text-gradient">Sample Collection</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Safe, hygienic blood sample collection by certified phlebotomists at your doorstep at your preferred time slot.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
          
          {bookingConfirmed ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Home Collection Requested!</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                Thank you <strong>{formData.name}</strong>. Our certified phlebotomist will visit your address on <strong>{formData.date}</strong> ({formData.timeSlot}).
              </p>
              <div className="inline-block p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-6">
                Booking Reference ID: <strong className="text-white text-base">{bookingId}</strong>
              </div>
              <div>
                <button
                  onClick={() => { setBookingConfirmed(false); if (onClose) onClose(); }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Book Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Selected Diagnostic Test / Package *
                </label>
                <select
                  value={formData.testSelected}
                  onChange={(e) => setFormData({ ...formData, testSelected: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500/60"
                >
                  {DIAGNOSTIC_TESTS.map((t) => (
                    <option key={t.id} value={t.name} className="bg-slate-900 text-white">
                      {t.name} (₹{t.price})
                    </option>
                  ))}
                  <option value="Sinai Full Body Essential Package" className="bg-slate-900 text-white">
                    Sinai Full Body Essential Package (₹1,299)
                  </option>
                  <option value="Sinai Comprehensive Master Wellness" className="bg-slate-900 text-white">
                    Sinai Comprehensive Master Wellness (₹2,499)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Collection Address & Pincode *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Flat No, House Name, Street Address, Pincode..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500/60"
                  >
                    <option value="06:30 AM - 08:30 AM">06:30 AM - 08:30 AM (Fasting)</option>
                    <option value="08:30 AM - 10:30 AM">08:30 AM - 10:30 AM</option>
                    <option value="10:30 AM - 12:30 PM">10:30 AM - 12:30 PM</option>
                    <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Zero sample contamination guarantee • Vacutainer sealed sample collection</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                <span>Confirm Home Sample Pickup</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
