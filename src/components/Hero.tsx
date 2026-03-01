import React from "react";
import "./Hero.css";

interface HeroProps {
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="container">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <h1 className="title">{title}</h1>
    </div>
  );
};
