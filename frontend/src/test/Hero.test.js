import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ Correct import
import Hero from "../landing_page/home/Hero";

// Test suite
describe('Hero Component', () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImage");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});
