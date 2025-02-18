import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import Button from "../common/Button";

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <section class="relative not-prose">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-medium mb-4 font-heading">
              Make buying easier <br />
              with interactive demos
            </h1>
            <div class="max-w-3xl mx-auto">
              <p class="text-xl text-muted mb-8 dark:text-slate-300">
                Better understand your buyers. Use signals from interactive demo engagement
                to reveal your buyer interest and intent across the entire funnel.
              </p>

              <div class="flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
                
                <div class="flex gap-3">
                    <Button variant="primary" href="/contact">
                      Book a call
                    </Button>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
