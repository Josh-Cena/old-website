import React, { ReactElement } from 'react';

export type section = {
  readonly sectionHead: string;
  readonly items: ReactElement[]; 
};

export type sections = section[];

const CV: sections = [
  {
    sectionHead: 'Me as scholar',
    items: [
      <>SWFLA &apos;22 IB curriculum</>,
      <>&apos;20 BPhO top gold medalist, nationally ranked 3<sup>rd</sup></>,
      <>&apos;20 UKChO gold medalist, nationally ranked 7<sup>th</sup></>,
      <>&apos;20 USABO gold medalist</>,
      <>Solo-studied college CS &amp; chemistry courses</>,
      <>IBM <a href="https://www.qubitbyqubit.org/">QxQ</a> courses on quantum computing</>,
    ],
  },
  {
    sectionHead: 'Me as researcher',
    items: [
      <>Internship at SIOC: structural chemistry</>,
    ],
  },
  {
    sectionHead: 'Me as debater',
    items: [
      <>NSDA <a href="http://www.nsda.cn/home/PersonRank">nationally ranked</a> top 50</>,
      <>NSDA &apos;20 national champion in WSD format</>,
      <>NSDA &apos;20 spring Shanghai regional champion</>,
      <>TOC &apos;21 octa finalist</>,
      <>7-time NSDA outstanding speaker</>,
      <>IPPF &apos;20 global &quot;Sweet 16&quot;</>,
    ],
  },
  {
    sectionHead: 'Me as programmer',
    items: [
      <>Current club leader of <a href="https://github.com/Computerization">Computerization</a></>,
      <>Developer of <a href="https://github.com/Computerization/Enspire">Enspire</a></>,
      <>USACO gold division</>,
      <>Full-stack developer</>,
      <>Understanding of computer hardware</>,
    ],
  },
  {
    sectionHead: 'Me as gamer',
    items: [
      <>7-year MINECRAFT player</>,
      <>Operations and Tech manager of <a href="https://baterock-minecraft.github.io">BateRock</a> server</>,
      <>Built functional redstone CPU in Minecraft</>,
      <>Lay Clash Royale player: PB 6k trophies</>,
    ],
  },
  {
    sectionHead: 'More about me',
    items: [
      <>
        Favorite color:
        {' '}<span style={{backgroundColor: '#39cac4', padding: '2pt', borderRadius: '4pt', color: 'black'}}>
          turquoise
        </span>
        {' '}(<code>#39cac4</code>)
      </>,
      <>17,000+ hours of music listening each year</>,
      <>Favorite genre: soft rock</>,
      <>Favorite band: Coldplay</>,
      <>Science fiction writer</>,
    ]
  }
];

export default CV;
