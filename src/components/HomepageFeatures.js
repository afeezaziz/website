import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Science',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I write about my thinking in science and technology, both from theoretical and 
        practical perspectives.
      </>
    ),
  },
  {
    title: 'Crypto',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I am heavily invested in crypto, in terms of money, time, soul and everything.
        I hope that with my writings, it can make my thoughts clearer.
      </>
    ),
  },
  {
    title: 'Business & Entrepreneurship',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I want to document everything that I have learnt throughout the process so 
        that it can be a lesson to business owners and entrepreneurs in the future.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
