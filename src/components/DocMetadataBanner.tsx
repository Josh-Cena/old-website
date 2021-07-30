import React from 'react';

interface Props {
  frontMatter: Record<string, unknown> & {
    date: Date;
    link: string;
  };
}

export default function DocMetadataBanner({frontMatter}: Props) {
  const {date, link} = frontMatter;
  if (!date && !link) {
    return null;
  }
  return (
    <div className="alert alert--info margin-bottom--md" role="contentinfo">
      {date && <>First published on <span>{date.toLocaleDateString('zh-Hans')}</span>. </>}{link && <a href={link}>Link</a>}
    </div>
  );
}
