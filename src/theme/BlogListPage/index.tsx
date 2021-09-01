/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

function BlogListPage(props: Props): JSX.Element {
  const {metadata, items} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <Layout
      title={title}
      description={blogDescription}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: 'blog_posts_list',
      }}>
      <header>
        <h1 className="text--center margin-top--lg margin-bottom--xs">
          <Translate id="bloglist.title">
            Josh-Cena&rsquo;s (secret) blog
          </Translate>
        </h1>
        <div className="text--center margin-top--md">
          <a href="/blog/rss.xml" style={{marginRight: 20}} title="Feeds">
            <svg width="20px" height="20px" viewBox="0 0 124 124" style={{fill: '#39cac4'}}>
              <circle cx="20.3" cy="103.749" r="20"/>
              <path d="M67,113.95c0,5.5,4.5,10,10,10s10-4.5,10-10c0-42.4-34.5-77-77-77c-5.5,0-10,4.5-10,10s4.5,10,10,10
                C41.5,56.95,67,82.55,67,113.95z"/>
              <path d="M114,123.95c5.5,0,10-4.5,10-10c0-62.8-51.1-113.9-113.9-113.9c-5.5,0-10,4.5-10,10s4.5,10,10,10
                c51.8,0,93.9,42.1,93.9,93.9C104,119.45,108.4,123.95,114,123.95z"/>
            </svg>
          </a>
          <a href="/blog/tags" style={{marginRight: 22}} title="Tags">
            <svg width="20px" height="20px" viewBox="0 0 512.0015 512" style={{fill: '#39cac4'}}>
              <path d="m456.882812 0h-194.308593c-3.976563 0-7.792969 1.582031-10.605469 4.394531l-235.855469 235.847657c-21.484375 21.492187-21.484375 56.457031 0 77.941406l177.699219 177.695312c10.375 10.375 24.214844 16.089844 38.964844 16.09375h.003906c14.753906 0 28.59375-5.71875 38.972656-16.097656l235.847656-235.851562c2.8125-2.8125 4.394532-6.628907 4.394532-10.605469l.003906-194.308594c-.003906-30.386719-24.730469-55.109375-55.117188-55.109375zm25.113282 243.207031-231.457032 231.457031c-4.710937 4.714844-11.019531 7.308594-17.757812 7.308594-6.742188 0-13.046875-2.59375-17.757812-7.304687l-177.699219-177.695313c-9.789063-9.789062-9.789063-25.726562 0-35.519531l231.460937-231.453125h188.097656c13.847657 0 25.117188 11.265625 25.117188 25.113281zm0 0"/>
              <path d="m379.785156 85.078125c-12.589844 0-24.425781 4.90625-33.328125 13.808594-8.902343 8.898437-13.804687 20.734375-13.804687 33.324219 0 12.589843 4.902344 24.425781 13.804687 33.328124 8.902344 8.902344 20.738281 13.804688 33.328125 13.804688 12.585938 0 24.421875-4.902344 33.324219-13.804688 8.902344-8.902343 13.804687-20.738281 13.804687-33.328124 0-12.589844-4.902343-24.425782-13.800781-33.324219-8.902343-8.902344-20.738281-13.808594-33.328125-13.808594zm12.113282 59.246094c-3.234376 3.238281-7.539063 5.019531-12.113282 5.019531-4.578125 0-8.878906-1.78125-12.113281-5.019531-3.238281-3.234375-5.019531-7.539063-5.019531-12.113281 0-4.574219 1.78125-8.878907 5.019531-12.113282 3.234375-3.238281 7.539063-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531 3.238281 3.234375 5.019531 7.539063 5.019531 12.113282 0 4.574218-1.785157 8.878906-5.019531 12.113281zm0 0"/>
            </svg>
          </a>
          <a href="/blog/2021" title="archive">
            <svg width="20px" height="20px" viewBox="0 0 459.489 459.489" style={{fill: '#39cac4'}}>
              <path d="M406.619,132.325H52.87c-8.284,0-15,6.716-15,15v286.513c0,8.284,6.716,15,15,15h353.749c8.284,0,15-6.716,15-15V147.325
                C421.619,139.041,414.903,132.325,406.619,132.325z M391.619,418.838H67.87V162.325h323.749V418.838z"/>
              <path d="M444.489,10.651H15c-8.284,0-15,6.716-15,15v60.225c0,8.284,6.716,15,15,15h429.489c8.284,0,15-6.716,15-15V25.651
                C459.489,17.367,452.773,10.651,444.489,10.651z M429.489,70.876H30V40.651h399.489V70.876z"/>
              <path d="M177.334,262.173h104.82c8.284,0,15-6.716,15-15v-43.562c0-8.284-6.716-15-15-15h-104.82c-8.284,0-15,6.716-15,15v43.562
                C162.334,255.457,169.05,262.173,177.334,262.173z M192.334,218.611h74.82v13.562h-74.82V218.611z"/>
            </svg>
          </a>
        </div>
      </header>
      <main className={styles.wrapper}>
        <div className={styles.CardContainer}>
          {items.map(({content: BlogPostContent}) => (
            <BlogPostItem
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              assets={BlogPostContent.assets}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}>
              <BlogPostContent />
            </BlogPostItem>
          ))}
        </div>
        <BlogListPaginator metadata={metadata} />
      </main>
    </Layout>
  );
}

export default BlogListPage;
