import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>Hapi Tv</li>
        <li>
          <Link href="/">
            <a>Coming Soon</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The new social media app for sharing and streaming videos\n'}
            <span className="text-primary-500">
              Uncensored, Unedited, Unrestricted
            </span>
          </>
        }
        description="The new generation of streaming and social media."
        button={
          <Button xl>
            Sign up for our waitlist and get an invitation to our beta release
          </Button>
        }
      />
    </Section>
  </Background>
);

export { Hero };
