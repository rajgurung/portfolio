# Release Notes - January 21, 2026

## UI Improvement

### Easy Reading Light Mode
Updated default light mode colors to use warm, paper-like tones for reduced eye strain.

**Backgrounds:** Pure white → warm paper tones
- `#FFFFFF` → `#FAF8F5` (main background)
- `#f7f7f7` → `#F5F2ED` (content containers)
- `#f9f9f9` → `#F0EDE8` (cards, sidebar)
- `#f5f5f5` → `#EBE8E3` (secondary elements)

**Text:** Harsh blacks → softer darks
- `#000`/`#111` → `#2D3436` (headings)
- `#444` → `#4A5568` (body text)
- `#666` → `#6B7280` (secondary text)
- `#aaa` → `#9CA3AF` (dates, captions)

**Links:** `#0066cc` → `#2563EB` (warmer blue)

---

## Files Changed
- `src/styelsheets/style.css` - Body, navbar backgrounds
- `src/styelsheets/blog.css` - Blog cards and detail page
- `src/styelsheets/projects.css` - Project page and cards
- `src/styelsheets/cv.css` - CV page sidebar and text
- `src/styelsheets/landing.css` - Landing page wrapper

Dark mode remains unchanged.
