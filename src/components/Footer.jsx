import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>© {currentYear} Quizlo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
