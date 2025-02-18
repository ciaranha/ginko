import { component$ } from '@builder.io/qwik';
import teamMember1 from "~/assets/images/team/cristian.jpg";
import teamMember2 from "~/assets/images/team/william.jpg";
import teamMember3 from "~/assets/images/team/ian.jpg";

export default component$(() => {
  const team = [
    {
      name: 'Cristian Magherusan-Stanciu',
      role: 'AWS Optimization Specialist',
      image: teamMember1,
      profile: '@cristim',
      profileUrl: 'https://github.com/cristim',
      platform: 'github'
    },
    {
      name: 'William Lei',
      role: 'Co-founder and CEO',
      image: teamMember2,
      profile: '/william-l-826a3473',
      profileUrl: 'https://linkedin.com/in/william-l-826a3473',
      platform: 'linkedin'
    },
    {
      name: 'Ian Lin',
      role: 'Co-founder',
      image: teamMember3,
      profile: '/ianlin3',
      profileUrl: 'https://linkedin.com/in/ianlin3',
      platform: 'linkedin'
    }
  ];

  return (
    <section class="py-16">
        <div class="max-w-[1200px] mx-auto px-4">
            <div class="max-w-[856px] mx-auto">
                <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    <div>
                        <h2 class="text-5xl font-medium text-gray-900 mb-6">
                        Meet your<br />
                        cloud<br />
                        optimization<br />
                        partners
                        </h2>
                        <p class="text-xl text-gray-600">
                        Founded by Cristian, William, and Ian with decades of AWS experience and over $100 million in savings generated.
                        </p>
                    </div>

                    <div class="space-y-3">
                        {team.map((member) => (
                        <div key={member.name} class="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
                            <div class="flex gap-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                width={64}
                                height={64}
                                class="rounded-full"
                            />
                            <div class="flex-1 space-y-1">
                                <h3 class="text-xl text-gray-900 font-medium">{member.name}</h3>
                                <p class="text-gray-600">{member.role}</p>
                                <div class="flex items-center gap-2 text-gray-600">
                                <span>View profile</span>
                                {member.platform === 'github' ? (
                                    <>
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    <span class="text-gray-600">{member.profile}</span>
                                    </>
                                ) : (
                                    <>
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                    <span class="text-gray-600">{member.profile}</span>
                                    </>
                                )}
                                </div>
                            </div>
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