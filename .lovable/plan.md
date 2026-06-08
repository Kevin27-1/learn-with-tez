## Fix hero portrait framing

The hero image uses `object-cover` inside a circular frame, which crops Tez's face out of view. I'll adjust the image positioning so the face is centered in the circle.

### Change
In `src/components/Hero.tsx`, update the portrait `<img>`:
- Add `object-top` (or a tuned `object-position: center 20%`) alongside `object-cover` so the face sits in the visible circle area instead of being cropped at the top.
- Optionally add a subtle `scale-110` if the portrait needs to be tighter on the face.

No other files change. Content, layout, and About section image remain untouched.