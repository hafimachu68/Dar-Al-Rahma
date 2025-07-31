import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="container">
        © {currentYear} Dar Al Rahma. All rights reserved | Design by HMcreations.
      </div>
    </footer>
  );
}
