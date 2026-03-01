import React from "react";
import "./Footer.css";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterProps {
  left?: FooterLink[];
  right?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({ left = [], right = [] }) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {left.map((link, index) => (
          <a key={index} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-right">
        {right.map((link, index) => (
          <a key={index} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};
