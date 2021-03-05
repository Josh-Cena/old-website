import React from 'react';
import clsx from 'clsx';
import useThemeContext from '@theme/hooks/useThemeContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '7-year programmer',
    lightImageUrl: 'img/feature1.svg',
    darkImageUrl: 'img/feature1-dark.svg',
    description: (
      <>
        Fluent with both front-end and back-end programming languages. 
        Experienced with graphics language Asymptote and typesetting language LaTeX.
      </>
    ),
  },
  {
    title: 'STEM explorer',
    lightImageUrl: 'img/feature2.svg',
    darkImageUrl: 'img/feature2-dark.svg',
    description: (
      <>
        Gold medalist in physics, chemistry, and biology olympiads. Did extensive research
        in STEM-related fields. Read more about my STEM experience in the <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Keen debater',
    lightImageUrl: 'img/undraw_docusaurus_react.svg',
    darkImageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Started public forum debating in 8th grade. Debated on topics including gene
        editing, CJS, poverty alleviation, etc. Won regional &amp; national championships,
        as well as multiple outstanding speakers. Currently doing World Schools.
      </>
    ),
  },
];

function Feature({lightImageUrl, darkImageUrl, title, description}) {
  const lightImgUrl = useBaseUrl(lightImageUrl);
  const darkImgUrl = useBaseUrl(darkImageUrl);
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {lightImgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={isDarkTheme ? darkImgUrl : lightImgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <img
              className={styles.logo}
              alt="Logo"
              src="/img/logo.png"
            />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('CV/')}>
              About me
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
