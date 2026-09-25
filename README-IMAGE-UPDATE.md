# About page — image & icon update

6 files, all drop-in (overwrite existing paths, add the new ones):

- `src/components/sections/about/our-story.tsx`
- `src/components/sections/about/vision-mission.tsx`
- `src/components/sections/about/aims-objectives.tsx`
- `public/images/icons/vision-globe.jpg` (new)
- `public/images/icons/mission-seedling.jpg` (new)
- `public/images/community/aid-box-handoff.jpg` (new)

## What changed

**Vision & Mission** now uses the two icon images you sent — the globe-in-hands for Our Vision, the seedling-in-hands for Our Mission — in place of the plain line icons. Sized and cropped the same way you had them in your reference.

**Aims & Objectives** got the full "Our Work" page treatment: each of the 8 cards now leads with a real photo (pulled from what's already in your library) with the colored icon badge overlapping the bottom edge, same pattern as the program cards on /programs. I matched photos to each aim as closely as the library allows — a couple of pairings (Climate Action, Responsible Consumption) are closest-fit rather than exact, since there's no dedicated solar/energy or waste-management photo yet. Flag it if you want those swapped once you have more photos.

**Our Story** now uses the volunteer/box-handoff photo you sent, replacing the previous image.

## One thing worth knowing

The box-handoff photo has a noticeably more polished look than your other outreach shots — professional lighting, sharp logo reproduction. I asked before using it since it's now representing a specific real event on your site, and you confirmed it's from an actual distribution, just shot with better equipment. Wanted that on record in case anyone else on your team asks the same question later.

## Verified before sending

Clean lint, clean production build, zero console/network errors on `/about` in both light and dark mode.
