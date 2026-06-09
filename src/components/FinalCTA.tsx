import Link from 'next/link';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function FinalCTA() {
    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <div className="w-full h-full bg-navy-800 relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 mb-8 border border-primary-500/20">
                    <ShieldAlert className="w-8 h-8" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Time is Your Biggest Enemy in Asset Recovery
                </h2>

                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Don't wait. Fraudulent entities move funds quickly across offshore accounts. The sooner our forensic team is involved, the higher your chances of complete recovery.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/asset-recovery"
                        className="flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-navy-900 font-bold px-8 py-4 rounded-lg transition-transform hover:-translate-y-1 w-full sm:w-auto justify-center shadow-lg shadow-primary-500/20"
                    >
                        Start Your Claim Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <div className="text-sm text-gray-400 mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                        <span className="block text-white font-semibold">Free Evaluation</span>
                        No upfront legal fees.
                    </div>
                </div>
            </div>
        </section>
    );
}
