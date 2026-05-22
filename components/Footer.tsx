import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="TaxSort logo" width={32} height={32} className="rounded-lg" />
              <span className="text-white font-semibold">TaxSort</span>
            </div>
            <p className="text-sm">Effortless tax management for freelancers and self-employed.</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li>
                <a href="https://www.youtube.com/@TaxSort" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </li>
              <li><a href="mailto:support@taxsort.app" className="hover:text-white transition-colors">support@taxsort.app</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Download</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">App Store</a></li>
              <li><a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Play</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} TaxSort. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
