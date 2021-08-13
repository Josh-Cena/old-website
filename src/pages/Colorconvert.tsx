import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

import ColorConverter from '@site/src/components/ColorConverter';

export default function colorconvert() {
  return (
    <Layout
      title="Color converter"
      description="A color converter between different models; provides nice visualization"
    >
      <main>
        <div className={clsx("container margin-vert--lg text--center")}>
          <h1>
            <Translate id="colorConvert.title">Color converter [WIP]</Translate>
          </h1>
          <ColorConverter />
        </div>
      </main>
    </Layout>
  );
}
