import React, { ReactElement } from 'react';
import Translate from '@docusaurus/Translate';

export type section = {
  readonly sectionHead: ReactElement;
  readonly items: ReactElement[]; 
};

export type sections = section[];

const CV: sections = [
  {
    sectionHead: <Translate id='CV.sec1'>Me as scholar</Translate>,
    items: [
      <Translate id='CV.sec1.item1'>SWFLA &apos;22 IB curriculum</Translate>,
      <Translate id='CV.sec1.item2' values={{sup: <sup>rd</sup>}}>{'\'20 BPhO top gold medalist, nationally ranked 3{sup}'}</Translate>,
      <Translate id='CV.sec1.item3' values={{sup: <sup>th</sup>}}>{'\'20 UKChO gold medalist, nationally ranked 7{sup}'}</Translate>,
      <Translate id='CV.sec1.item4'>&apos;20 USABO gold medalist</Translate>,
      <Translate id='CV.sec1.item5'>Solo-studied college CS &amp; chemistry courses</Translate>,
      <Translate id='CV.sec1.item6' values={{link: <a href="https://www.qubitbyqubit.org/">QxQ</a>}}>{'IBM {link} courses on quantum computing'}</Translate>,
    ],
  },
  {
    sectionHead: <Translate id='CV.sec2'>Me as researcher</Translate>,
    items: [
      <Translate id='CV.sec2.item1'>Internship at SIOC: structural chemistry</Translate>,
      <Translate id='CV.sec2.item2'>Research with MIT: cybersecurity strategies</Translate>,
      <Translate id='CV.sec2.item2'>Independent research: Fake video detection with deep learning</Translate>,
    ],
  },
  {
    sectionHead: <Translate id='CV.sec3'>Me as debater</Translate>,
    items: [
      <Translate id='CV.sec3.item1' values={{link: <a href="http://www.nsda.cn/home/PersonRank"><Translate id='CV.sec3.item1.link'>nationally ranked</Translate></a>}}>{'NSDA {link} top 50'}</Translate>,
      <Translate id='CV.sec3.item2'>NSDA &apos;20 national champion in WSD format</Translate>,
      <Translate id='CV.sec3.item3'>NSDA &apos;20 spring Shanghai regional champion</Translate>,
      <Translate id='CV.sec3.item4'>TOC &apos;21 octa finalist</Translate>,
      <Translate id='CV.sec3.item5'>7-time NSDA outstanding speaker</Translate>,
      <Translate id='CV.sec3.item6'>IPPF &apos;20 global &quot;Sweet 16&quot;</Translate>,
    ],
  },
  {
    sectionHead: <Translate id='CV.sec4'>Me as programmer</Translate>,
    items: [
      <Translate id='CV.sec4.item1' values={{link: <a href="https://github.com/Computerization"><Translate id='CV.sec4.item1.link'>Computerization</Translate></a>}}>{'Current club leader of {link}'}</Translate>,
      <Translate id='CV.sec4.item2' values={{link: <a href="https://github.com/Computerization/Enspire">Enspire</a>}}>{'Developer of {link}'}</Translate>,
      <Translate id='CV.sec4.item3'>USACO gold division</Translate>,
      <Translate id='CV.sec4.item4'>Full-stack developer</Translate>,
      <Translate id='CV.sec4.item5'>Understanding of computer hardware</Translate>,
    ],
  },
  {
    sectionHead: <Translate id='CV.sec5'>Me as gamer</Translate>,
    items: [
      <Translate id='CV.sec5.item1'>7-year MINECRAFT player</Translate>,
      <Translate id='CV.sec5.item2' values={{link: <a href="https://baterock-minecraft.github.io">BateRock</a>}}>{'Operations and Tech manager of {link} server'}</Translate>,
      <Translate id='CV.sec5.item3'>Built functional redstone CPU in Minecraft</Translate>,
      <Translate id='CV.sec5.item4'>Lay Clash Royale player: PB 6k trophies</Translate>,
    ],
  },
  {
    sectionHead: <Translate id='CV.sec6'>More about me</Translate>,
    items: [
      <Translate
        id='CV.sec6.item1'
        values={{
          color:
            <span style={{backgroundColor: '#39cac4', padding: '2pt', borderRadius: '4pt', color: 'black'}}>
              <Translate id='CV.sec6.item1.color'>turquoise</Translate>
            </span>,
          code: <code>#39cac4</code>
        }}
      >
        {'Favorite color: {color} ({code})'}
      </Translate>,
      <Translate id='CV.sec6.item2'>1,200+ hours of music listening each year</Translate>,
      <Translate id='CV.sec6.item3'>Favorite genre: soft rock</Translate>,
      <Translate id='CV.sec6.item4'>Favorite band: Coldplay</Translate>,
      <Translate id='CV.sec6.item5'>Science fiction writer</Translate>,
    ]
  }
];

export default CV;
