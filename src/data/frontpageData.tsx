import React from "react";
import Translate from "@docusaurus/Translate";

export const features = [
  {
    title: (
      <Translate id="front.features.feat1.title">7-year programmer</Translate>
    ),
    sources: {
      light: "img/frontpage/feature1.svg",
      dark: "img/frontpage/feature1-dark.svg",
    },
    description: (
      <Translate id="front.features.feat1">
        Fluent with both front-end and back-end programming languages.
        Experienced with graphics language Asymptote and typesetting language
        LaTeX.
      </Translate>
    ),
  },
  {
    title: <Translate id="front.features.feat2.title">STEM explorer</Translate>,
    sources: {
      light: "img/frontpage/feature2.svg",
      dark: "img/frontpage/feature2-dark.svg",
    },
    description: (
      <Translate
        id="front.features.feat2"
        values={{
          section: (
            <code>
              <Translate id="front.features.feat2.section">docs</Translate>
            </code>
          ),
        }}
      >
        {
          "Gold medalist in physics, chemistry, and biology olympiads. Did extensive research in STEM-related fields. Read more about my STEM experience in the {section}."
        }
      </Translate>
    ),
  },
  {
    title: <Translate id="front.features.feat3.title">Keen debater</Translate>,
    sources: {
      light: "img/frontpage/feature3.svg",
      dark: "img/frontpage/feature3-dark.svg",
    },
    description: (
      <Translate id="front.features.feat3">
        Started public forum debating in 8th grade. Debated on topics including
        gene editing, CJS, poverty alleviation, etc. Won regional &amp; national
        championships, as well as multiple outstanding speakers. Currently doing
        World Schools.
      </Translate>
    ),
  },
];
