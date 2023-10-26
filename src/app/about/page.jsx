import React from 'react';
import { Container } from '../../components/Container';
import { FadeIn } from '../../components/FadeIn';
import Link from 'next/link';

const team = [
  {
    title: 'Web Developer | SEO ',
    people: [
      {
        name: 'Ali Bami',
        role: 'Web Developer / JavaScript/ React/ WordPress/ Next.js/ Node.js/Tailwind/MaterialUI',
        description: 'Hej! Jag är en entusiastisk webbutvecklare som älskar att skapa innovativa och användarvänliga webblösningar. 🚀 Kodning är min kreativa lekplats och jag är ständigt fascinerad av dess möjligheter. Fotboll har varit min passion sedan barndomen och att kombinera det med min kärlek för webbutveckling är en riktig glädje. På fritiden hittar du mig antingen på gymmet, eller simmandes i poolen, njutandes av känslan av frihet i vattnet. Att lära mig nya färdigheter är något jag alltid är ivrig att göra, och jag trivs både med att arbeta självständigt och i team. Jag ser fram emot spännande utmaningar och möjligheter inom webbutvecklingens värld! 💻😊.',
      },
    ],
  },
];

export default function Page() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((teamItem, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center">
            <FadeIn>
              <div className="lg:order-2 lg:ml-12 flex-grow">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {teamItem.people.map((person, personIndex) => (
                    <li key={personIndex}>
                      <div>
                        <p className="text-sm text-neutral-600">{person.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400"
                  href="/CV.pdf"
                  download
                >
                  Download CV
                </a>
               
                 <Link href ="/CV.pdf" target ={"_blank"} className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400'>Show CV
                
                </Link>
                </div>
            </FadeIn>
         
          </div>
        ))}
      </div>
    </Container>
  );
}



