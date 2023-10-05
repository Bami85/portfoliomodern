import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import myPhoto from '@/images/myPhoto.jpg'



function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

// Import statements remain unchanged
// ...

// Section component remains unchanged
// ...

function Discover() {
  return (
    <Section title="Project 1" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          My degree project in{' '}
          <strong className="font-semibold text-neutral-950">React</strong> and
          Strapi, is a Volvo webshop butik to rent out Volvo Cars.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
    </Section>
  );
}

function Build() {
  return (
    <Section title="Book Your Trip" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Website where you can find your flight in real time made in{' '}
          <strong className="font-semibold text-neutral-950">Next.js</strong> and MongoDB.
        </p>
      </div>
      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio was so regular with their progress updates we almost began to think they were automated!
      </Blockquote>
    </Section>
  );
}

function Deliver() {
  return (
    <Section title="Project 3" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Portfolio made in{' '}
          <strong className="font-semibold text-neutral-950">React and Node.js</strong>. This allows us to work with other colleagues together.
        </p>
      </div>
    </Section>
  );
}

export const metadata = {
  title: 'Our Process',
  description: 'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Intro" title="Who I am?">
        <div className="flex justify-center items-center flex-col mb-10">
           <Section image={{ src: myPhoto }}>

    </Section>
          <p className="text-center">
            Team Manager Backup with approximately 5 years of practical experience...
          </p>
        </div>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <ContactSection />
    </>
  );
}
