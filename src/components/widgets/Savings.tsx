import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const savingsData = [
    {
      action: 'Purchase savings plans and RIS',
      savings: '10%'
    },
    {
      action: 'Terminating capacity and resources you don\'t need',
      savings: '10%'
    },
    {
      action: 'Converting EBS volumes to GP3',
      savings: '20%'
    },
    {
      action: 'Converting to newer instance eg. Graviton or Spot',
      savings: '40%'
    },
    {
      action: 'Rightsizing / Autoscaling / Scheduling remaining capacity',
      savings: '30%'
    },
    {
      action: 'Purchase more Savings Plans/RI\'s to cover new baseline',
      savings: '20%'
    },
    {
      action: 'Total savings',
      savings: 'up to 70%'
    }
  ];

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto">
          {/* Header */}
          <div class="text-center mb-12">
            <div class="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
              TYPICAL COMPUTE SAVINGS
            </div>
          </div>

          {/* Savings Table */}
          <div class="bg-white rounded-3xl p-8 shadow-sm">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-gray-900 font-medium">Action plan</div>
              <div class="text-gray-900 font-medium text-right">Savings</div>
              
              {savingsData.map((item, index) => (
                <div key={index} class="contents">
                  <div class={`py-4 ${index !== savingsData.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    {item.action}
                  </div>
                  <div class={`py-4 text-right ${index !== savingsData.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    {item.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 