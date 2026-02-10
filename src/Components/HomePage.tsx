import React from "react";
import { useState } from "react";
import { SiExpertsexchange } from "react-icons/si";
import { CgArrowsExchange } from "react-icons/cg";
import { BsBank } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import RevenueChart from "./RevenueChart";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

// const HomePage = () => {
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto h-screen bg-teal-50">
        {/* section 1 */}
        <section className="bg-white shadow">
          <div className="container px-6 py-4 mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-teal-900 font-bold text-xl">Queenpay</div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 text-teal-900 font-medium">
              <li className="hover:text-teal-700 cursor-pointer">Products</li>
              <li className="hover:text-teal-700 cursor-pointer">Customers</li>
              <li className="hover:text-teal-700 cursor-pointer">Pricing</li>
              <li className="hover:text-teal-700 cursor-pointer">Learn</li>
            </ul>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex space-x-4">
              <button className="text-teal-900 font-medium px-4 py-2 border border-gray-300 rounded hover:text-teal-700">
                Login
              </button>
              <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800">
                Sign Up
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-teal-900 focus:outline-none"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white px-6 pb-4 space-y-4">
              <ul className="space-y-2 text-teal-900 font-medium">
                <li className="hover:text-teal-700 cursor-pointer">Products</li>
                <li className="hover:text-teal-700 cursor-pointer">
                  Customers
                </li>
                <li className="hover:text-teal-700 cursor-pointer">Pricing</li>
                <li className="hover:text-teal-700 cursor-pointer">Learn</li>
              </ul>
              <div className="flex flex-col space-y-2 mt-2">
                <button className="text-teal-900 font-medium px-4 py-2 border border-gray-300 rounded hover:text-teal-700">
                  Login
                </button>
                <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </section>

        {/* section 2 */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          {/* Heading */}
          <div>
            <h1 className="max-w-full md:max-w-[420px] text-3xl md:text-4xl leading-snug">
              <span className="font-bold">Get paid early</span> save
              automatically all your pay.
            </h1>
          </div>

          {/* Sub text */}
          <div className="py-4">
            <h5 className="max-w-full md:max-w-[400px] text-gray-400 text-sm md:text-base">
              Supports small businesses with simple invoicing, powerful
              integrations and cash flow management tools
            </h5>
          </div>

          {/* Email input */}
          <div className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 relative">
              <input
                type="email"
                placeholder="Your business email"
                className="w-full px-4 py-4 text-sm border rounded-lg outline-none sm:pr-32"
              />
              <button className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 px-6 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700">
                Get started
              </button>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap gap-6 justify-start font-bold text-xl md:text-2xl max-w-md py-8">
            <span>klarna</span>
            <span>coinbase</span>
            <span>instacart</span>
          </div>
        </section>

        {/* section 3 */}
        <section className="container mx-auto px-4 py-8">
          {/* Small label */}
          <div>
            <h1 className="text-teal-700 text-sm font-semibold">
              FUTURE PAYMENT
            </h1>
          </div>

          {/* Heading + description */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-4">
            <div>
              <h1 className="text-2xl md:text-3xl max-w-full md:max-w-[300px]">
                Experience that grows with scale
              </h1>
            </div>

            <div>
              <h2 className="text-gray-400 max-w-full md:max-w-[400px] text-sm md:text-base">
                Design a financial operating system that works for your business
                and streamlined cash flow management
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            <div>
              <h2 className="font-semibold mb-2">Free transfers</h2>
              <p className="text-gray-400 text-sm">
                Create a financial experience and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Multiple account</h2>
              <p className="text-gray-400 text-sm">
                Run your operations with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Unmatched security</h2>
              <p className="text-gray-400 text-sm">
                Securely manage your finances with organization-wide MFA,
                card-locking and account-level controls.
              </p>
            </div>
          </div>
        </section>

        {/* section 4 */}
        <section className="container mx-auto px-4 py-12 bg-white">
          {/* Header */}
          <div className="text-center">
            <h4 className="text-teal-400 font-semibold tracking-wide text-sm">
              WHY US
            </h4>
            <h1 className="text-2xl md:text-3xl font-bold mt-2">
              Why they prefer Queenpay
            </h1>
          </div>

          {/* Top cards */}
          <div className="flex flex-col md:flex-row gap-6 py-10">
            {/* Card 1 */}
            <div className="w-full md:w-1/2 bg-teal-50 shadow-md rounded-lg p-6">
              <h2 className="font-bold text-3xl text-teal-500 mb-4">3K+</h2>
              <p className="max-w-full md:max-w-[250px] text-gray-700 text-sm md:text-base">
                Businesses already running on Queenpay
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/2 bg-teal-50 shadow-md rounded-lg p-6">
              <p className="max-w-full md:max-w-[250px] text-gray-700 text-sm md:text-base">
                Instantly withdraw your funds at any time
              </p>

              <div className="flex justify-between items-center mt-6">
                <SiExpertsexchange className="bg-teal-200 rounded-lg text-3xl md:text-4xl p-2" />
                <CgArrowsExchange className="text-3xl md:text-4xl" />
                <BsBank className="text-3xl md:text-4xl" />
              </div>
            </div>
          </div>

          {/* Bottom card */}
          <div className="bg-teal-50 rounded-lg p-6 md:p-10 w-full min-h-[260px] flex items-center">
            <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="font-bold text-xl md:text-2xl mb-4">
                  No asset volatility
                </h2>
                <p className="max-w-full md:max-w-[280px] text-gray-500 text-sm md:text-base">
                  Generate returns on your cash reserves without making any
                  investments
                </p>
              </div>

              {/* Fake chart */}
              <div className="w-full md:w-auto">
                <RevenueChart />
              </div>
            </div>
          </div>
        </section>

        {/* section 5 */}
        <section className="bg-teal-800 text-white py-12">
          <div className="container mx-auto px-6 py-6">
            <h4 className="text-xs">STEP</h4>
            <h1 className="text-3xl font-semibold  max-w-[500px]">
              Maximise your returns with a Reserve account that generates.
            </h1>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="shadow-md rounded-lg p-6 mt-2 bg-teal-700 ">
                <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                  1
                </h1>
                <h3 className="text-xl">Open your account</h3>
                <p className="text-gray-400 max-w-[300px] py-2">
                  Sign up to queenpay and set up your account from the dashboard
                </p>
              </div>
              <div className="shadow-md rounded-lg p-6 mt-2 bg-teal-700 ">
                <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                  2
                </h1>
                <h3 className="text-xl">Transfer your money</h3>
                <p className="text-gray-400 max-w-[300px] py-2">
                  Move money from your another account and start earning
                </p>
              </div>
              <div className="shadow-md rounded-lg p-6 mt-2 bg-teal-700 ">
                <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                  3
                </h1>

                <h3 className="text-xl">Watch your balance grow</h3>
                <p className="text-gray-400 max-w-[300px] py-2">
                  Assessed instantly and remain insulated from market volatility
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* section 6  */}
        <section className="container mx-auto px-4 py-8 bg-white">
          {/* Header */}
          <h3 className="text-sm text-teal-600 text-center">OUR MISSION</h3>

          <h1 className="font-semibold text-2xl md:text-4xl max-w-full md:max-w-[400px] text-center mx-auto py-4">
            We&apost; helped innovative companies
          </h1>

          <p className="text-gray-500 max-w-full md:max-w-[400px] text-center mx-auto py-4 text-sm md:text-base">
            Hundreds of all sizes and across all industries have made big
            improvements with us.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 max-w-xl mx-auto py-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">24%</h2>
              <p className="text-sm text-gray-600">Revenue business</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">180K</h2>
              <p className="text-sm text-gray-600">In annual revenue</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">10+</h2>
              <p className="text-sm text-gray-600">Months of runway</p>
            </div>
          </div>

          {/* Choose plan */}
          <h6 className="text-sm text-teal-500 text-center py-6">
            CHOOSE PLAN:
          </h6>

          {/* Pricing cards */}
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            {/* Plus */}
            <div
              className="bg-gray-300 rounded-2xl p-6 md:p-8 w-full md:w-1/2
        shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <h2 className="font-semibold text-2xl text-gray-900">Plus</h2>

              <div className="flex items-center justify-between pt-10">
                <h3 className="text-xl font-medium text-gray-800">
                  $2.99<span className="text-sm text-gray-500">/month</span>
                </h3>

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                  <MdArrowOutward className="text-gray-700" />
                </div>
              </div>
            </div>

            {/* Premium */}
            <div
              className="bg-teal-700 rounded-2xl p-6 md:p-8 w-full md:w-1/2
        shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer text-white"
            >
              <h2 className="font-semibold text-2xl">Premium</h2>

              <div className="flex items-center justify-between pt-10">
                <h3 className="text-xl font-medium">
                  $6.99<span className="text-sm opacity-80">/month</span>
                </h3>

                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 7 */}
        <section className="container mx-auto px-4 py-10 bg-teal-950 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            {/* Text content */}
            <div className="text-center md:text-left">
              <h4 className="text-xs text-teal-600 font-semibold">
                TRY IT NOW
              </h4>

              <h1 className="text-white text-2xl md:text-3xl max-w-full md:max-w-[400px] py-4">
                Ready to level up your payment process?
              </h1>

              <p className="text-gray-400 max-w-full md:max-w-[400px] py-3 text-sm md:text-base">
                Supports small businesses with simple invoicing, powerful
                integrations and cash flow management tools.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0 justify-center md:justify-end">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-800 w-full sm:w-auto">
                Get Started Now
              </button>

              <button className="bg-transparent border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-teal-800 flex items-center justify-center gap-1 w-full sm:w-auto">
                Learn More
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </section>

        {/* section 8 */}
        <section className="container mx-auto px-4 py-10">
          {/* Top footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="text-teal-900 font-bold text-xl">Queenpay</div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-3">Solutions</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Small Business</li>
                <li>Freelancers</li>
                <li>Customers</li>
                <li>Taxes</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="font-semibold mb-3">Learn</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Blog</li>
                <li>Ebooks</li>
                <li>Guides</li>
                <li>Templates</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Follow us on</h4>
              <div className="flex gap-4 text-xl text-gray-600">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-300 my-8" />

          {/* Copyright */}
          <p className="text-teal-700 text-sm text-center">
            © 2026 Queenpay. All rights reserved.
          </p>
        </section>
      </div>
    </>
  );
};

export default Navbar;
