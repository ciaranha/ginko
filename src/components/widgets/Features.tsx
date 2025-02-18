import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";

import IconStar from "~/components/icons/IconStar";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$(() => {
  const features = [
    {
      title: 'Compute flexibility',
      description: 'Keep your cloud agile with Spot Instances and Graviton. Get the power you need without the premium, adapting in real-time.',
      icon: '⚡' // We can replace these with proper SVG icons
    },
    {
      title: 'Custom software',
      description: 'Our automation tools eliminate manual work and increase reliability—like AutoSpotting and EBS Optimizer, continuously improved over time.',
      icon: '🔧'
    },
    {
      title: 'Discount management',
      description: 'Achieve up to 55% more savings with Reserved Instances and Savings Plans while mitigating long-term commitment risk.',
      icon: '🏷️'
    },
    {
      title: 'EBS storage optimisation',
      description: 'Rightsizing, autoscaling, and scheduling ensure you use exactly what you need, when you need it, optimizing dynamically.',
      icon: '💾'
    },
    {
      title: 'Network latency optimisation',
      description: 'Use advanced routing and to reduce latency and enhance data transfer speeds across regions, improving performance in real-time.',
      icon: '🌐'
    },
    {
      title: 'Capacity optimisation',
      description: 'Choose the right storage every time. With GP2, GP3, IO1, and IO2 options, you are storing data while optimizing performance and cost.',
      icon: '📊'
    }
  ];

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto">
          {/* Header */}
          <div class="text-center mb-16">
            <div class="inline-block px-3 py-1 bg-gray-200 uppercase font-mono font-medium rounded-full text-sm mb-4">
              <span>What we do</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Helping you scale and<br />innovate faster
            </h2>
            <p class="text-gray-600 text-xl">
              We build custom software that goes beyond savings to help you scale and innovate faster.
            </p>
          </div>

          {/* Features Grid */}
          <div class="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature) => (
              <div key={feature.title} class="flex flex-col items-center text-center">
                <div class="text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 class="text-gray-900 font-medium text-lg mb-2">
                  {feature.title}
                </h3>
                <p class="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
