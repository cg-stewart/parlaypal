import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-4">ParlayPal</h3>
          <p>Your ultimate companion for sports betting management.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/responsible-gambling">Responsible Gambling</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} ParlayPal. All rights reserved.</p>
        <p>
          A product of{" "}
          <a
            href="https://www.newrgm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            NEWRGM INDUSTRIES
          </a>
        </p>
      </div>
    </footer>
  );
}
