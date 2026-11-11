# Ideal Beach Resort homepage observations

Source: `https://idealresort.com/`  
Preview: `/`

| Control / view | Layout | Trigger / position | Expected and observed result | Status | Evidence |
|---|---|---|---|---|---|
| Homepage sections and hero | Desktop 1280×1800 | Initial top; page has no scrollable content beyond viewport | Header, hero gallery, booking CTA, contact details and footer render. No video, accordion or additional content section on this page. | Pass | `source-desktop-top.png`, `preview-desktop-top.png` |
| Homepage sections and hero | Phone 390×844 | Initial top; page does not scroll | Header, hero gallery, booking CTA, contact details and footer render without horizontal overflow. | Pass | `source-mobile-top.png`, `preview-mobile-top.png` |
| Primary navigation | Desktop 1280×1800 | Navigation links at top | All three links show inline and preserve their source paths on the preview origin (`/mahabalipuram`, `/events-offers`, `/about-us`). Destination pages are not part of this single-page import. | Pass, destination pages not imported | `source-desktop-top.png`, `preview-desktop-top.png` |
| Phone navigation | Phone 390×844 | Tap hamburger; tap again to close | Source menu opens/closes with three links. Preview menu opens/closes, sets `aria-expanded`, displays all three links and closes on selection. | Pass | `source-mobile-menu-open.png`, `preview-mobile-menu-open.png` |
| Gallery next / previous | Desktop 1280×1800 | Tap arrow control | Source advances/returns through images. Preview next/previous updates image and selected dot; all four photos are local and load. | Pass | `source-carousel-next.png`, `preview-carousel-next.png` |
| Gallery dot navigation | Desktop 1280×1800 | Tap dot 4 | Source and preview select slide 4; preview image and selected-dot state update. | Pass | `/tmp/browser/idealresort/source/slide_4.png` (source capture), preview verification in `preview-carousel-next.png` and `verify.log` |
| Gallery auto-advance | Desktop 1280×1800 and phone 390×844 | Wait eight seconds | Source and preview both advance from slide 1 to slide 2. Preview respects reduced-motion preference by pausing auto-advance. | Pass | `preview-desktop-auto-advance.png`, `preview-mobile-auto-advance.png`; source timing in `/tmp/browser/idealresort/final/source_autoplay.log` |
| Gallery navigation | Phone 390×844 | Tap next arrow | Preview switches to slide 2, loaded image fits 390px viewport with no horizontal overflow. | Pass | `preview-mobile-carousel-next.png` |
| Booking CTA | Desktop and phone | Tap “Book Now” | Link preserves original SwiftBook booking URL in a new tab. Submission intentionally not attempted. | Pass, destination not submitted | `preview-desktop-top.png`; booking URL checked in `verify.log` |
| Main popup / next step | Desktop and phone | Not present on homepage | No main popup or popup next step observed. | Not applicable | Source and preview DOM reviewed |
| Media playback | Desktop and phone | Not present on homepage | No video or playable media observed. | Not applicable | Source and preview DOM reviewed |
| Scroll / pinned sections | Desktop and phone | Wheel down at page top | Source and preview do not scroll; all page content fits within document height for tested viewport. | Pass | `source-desktop-top.png`, `preview-desktop-top.png`, `source-mobile-after-wheel.png`, `preview-mobile-after-wheel.png` |

## Asset mapping

| Original source asset | Local file |
|---|---|
| `/public/images/full/chess-board.jpg` | `/site-assets/ideal-resort-slide-1.jpg` |
| `/public/images/full/093_M1A6281.jpg` | `/site-assets/ideal-resort-slide-2.jpg` |
| `/public/images/full/_M1A6391_-_Copy_59.jpg` | Existing imported image `/site-assets/93cd3f7520675cbe.jpg` |
| `/public/images/full/dance-slide.jpg?v=1` | `/site-assets/ideal-resort-slide-4.jpg` |
| `/public/images/full/logo.png` | Existing imported logo `/site-assets/80da6815665131eb.png` |

All four slideshow photos are present and load in the preview. No media fallback remains on the homepage. Three linked destination pages were not requested and remain unimported; internal links stay on the preview origin.
