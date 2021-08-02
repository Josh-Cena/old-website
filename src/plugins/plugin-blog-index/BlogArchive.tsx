import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import type {BlogSidebar} from '@theme/BlogSidebar';
import type {Content} from '@theme/BlogPostPage';
import Link from '@docusaurus/Link';

interface Props {
  metadata: {
    blogTitle: string;
    blogDescription: string;
    totalCount: number;
    time: string;
  };
  items: {content: Content}[];
  sidebar: BlogSidebar;
}

export default function BlogArchive({metadata, items, sidebar}: Props) {
  const {blogTitle, blogDescription, totalCount, time} = metadata;
  return (
    <BlogLayout
      title={blogTitle}
      description={blogDescription}
      searchMetadatas={{tag: 'blog_posts_list'}}
      sidebar={sidebar}>
      <h1>{totalCount} post{totalCount > 1 ? 's' : ''} written {time}</h1>
      <ul>
        {items.reverse().map(({content}) => (
          <li>
            {content.metadata.formattedDate} — <Link to={content.metadata.permalink}>{content.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </BlogLayout>
  )
}
