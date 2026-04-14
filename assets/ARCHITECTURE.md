# Frontend Architecture

## CSS layers

- `assets/css/app.css`: single entrypoint imported by `index.html`.
- `assets/css/tokens.css`: design tokens only (colors, fonts, spacing primitives).
- `assets/css/main.css`: legacy monolithic styles kept for compatibility.
- `assets/css/legacy/header.css`: legacy extracted styles for topbar/header domain.
- `assets/css/legacy/hero.css`: legacy extracted styles for hero domain.
- `assets/css/legacy/packs.css`: legacy extracted styles for packs domain.
- `assets/css/legacy/faq.css`: legacy extracted styles for faq domain.
- `assets/css/legacy/results-terminal.css`: legacy extracted styles for results terminal component.
- `assets/css/legacy/octave-script.css`: legacy extracted styles for octave script component.
- `assets/css/legacy/method-timeline.css`: legacy extracted styles for method timeline component.
- `assets/css/legacy/method-cols.css`: legacy extracted styles for method columns and bridge components.
- `assets/css/base/`: reset, global utility primitives.
- `assets/css/components/`: reusable component-level overrides.
- `assets/css/sections/`: section-specific styling.
- `assets/css/utilities/`: one-purpose helper classes.

## JS modules

- `assets/js/main.js`: bootstrap only.
- `assets/js/site-config.js`: contact/business configuration.
- `assets/js/site-init.js`: contact links/hrefs wiring.
- `assets/js/modules/core.js`: shared interactions and generic observers.
- `assets/js/modules/hero.js`: hero animation/interaction logic.
- `assets/js/modules/faq.js`: FAQ behaviors.
- `assets/js/modules/packs.js`: pack selector/ripple interactions.
- `assets/js/modules/counters.js`: count-up numbers.

## Checklist for new changes

1. Avoid new inline `style` attributes.
2. Add styles in the proper layer folder before touching `main.css`.
3. Keep `main.js` as bootstrap; put feature logic in `assets/js/modules/`.
4. Use `nl-*` BEM style for component/section classes.
5. After edits, run a quick grep for `style="` in `index.html`.

## Naming quick guide

- Prefix app-specific classes with `nl-` when creating new UI blocks.
- Use BEM-like structure for readability: `nl-block`, `nl-block__element`, `nl-block--modifier`.
- Keep utility classes short and explicit (`.u-hidden`, `.u-center`, `.u-gap-sm`) and avoid mixing responsibilities.
- Prefer semantic names tied to purpose (`.nl-pack-card`) over visual-only names (`.blue-box`).

## Ownership quick guide

- `assets/css/tokens.css`
	- Owns design primitives only (color, type, spacing tokens).
	- Must not contain component selectors.
- `assets/css/legacy/*.css`
	- Owns migrated blocks still extracted from the monolith, grouped by domain.
	- Transitional layer: move stable selectors to `base/components/sections` over time.
- `assets/css/base/`
	- Owns reset, base tags, and global primitives.
- `assets/css/components/`
	- Owns reusable UI components used in multiple sections.
- `assets/css/sections/`
	- Owns section-specific composition and layout.
- `assets/css/utilities/`
	- Owns one-purpose helper classes only.
- `assets/js/main.js`
	- Owns orchestration only; no feature logic.
- `assets/js/modules/*.js`
	- Owns per-feature behavior and DOM interactions.
- `assets/js/site-config.js`
	- Owns business/contact constants and URL builders.
- `assets/js/site-init.js`
	- Owns startup wiring based on config values.
