import { toKebab } from "../../helpers.js";

export default function RadioBox({
  border,
  defaultChecked,
  description,
  horizontal,
  label,
  onChange,
  seriesOf,
  small,
  fullHeight,
}) {
  const labelKebab = toKebab(label);
  return (
    <div className="radio-box" style={{ height: fullHeight && "100%" }}>
      <input
        id={labelKebab}
        value={labelKebab}
        type="radio"
        name={seriesOf}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={labelKebab}>
        <h3>{label}</h3>
        <p>{description}</p>
      </label>
      <style jsx>{`
        .radio-box {
          --color-radio-base: var(--color-border);
          --color-radio-base-border: var(--color-border-alt);
          --color-radio-fill: var(--color-brand);
          --radio-size: ${small ? "1.4rem" : "2rem"};
          --radio-stroke: 0.3rem;
          --radio-padding: ${small ? "1rem" : "2rem"};
          position: relative;
        }

        h3 {
          font-size: ${small ? "1rem" : "1.8rem"};
          font-weight: 600;
          line-height: 120%;
          margin: 0;
        }

        p {
          margin: 0.5rem 0 0;
          line-height: 150%;
        }

        input {
          position: absolute;
          left: -9999px;
        }

        input + label {
          display: block;
          align-items: ${horizontal && "center"};
          cursor: pointer;
          padding: calc(
              var(--radio-padding) + var(--radio-padding) / 2 +
                var(--radio-size)
            )
            var(--radio-padding) var(--radio-padding);
          border: 0.25rem solid
            ${border ? "var(--color-border)" : "transparent"};
          border-radius: var(--border-radius-medium);
          text-align: ${horizontal ? "left" : "center"};
          transition: all 150ms ease-out;
        }
        input + label:before {
          content: "";
          display: block;
          position: absolute;
          width: var(--radio-size);
          height: var(--radio-size);
          top: var(--radio-padding);
          left: 50%;
          transform: translateX(-50%);
          border-radius: 100%;
          background: transparent;
          border: var(--radio-stroke) var(--color-radio-base) solid;
        }
        input + label:after {
          content: "";
          display: block;
          position: absolute;
          height: calc(var(--radio-size) - var(--radio-stroke) * 2);
          width: calc(var(--radio-size) - var(--radio-stroke) * 2);
          top: calc(var(--radio-padding) + var(--radio-stroke));
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          background: var(--color-radio-fill);
          border-radius: 100%;
          transition: opacity 150ms ease-out;
        }

        input:focus + label {
          box-shadow: var(--box-shadow-outline-button);
        }
        input:not(:checked) + label {
          background: var(--color-radio-base);
        }
        input:not(:checked) + label:after {
          opacity: 0;
        }
        input:checked + label {
          border-color: var(--color-brand);
        }
        input:not(:checked) + label:focus,
        input:not(:checked) + label:hover {
          border-color: var(--color-brand);
          border-color: var(--color-radio-base-border);
        }
        input:not(:checked) + label:before {
          border-color: var(--color-radio-base-border);
        }
        input:checked + label:before {
          background: var(--color-radio-base);
          border-color: transparent;
        }
        input:checked + label:after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
