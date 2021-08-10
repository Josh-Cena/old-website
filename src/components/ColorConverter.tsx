import React, { useState, useEffect } from "react";
import copy from "copy-text-to-clipboard";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Color from "color";

import styles from "./Colorconverter.module.css";

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

type ModelType = "hex" | "rgb" | "hsl";
type Display = Record<ModelType, string>;
type ColorModel = [number, number, number, number?];

export default function ColorConverter() {
  const [value, setValue] = useState("#39cac4");
  const [display, setDisplay] = useState<Display>({
    hex: "#39cac4",
    rgb: "rgb(57, 202, 196)",
    hsl: "hsl(177.5, 57.8%, 50.8%)",
  });
  const [valid, setValid] = useState(true);
  const [RGBmodel, setRGBmodel] = useState<ColorModel>([57, 202, 196]);
  const [HSLmodel, setHSLmodel] = useState<ColorModel>([177.5, 57.8, 50.8]);
  function updateDisplay(color: Color) {
    setDisplay({
      hex: color.hex(),
      rgb: color.rgb().string(),
      hsl: color.hsl().string(),
    });
    setValid(true);
  }
  useEffect(() => {
    try {
      const color = Color(sanitizeCode(value));
      updateDisplay(color);
    } catch {
      setValid(false);
    }
  }, [value]);
  useEffect(() => {
    const color = Color.rgb(RGBmodel);
    setValue(color.rgb().string());
    updateDisplay(color);
  }, [RGBmodel]);
  useEffect(() => {
    const color = Color.hsl(HSLmodel);
    setValue(color.hsl().string());
    updateDisplay(color);
  }, [HSLmodel]);
  return (
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
        <div className="margin-top--md" style={{ flex: 2, textAlign: 'left' }}>
          {Object.keys(display).map((type, idx) => (
            <div
              style={{ cursor: "pointer" }}
              role="button"
              key={idx}
              onClick={() => copy(display[type])}
            >
              {type}: <code>{display[type]}</code>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="margin--md" style={{ flex: 1 }}>
          {Color(display.rgb)
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
                        setRGBmodel(Object.assign([], RGBmodel, { [i]: val }))
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="margin--md" style={{ flex: 1 }}>
          {Color(display.hsl)
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
                        setHSLmodel(Object.assign([], HSLmodel, { [i]: val }))
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
  );
}
