import React from 'react';
import Translate from '@docusaurus/Translate';

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
      {date && 
        <Translate
          id="docMetadataBanner.firstPublished"
          values={{
            date: <b>{date.toLocaleDateString('zh-Hans')}</b>,
          }}
        >
          {'First published on {date}.'}
        </Translate>
      }{link && <a href={link}><Translate id="docMetadataBanner.sourceLink">Source link</Translate></a>}
    </div>
  );
}
