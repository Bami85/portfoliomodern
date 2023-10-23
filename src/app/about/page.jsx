import React from 'react';
import { Container } from '../../components/Container';
import { FadeIn } from '../../components/FadeIn';

const team = [
  {
    title: 'Web Developer | SEO ',
    people: [
      {
        name: 'Ali Bami',
        role: 'Web Developer / JavaScript/ React/ WordPress/ Next.js/ Node.js/Tailwind/MaterialUI',
        description: 'Junior Web Developer with approximately 1 year of practical experience and 2 years of web development school, I`m seeking to obtain a creative and challenging position that utilizes my current knowledge of web development and design. I have a positive attitude and I am always eager to learn new skills. I am comfortable working both independently and as part of a team.',
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
                  href="/path/to/your/Cv.pdf"  // Uppdatera sökvägen till din CV-fil här
                  download  // Detta attribut gör att länken fungerar som nedladdningslänk
                >
                  Download My CV
                </a>
              </div>
            </FadeIn>
            {/* <div className="lg:order-1 flex-shrink-0">
              <img
                className="h-96 w-auto flex-none rounded-2xl object-cover shadow-xl"
                src="https://avatars.githubusercontent.com/u/91563447?v=4"
                alt=""
              />
            </div> */}
          </div>
        ))}
      </div>
    </Container>
  );
}
