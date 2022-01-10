import { motion } from "framer-motion";

interface ProgressBarProps {
  headline?: string;
  label?: string;
  currentCount: number;
  totalCount: number;
}

const bar = {
  hidden: { opacity: 0, transform: "scaleX(0)" },
  show: {
    opacity: 1,
    transform: "scaleX(1)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function ProgressBar({
  headline,
  label,
  currentCount,
  totalCount,
}: ProgressBarProps) {
  return (
    <div className="progress-bar">
      {headline && <h6>{headline}</h6>}
      {label && <h3>{label}</h3>}
      <div className="progress-bar__segments">
        {[...Array(totalCount)].map((val, index) => {
          const isActive = index < currentCount;
          const isLastActive = index + 1 === currentCount;
          return (
            <div
              className={`progress-bar-segment ${
                isActive && !isLastActive && "progress-bar-segment--filled"
              }`}
              key={`progress-bar-segment-${index}`}
            >
              {isLastActive && (
                <motion.figure
                  variants={bar}
                  initial="hidden"
                  animate="show"
                  style={{
                    margin: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--color-brand)",
                    transformOrigin: "0 0",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .progress-bar {
          margin: 0 auto 2rem;
          max-width: var(--width-page-interior);
          text-align: center;
        }
        .progress-bar__segments {
          display: grid;
          width: 100%;
          grid-auto-flow: column;
          grid-auto-rows: 1fr;
          grid-column-gap: 0.25rem;
          border-radius: 1rem;
          overflow: hidden;
          max-width: 24rem;
          margin: 0 auto;
        }
        .progress-bar-segment {
          height: 0.5rem;
          background-color: var(--color-border);
        }
        .progress-bar-segment--filled {
          background-color: var(--color-brand);
        }
        h3 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: var(--color-brand);
        }
        h6 {
          font-size: 0.6rem;
          letter-spacing: 0.05rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
