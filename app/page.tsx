"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectProposalForm from "@/components/ProjectProposalForm";
import { Space_Grotesk, Outfit } from "next/font/google";

gsap.registerPlugin(useGSAP);

const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const styles = {
  pageWrapper: {
    className:
      "mx-4 min-h-full overflow-hidden rounded-[32px] bg-slate-950 sm:mx-6 lg:mx-8",
    style: {
      backgroundImage:
        "linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(20, 83, 45, 0.72), rgba(70, 34, 16, 0.82)), url('/redwood.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  contentSection: {
    className:
      "min-h-[calc(100vh-6rem)] rounded-[32px] border border-white/10 px-6 py-10 text-white shadow-2xl shadow-black/40 sm:px-10 sm:py-16 lg:px-16",
  },

  innerLayout: {
    className: "mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center",
  },

  contentColumn: {
    className:
      "max-w-3xl rounded-[28px] border border-white/10 bg-slate-950/55 p-6 shadow-xl shadow-black/30 backdrop-blur-md sm:p-10",
  },

  introText: {
    className: `${space.className} mb-6 w-fit rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-200`,
  },

  heroStack: {
    className: "flex flex-col gap-4",
  },

  heroHeading: {
    className: `${outfit.className} text-lg font-medium tracking-wide text-sky-100/80 sm:text-xl`,
  },

  heroText: {
    className: `${outfit.className} text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl`,
  },

  heroAccent: {
    className: "text-amber-300",
  },

  heroLine: {
    className: "block",
  },

  description: {
    className:
      "mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg",
  },

  actions: {
    className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center",
  },

  primaryButton: {
    className:
      "rounded-full bg-amber-300 px-8 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-amber-200",
  },

  secondaryButton: {
    className:
      "rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15",
  },

  formWrapper: {
    className:
      "mx-auto max-w-6xl overflow-hidden px-6 pb-10 sm:px-10 lg:px-16",
  },
} as const;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!formRef.current) return;

      if (showForm) {
        gsap.fromTo(
          formRef.current,
          {
            height: 0,
            y: 250,
            opacity: 0,
            scale: 0.97,
            filter: "blur(8px)",
            pointerEvents: "none",
          },
          {
            height: "auto",
            y: -77,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            pointerEvents: "auto",
            duration: 3.1,
            ease: "power4.out",
          }
        );

        return;
      }

      gsap.to(formRef.current, {
        height: 0,
        y: 250,
        opacity: 0,
        scale: 0.87,
        filter: "blur(8px)",
        pointerEvents: "none",
        duration: 0.7,
        ease: "power3.inOut",
      });
    },
    { dependencies: [showForm] }
  );


  return (
    <div
      className={styles.pageWrapper.className}
      style={styles.pageWrapper.style}
    >
      <section className={styles.contentSection.className}>
        <div className={styles.innerLayout.className}>
          <div className={styles.contentColumn.className}>
            <p className={styles.introText.className}>
              Santa Cruz Web Development
            </p>

            <div className={styles.heroStack.className}>
              <h1 className={styles.heroHeading.className}>
                Turn your idea into a....
              </h1>

              <p className={styles.heroText.className}>
                <span>Website,</span>{" "}
                <span className={styles.heroLine.className}>
                  Widget,
                </span>{" "}
                <span className={styles.heroLine.className}>
                  App,
                </span>{" "}
                <span className={styles.heroAccent.className}>
                  or Game.
                </span>
              </p>
            </div>

            <p className={styles.description.className}>
              Based near Santa Cruz, I help businesses, creators,
              and entrepreneurs bring their ideas online. From
              simple websites to interactive tools, custom widgets,
              dashboards, and browser-based games.
            </p>

            <div className={styles.actions.className}>
              <button
                type="button"
                onClick={() => setShowForm((current) => !current)}
                className={styles.primaryButton.className}
              >
                {showForm ? "Hide form" : "Start a Project"}
              </button>

              <button
                type="button"
                className={styles.secondaryButton.className}
              >
                View Examples
              </button>
             
            </div>
          </div>
        </div>
        
      </section>
 <div
    ref={formRef}
    className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        mx-auto
        max-h-[90vh]
        max-w-4xl
        overflow-y-hidden
        px-4
    "
    style={{
        opacity: 0,
        pointerEvents: "none",
        transform: "translateY(100%)",
    }}
>
    <ProjectProposalForm onClose={() => setShowForm(false)} />
</div>




    </div>
  );
}