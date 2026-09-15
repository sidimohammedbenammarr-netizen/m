"use client";

import { useState } from "react";
import type { Video } from "@/lib/types";
import VideoCard from "./VideoCard";
import VideoLightbox from "./VideoLightbox";

export default function VideoGrid({
  videos,
  numbered = false,
}: {
  videos: Video[];
  /** Show a 01 / 02 / 03 badge on each card (used on the homepage). */
  numbered?: boolean;
}) {
  const [active, setActive] = useState<Video | null>(null);

  if (videos.length === 0) {
    return (
      <p className="rounded-sm border border-dashed border-line py-16 text-center text-sm text-muted">
        No videos in this category yet.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <div key={video.id} className="animate-reveal relative">
            {numbered && (
              <span className="absolute left-3 top-3 z-10 font-heavy text-lg text-bronze2">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <VideoCard video={video} onPlay={setActive} index={i} />
          </div>
        ))}
      </div>

      {active && <VideoLightbox video={active} onClose={() => setActive(null)} />}
    </>
  );
}
