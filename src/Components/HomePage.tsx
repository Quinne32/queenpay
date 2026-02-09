import React from "react";
import { SiExpertsexchange } from "react-icons/si";
import { CgArrowsExchange } from "react-icons/cg";
import { BsBank } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto h-screen bg-teal-50">
        {/* section 1 */}
        <section>
          <div className="container px-6 py-8">
            <div className="flex items-center justify-between  ">
              {/* Logo */}
              <div className="text-teal-900 font-bold text-xl">Queenpay</div>

              {/* Navigation Links */}
              <ul className="flex space-x-6 text-teal-900 font-medium">
                <li className="hover:text-teal-700 cursor-pointer">Products</li>
                <li className="hover:text-teal-700 cursor-pointer">
                  Customers
                </li>
                <li className="hover:text-teal-700 cursor-pointer">Pricing</li>
                <li className="hover:text-teal-700 cursor-pointer">Learn</li>
              </ul>

              {/* Auth Buttons */}
              <div className="flex space-x-4">
                <button className="text-teal-900  font-medium px-4 py-2 border border-grey-300 rounded  hover:text-teal-700">
                  Login
                </button>
                <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="container px-6 py-6">
          <div>
            <h1 className="max-w-[300px] text-4xl leading-snug">
              <span className="font-bold">Get paid early</span> save
              automatically all your pay.
            </h1>
          </div>
          <div className="py-4">
            <h5 className="max-w-[400px] text-gray-400">
              Supports small businesses with simple invoicing, powerful
              integrations and cash flow management tools
            </h5>
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Your business email"
              className="w-full px-4 py-4 pr-15 text-sm border rounded-lg outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700">
              Get started
            </button>
          </div>
          <div className="flex item-right justify-between font-bold text-2xl max-w-[400px] py-6">
            <h1>klarna</h1>
            <h1>coinbase</h1>
            <h1>instacart</h1>
          </div>
        </section>

        {/* section 3 */}
        <section className="container px-6 py-6 ">
          <div>
            <h1 className="text-teal-700">FUTURE PAYMENT</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl max-w-[300px]">
                Experience that grows with scale
              </h1>
            </div>
            <div>
              <h2 className="text-gray-400  mx-auto max-w-[400px]">
                Design a financial operating system that works for your business
                and streamlined cash flow management
              </h2>
            </div>
          </div>

          <div className="flex justify-between py-8 mx-auto">
            <div>
              <h2>Free transfers</h2>
              <p className="text-gray-400">
                Create a financial experience and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>

            <div>
              <h2>Multiple account </h2>
              <p className="text-gray-400">
                Run your operations with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>

            <div>
              <h2>Unmatched security</h2>
              <p className="text-gray-400">
                Securely manage your finances with organization-wide MFA
                card-locking and account-level controls
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 bg-white">
          <div className="text-center">
            <h4 className="text-teal-400 font-semibold tracking-wide">
              WHY US
            </h4>
            <h1 className="text-2xl font-bold mt-2">
              Why they prefer Queenpay
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-10">
            {/* Card 1 */}
            <div className="md:w-1/2 bg-teal-50 shadow-md rounded-lg p-6">
              <h2 className="font-bold text-3xl text-teal-500 mb-4">3K+</h2>
              <p className="max-w-[250px] text-gray-700">
                Businesses already running on Queenpay
              </p>
            </div>

            {/* Card 2 */}
            <div className="md:w-1/2 bg-teal-50 shadow-md rounded-lg p-6">
              <p className="max-w-[250px] text-gray-700">
                Instantly withdraw your funds at any time
              </p>

              <div className="flex justify-between items-center mt-6">
                <SiExpertsexchange className="bg-teal-200 rounded-lg text-4xl p-2" />
                <CgArrowsExchange className="text-4xl " />
                <BsBank className="text-4xl " />
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-10 w-full min-h-[260px] flex items-center">
            <div className="flex w-full items-center justify-between gap-8">
              <div>
                <h2 className="font-bold text-2xl mb-4">No asset volatility</h2>
                <p className="max-w-[280px] text-gray-500">
                  Generate returns on your cash reserves without making any
                  investments
                </p>
              </div>

              {/* Fake chart */}
              <div className="flex items-end gap-2 h-24">
                <div className="w-3 h-10 bg-teal-300 rounded-sm"></div>
                <div className="w-3 h-16 bg-teal-400 rounded-sm"></div>
                <div className="w-3 h-8 bg-teal-300 rounded-sm"></div>
                <div className="w-3 h-20 bg-teal-500 rounded-sm"></div>
                <div className="w-3 h-14 bg-teal-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
