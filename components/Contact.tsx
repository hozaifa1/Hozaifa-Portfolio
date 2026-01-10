'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#09090b] relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Open for high-impact collaborations and freelance engagements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=20hozaifa02@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-slate-900 border border-slate-800 hover:border-[#06b6d4] rounded-lg p-4 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <p className="text-slate-400 text-xs">
                Share context and next steps
              </p>
            </motion.a>

            <motion.a
              href="https://wa.me/8801615001456"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-slate-900 border border-slate-800 hover:border-[#06b6d4] rounded-lg p-4 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
              </div>
              <p className="text-slate-400 text-xs">
                Quick, informal sync
              </p>
            </motion.a>

            <motion.a
              href="tel:+8801615001456"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-slate-900 border border-slate-800 hover:border-[#06b6d4] rounded-lg p-4 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <p className="text-slate-400 text-xs">
                Direct call for decisions
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-slate-900 border border-slate-800 hover:border-[#06b6d4] rounded-lg p-4 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
              <p className="text-slate-400 text-xs">
                Remote-first, worldwide
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Open to Opportunities</h3>
            <p className="text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
              If you&apos;re shipping something ambitious and need an engineer who delivers, let&apos;s talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </span>
              <span>•</span>
              <span>Response within 24 hours</span>
              <span>•</span>
              <span>Free consultation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
