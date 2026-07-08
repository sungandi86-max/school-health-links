# Copilot Instructions

This repository is School Health Links, a simple personal/work link hub for a school health teacher's tools, records, training links, examples, ebook, field notes, and contact.

Before customizing, ask the user for:

- Public service name and school or organization label
- Intro sentence
- URLs for the six core linktree items: tool collection, training application, online health office example, ebook, kiosk/self-care station review, and contact
- Whether unknown URLs should remain as `#`
- Preferred color mood while keeping the warm beige card style
- Preferred icons from `public/icons`

Do not add private student health data, staff personal data, private credentials, API keys, auth code, database code, or internal URLs that are not approved for public use. Keep the experience as a simple six-item linktree, not a full work portal.

Prefer editing `src/config/linktree.ts` and `src/config/theme.ts`. Also check `src/components/LinkTree.tsx` for hardcoded labels and `src/app/layout.tsx` for metadata. Run `npm run build` after changes.
