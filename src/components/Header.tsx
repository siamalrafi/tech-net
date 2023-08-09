import { Button } from './ui/button';

export default function Header() {
  return (
    <div>
      <section className="px-4 py-32 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">
            A secure, faster way to transfer.
          </h1>
          <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
            We’re on a mission to bring transparency to finance. We charge as
            little as possible, and we always show you upfront. No hidden fees.
            No bad exchange rates. No surprises.
          </p>
          <form className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
            <label className="col-auto lg:col-span-4">
              <span className="sr-only">Your Email</span>
              <input
                className="mt-0 form-input form-input-lg"
                type="email"
                placeholder="Enter your email..."
              />
            </label>

            <Button className="p-5" variant="default">
              Get Started
            </Button>
          </form>
          <div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              14 days free
            </div>
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 uppercase">
                Accept <span className="text-red-400">Daily</span> recurring
                Payments
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Effortlessly integrate decentralized, trustless transactions
                directly into your crypto wallet, powered by smart contracts.
              </p>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                <svg
                  viewBox="0 0 1026 1026"
                  fill="none"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full animate-spin-slow"
                >
                  <path
                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M513 1025C230.23 1025 1 795.77 1 513"
                    stroke="url(#:R65m:-gradient-1)"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id=":R65m:-gradient-1"
                      x1={1}
                      y1={513}
                      x2={1}
                      y2={1025}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#06b6d4" />
                      <stop offset={1} stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 1026 1026"
                  fill="none"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
                >
                  <path
                    d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M913 513c0 220.914-179.086 400-400 400"
                    stroke="url(#:R65m:-gradient-2)"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id=":R65m:-gradient-2"
                      x1={913}
                      y1={513}
                      x2={913}
                      y2={913}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#06b6d4" />
                      <stop offset={1} stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src="https://tailwind.besoeasy.com/public/tokens.png"
              />
            </div>
            <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6 uppercase">
              <p className="text-sm font-semibold text-gray-900 text-left">
                ⚡ POWERED BY <span className="bg-yellow-200">SMART</span>{' '}
                CONTRACTS
              </p>
              <div className="my-5" />
              <p className="text-sm font-semibold text-gray-900 text-left">
                ⚡ Directly in your{' '}
                <span className="bg-yellow-200">crypto</span> wallet
              </p>
              <div className="my-5" />
              <p className="text-sm font-semibold text-gray-900 text-left">
                ⚡ Trustless, no{' '}
                <span className="bg-yellow-200">3rd-party</span> services
                required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
