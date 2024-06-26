import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title mb-2">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle mb-0.5">
          <Translate>Translate seamlessly.</Translate>
        </p>
        <p>
          <Translate>
            Effortless Discord translation bot for a global community.
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Zekuru-v2 is a powerful Discord translator bot."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
