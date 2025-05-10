import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-12 mt-10 md:mt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">GymBroski</h3>
            <p className="text-sm text-muted-foreground">
              We strive to make fitness accessible to everyone. Our mission is
              to provide personalized training plans and nutritional advice that
              fit your lifestyle. Join us on this journey to a healthier you!
            </p>
            <div className="flex space-x-4">
              <Link href="#">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#">
                <FaTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#">
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Bro</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/">AI Agreement</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0" />
                <span>Strada Academiei 14, București 010014</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>+(40) 021 314 3508</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>gymbroski@bicep.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} GymBroski. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/">Privacy</Link>
                </li>
                <li>
                  <Link href="/">Terms</Link>
                </li>
                <li>
                  <Link href="/">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
