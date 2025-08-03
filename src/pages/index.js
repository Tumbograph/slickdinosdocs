import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundColor: '#343541', // SlickDinos orange
        paddingTop: '0rem', // Reduce top padding/spacing
        paddingBottom: '1rem', // Keep some bottom spacing
      }}
    >
      <div className="container">
        <div className={clsx('text--center', styles.heroImage)}>
          <img
            src="/img/DocsHero.png"
            alt="Slick Dinos Docs Hero"
            style={{ maxWidth: '30%', height: 'auto' }} // Keep existing size
          />
        </div>
        <p className="hero__subtitle" style={{ color: '#d1d5db' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docs 🦖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Slick Dinos documentation portal">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}