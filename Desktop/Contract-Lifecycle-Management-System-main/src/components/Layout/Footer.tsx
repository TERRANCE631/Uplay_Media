import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t md:ml-16 border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex items-center">
          <Shield className="w-4 h-4 text-indigo-500 mr-2" />
          <span>Secure CLM System • AES-256 Encryption • SOC2 Compliant</span>
        </div>
        <div>
          © {new Date().getFullYear()} SecureContracts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;