import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SlickDinos IP',
    // Future PNG: /img/slickdinos-ip.png
    description: (
      <>
        Slick Dinos IP is focused on spreading positive vibes and slickness 
        by crafting cool brand, memetic culture, and advanced technology.
      </>
    ),
  },
  {
    title: 'Community First',
    // Future PNG: /img/community-first.png
    description: (
      <>
        Slick Dinos main pillar is the community and Dino devs are focused on creating value 
        and distributing it in the community <code>equally and ethically</code>.
      </>
    ),
  },
  {
    title: 'Advanced Technology',
    // Future PNG: /img/advanced-tech.png
    description: (
      <>
        Our technology platform and tools creates competitive advantage for our community.
        Make use of our tech to stay ahead in the crypto space.
      </>
    ),
  },
];

function Feature({ title, description }) { // Removed Svg from props
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* SVG commented out; replace with PNG when available */}
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}