import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";

export default component$(() => {
  const isScrolled = useSignal(false);

  // Replace useVisibleTask$ with useOnWindow
  useOnWindow(
    'scroll',
    $(() => {
      isScrolled.value = window.scrollY > 10;
    })
  );

  return (
    <>
      {/* Top banner - not sticky */}
      <div class="border-b border-gray-200">
        <div class="max-w-[1200px] mx-auto px-4">
          <div class="h-10 flex items-center justify-between">
            {/* Left side */}
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-600">
                Ginko plans just got an upgrade
              </span>
              <a href="#" class="text-sm text-gray-900 font-medium flex items-center hover:text-gray-600">
                Learn more 
                <svg class="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right side */}
            <div class="flex items-center gap-6">
              <a href="#" class="text-sm text-gray-600 hover:text-gray-900">
                Login
              </a>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.6 9h16.8" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.6 15h16.8" />
                </svg>
                <select class="text-sm text-gray-600 bg-transparent border-none focus:ring-0 cursor-pointer">
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - sticky */}
      <div class="sticky top-0 z-40">
        <div class={`transition-all duration-300 ease-in-out px-4 ${
          isScrolled.value ? 'py-2' : 'py-4'
        }`}>
          <div class={`mx-auto transition-all duration-300 ease-in-out rounded-xl ${
            isScrolled.value 
              ? 'max-w-[756px] bg-white/95 shadow-sm border border-gray-200/50' 
              : 'max-w-[1200px]'
          }`}>
            <div class={`flex items-center justify-between transition-all duration-300 ease-in-out px-6 ${
              isScrolled.value ? 'h-14' : 'h-20'
            }`}>
              {/* Logo */}
              <a href="/" class="text-xl font-bold text-gray-900 transition-all duration-300">
                Ginko
              </a>

              {/* Navigation */}
              <nav class="flex items-center gap-8">
                <a href="#what-we-do" class="text-gray-600 hover:text-gray-900">
                  What we do
                </a>
                <a href="#how-it-works" class="text-gray-600 hover:text-gray-900">
                  How it works
                </a>
                <a href="#pricing" class="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#faq" class="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </nav>

              {/* CTA Button */}
              <a 
                href="#" 
                class="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
