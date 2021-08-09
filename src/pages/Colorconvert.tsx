import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import Color from "color";
import copy from "copy-text-to-clipboard";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Colorconvert.module.css";

function sanitizeCode(code: string) {
  try {
    Color(code);
    return code;
  } catch {
    if (!code.startsWith("#") && !code.includes(",")) {
      return `#${code}`;
    } else if (/^\d+\,\s*\d+\,\s*\d+$/.test(code)) {
      return `rgb(${code})`;
    } else if (/^hsl\(\d+\,\s*\d+%?\,\s*\d+%?\)$/.test(code)) {
      const {
        groups: { h, s, l },
      } = code.match(/^hsl\((?<h>\d+)\,\s*(?<s>\d+%?)\,\s*(?<l>\d+%?)\)$/);
      return `hsl(${h}, ${s.endsWith("%") ? s : `${s}%`}, ${
        l.endsWith("%") ? l : `${l}%`
      })`;
    } else {
      return code;
    }
  }
}

export default function Colorconvert() {
  const [value, setValue] = useState("#39cac4");
  const [hex, setHex] = useState("#39cac4");
  const [rgb, setRGB] = useState("rgb(57, 202, 196)");
  const [hsl, setHSL] = useState("hsl(177.5, 57.8%, 50.8%)");
  const [valid, setValid] = useState(true);
  const [RGBmodel, setRGBmodel] = useState<[number, number, number]>([
    57,
    202,
    196,
  ]);
  const [HSLmodel, setHSLmodel] = useState<[number, number, number]>([
    177.5,
    57.8,
    50.8,
  ]);
  useEffect(() => {
    try {
      const color = Color(sanitizeCode(value));
      setHex(color.hex());
      setRGB(color.rgb().string());
      setHSL(color.hsl().string());
      setValid(true);
    } catch {
      setValid(false);
    }
  }, [value]);
  useEffect(() => {
    const color = Color.rgb(RGBmodel);
    setValue(color.rgb().string());
    setHex(color.hex());
    setRGB(color.rgb().string());
    setHSL(color.hsl().string());
    setValid(true);
  }, [RGBmodel]);
  useEffect(() => {
    const color = Color.hsl(HSLmodel);
    setValue(color.hsl().string());
    setHex(color.hex());
    setRGB(color.rgb().string());
    setHSL(color.hsl().string());
    setValid(true);
  }, [HSLmodel]);


  const CustomSlider = withStyles({
    rail: {
      backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
    },
    track: {
      backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
    }
  })(Slider);

  return (
    <Layout
      title="Color converter"
      description="A color converter between different models; provides nice visualization"
    >
      <main>
        <div className={clsx("container margin-vert--lg text--center")}>
          <h1>
            <Translate id="transcoder.title">Color converter</Translate>
          </h1>
          <div className={styles.card}>
            <div>
              <TextField
                error={!valid}
                value={value}
                variant="outlined"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="center" style={{ display: "flex" }}>
              <div className="margin-top--md" style={{ flex: 1 }}>
                <div
                  className={styles.colorBlock}
                  style={{ backgroundColor: sanitizeCode(value) }}
                />
              </div>
              <div className="margin-top--md" style={{ flex: 2 }}>
                <div
                  style={{ cursor: "pointer" }}
                  role="button"
                  onClick={() => copy(hex)}
                >
                  HEX: <code>{hex}</code>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  role="button"
                  onClick={() => copy(rgb)}
                >
                  RGB: <code>{rgb}</code>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  role="button"
                  onClick={() => copy(hsl)}
                >
                  HSL: <code>{hsl}</code>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="margin--md" style={{ flex: 1 }}>
                {Color(rgb)
                  .rgb()
                  .array()
                  .map((c, i) => {
                    const name = (["R", "G", "B"] as const)[i];
                    return (
                      <div style={{ display: "flex" }}>
                        <div id={`slider-${name}`} style={{ marginRight: 8 }}>
                          {name}
                        </div>
                        <div style={{ flexGrow: 100 }}>
                          <Slider
                            id={`slider-${name}`}
                            key={i}
                            value={c}
                            min={0}
                            max={255}
                            onChange={(e, val) =>
                              setRGBmodel(
                                Object.assign([], RGBmodel, { [i]: val })
                              )
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="margin--md" style={{ flex: 1 }}>
                {Color(hsl)
                  .hsl()
                  .array()
                  .map((c, i) => {
                    const name = (["H", "S", "L"] as const)[i];
                    const max = [255, 100, 100][i];
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flexGrow: 100 }}>
                          <Slider
                            id={`slider-${name}`}
                            key={i}
                            value={c}
                            min={0}
                            max={max}
                            onChange={(e, val) =>
                              setHSLmodel(
                                Object.assign([], HSLmodel, { [i]: val })
                              )
                            }
                          />
                        </div>
                        <div id={`slider-${name}`} style={{ marginLeft: 8 }}>
                          {name}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
