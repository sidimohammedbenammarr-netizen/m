// Static profile content shared between the homepage and the About page.
// Nothing here touches the database — it's just copy, safe to edit freely.

export const SKILLS = [
  {
    title: "Narrative pacing",
    description: "Structuring footage so every cut earns the next second of attention.",
  },
  {
    title: "Color grading",
    description: "Correcting and grading footage for a consistent, cinematic look.",
  },
  {
    title: "Sound design & mixing",
    description: "Cleaning dialogue and layering music, SFX and mix levels.",
  },
  {
    title: "Motion graphics",
    description: "Kinetic type, titles and simple animated graphics inside the edit.",
  },
  {
    title: "Multi-cam editing",
    description: "Syncing and cutting between multiple camera angles cleanly.",
  },
  {
    title: "Short-form hooks",
    description: "Front-loading reels and ads so viewers don't scroll past.",
  },
] as const;

export const SOFTWARE = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "Audition",
] as const;

export const PROJECT_TYPES = [
  "Instagram / TikTok reels",
  "Paid social & app-store ads",
  "YouTube long-form & vlogs",
  "Motion graphics & titles",
  "Brand & product videos",
] as const;

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "sidi.mohammed.benammarr@gmail.com",
    href: "mailto:sidi.mohammed.benammarr@gmail.com",
  },
  {
    label: "Instagram",
    value: "@_.sdimohammed.edit",
    href: "https://www.instagram.com/_.sdimohammed.edit/",
  },
  {
    label: "WhatsApp",
    value: "+213 562 88 35 89",
    href: "https://wa.me/213562883589",
  },
] as const;

export const QUICK_FACTS = [
  { label: "Experience", value: "Freelance video editor" },
  { label: "Specialized in", value: "Reels & motion graphics" },
  { label: "Available for", value: "Freelance projects" },
  { label: "Working", value: "Remote, worldwide" },
] as const;

export const QUOTE = {
  text: "A cut you don't notice is the best cut there is.",
  author: "Sidi Mohammed",
} as const;

export const PROCESS = [
  {
    step: "01",
    title: "Brief",
    description: "Understanding the goal, the platform and the audience before touching footage.",
  },
  {
    step: "02",
    title: "Review",
    description: "Logging the raw footage and picking the best takes and angles.",
  },
  {
    step: "03",
    title: "Edit",
    description: "Building the structure, pacing and first cut of the story.",
  },
  {
    step: "04",
    title: "Polish",
    description: "Color, sound design and motion graphics layered on top.",
  },
  {
    step: "05",
    title: "Deliver",
    description: "Export in the right formats, with a round of revisions if needed.",
  },
] as const;
