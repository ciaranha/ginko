import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="border-t border-gray-200 bg-white">
      <div class="max-w-[1200px] mx-auto px-4 py-12">
        <div class="max-w-[856px] mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            {/* Left side */}
            <div>
              <h3 class="text-xl text-gray-900 mb-2">
                Cut your cloud costs
              </h3>
              <p class="text-gray-500 text-sm">
                Copyright © 仙豆科技股份有限公司 All rights reserved.
              </p>
            </div>

            {/* Right side */}
            <div class="space-y-4">
              <p class="text-gray-600">
                Ginko Cloud is designed, built, and backed by 仙豆科技™.
              </p>
              <p class="text-gray-600">
                Purchasing, using, or receiving a 仙豆科技™ product is subject to our software license agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
