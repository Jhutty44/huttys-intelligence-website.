/**
 * Scene data for the scroll-scrub journey — THE file you fill in per build.
 *
 * Single-shot (the default): ONE entry in `scenes`, whose `clip` is the single
 * continuous film. Chapter copy still comes from `chapters` below, rendered as
 * semantic sections over that one clip.
 *
 * Multi-leg (opt-in): one entry per seam-locked leg, in journey order. Every
 * `poster` MUST be the exact first frame of the encoded clip beside it — never
 * a design board or an imagined destination still.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Brand tokens for the journey layer. Set these from the design brief. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#55b9ae",
  background: "#101b29",
  ink: "#f4f7f7",
  muted: "#a8b9c3",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A new way to plan infrastructure, coordinate decisions, and move projects forward.",
    clip: "/assets/world/scene-01.mp4",
    id: "scene-01",
    scroll: 2.4,
    kicker: "ENGINEERING INTELLIGENCE / EARLY ACCESS",
    label: "Overview",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    tags: ["Built for real-world projects"],
    title: "From raw land to clear decisions.",
  },
];
