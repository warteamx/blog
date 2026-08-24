# ⚡ warteamX Software Lab — Brand Guide Manifest

> **For AI agents & future contributors:** This file is the single source of truth for design tokens, component patterns, and styling decisions in this Astro blog. Always defer to this document before touching CSS or components.

---

## 🎨 Brand Identity

- **Name:** WarTeamX Software Lab
- **Vibe:** Bold dark-first design, extreme contrasts, blinding neon accents, glassmorphism
- **Personality:** Creative · Expressive · Experimental
- **Emojis:** Use functional emojis in nav labels, section headings, and eyebrows

---

## 🌗 Themes

Dark mode is the **default**. Light mode is a compatible flip.  
Theme is toggled via `data-theme="light"` on `<html>` and persisted to `localStorage("theme-preference")`.

### Dark (default `:root`)

| Token            | Value                    | Usage             |
| ---------------- | ------------------------ | ----------------- |
| `--bg-from`      | `#232526`                | Gradient start    |
| `--bg-to`        | `#414345`                | Gradient end      |
| `--surface`      | `rgba(0,0,0,0.6)`        | Container / panel |
| `--surface-card` | `rgba(255,255,255,0.05)` | Card background   |
| `--text`         | `#ffffff`                | Primary text      |
| `--text-muted`   | `#b3b3b3`                | Secondary text    |
| `--text-body`    | `#e0e0e0`                | Paragraph text    |
| `--border`       | `rgba(255,255,255,0.1)`  | Borders           |

### Light (`:root[data-theme="light"]`)

| Token            | Value                    | Usage             |
| ---------------- | ------------------------ | ----------------- |
| `--bg-from`      | `#F5F7FA`                | Gradient start    |
| `--bg-to`        | `#E4E8F0`                | Gradient end      |
| `--surface`      | `rgba(255,255,255,0.85)` | Container / panel |
| `--surface-card` | `rgba(0,0,0,0.03)`       | Card background   |
| `--text`         | `#111215`                | Primary text      |
| `--text-muted`   | `#60646c`                | Secondary text    |
| `--text-body`    | `#2d3139`                | Paragraph text    |
| `--border`       | `rgba(0,0,0,0.1)`        | Borders           |

---

## 💡 Neon Accents (stable — same in both themes)

| Name                  | Hex       | Token       | Usage                               |
| --------------------- | --------- | ----------- | ----------------------------------- |
| ⚡ Electric Blue      | `#7ECFFF` | `--blue`    | Primary actions, nav links, buttons |
| 💖 Neon Fuchsia       | `#F102CE` | `--fuchsia` | Eyebrows, borders, glow indicators  |
| ⚡ Cyber Lime         | `#39FF14` | `--lime`    | Highlights (use sparingly)          |
| 🔥 Radioactive Orange | `#FF5722` | `--orange`  | Warnings, call-to-actions           |
| 👾 Acid Purple        | `#A020F0` | `--purple`  | Tags, badges                        |

**Glows / tints:**

- `--blue-tint`: `rgba(126,207,255,0.1)` idle
- `--blue-tint-hover`: `rgba(126,207,255,0.2)` hover
- `--fuchsia-shadow`: `0 2px 8px 0 rgba(241,2,206,0.2)`
- `--fuchsia-shadow-hover`: `0 6px 20px 0 rgba(241,2,206,0.3)`

---

## 🔤 Typography

- **Font family:** `'Segoe UI', Arial, sans-serif`
- **Code font:** `'JetBrains Mono', ui-monospace, monospace`
- **Line height:** `1.65`

---

## 📐 Layout & Glassmorphism

- **Border radius:** `--radius: 1rem` (cards), `--radius-sm: 0.75rem` (smaller)
- **Glassmorphism:** `backdrop-filter: blur(10px)` on cards, header, hero panel
- **Shadows:** Use `--shadow` (composed of depth + fuchsia glow)
- **Transition:** `--transition: all 0.2s` globally applied on `*`

---

## 🎬 Micro-animations

Apply on hover for interactive elements:

- **Cards:** `translateY(-3px)` + elevated shadow + accent border
- **Nav links / tags:** `translateY(-1px)` + accent color + blue-tint background
- **Buttons:** `translateY(-2px)` + glow shadow
- **Brand mark:** `translateY(-2px) scale(1.05)` + fuchsia shadow
- **Theme toggle:** `translateY(-1px)` + fuchsia accent

---

## 🧩 Component Conventions

### ThemeToggle

- File: `src/components/ThemeToggle.astro`
- Uses `data-theme-toggle` button, `data-theme-icon`, `data-theme-label` spans
- Self-contained `<script is:inline>` handles click + localStorage
- Initial theme set in `BaseLayout.astro` `<head>` before paint

### Cards

- Class `.card` gets glassmorphism + hover lift
- Class `.card-body` for content padding
- Use `.eyebrow` (fuchsia, uppercase) for section labels

### Buttons

- `.button` — ghost pill button
- `.button-primary` — neon gradient (blue → fuchsia), white text

---

## 📁 File Structure

```
src/
  styles/
    global.css        ← All design tokens + base styles (DO NOT split)
  components/
    ThemeToggle.astro ← Self-contained toggle
    Header.astro      ← Brand mark, nav, toggle
    Hero.astro        ← Landing hero with neon CTA
    Footer.astro      ← Links + topics
  content/
    brand-guide.md    ← This file (agent manifest)
```

---

## ✅ Agent Checklist

When adding new UI components or pages:

1. Use CSS variables from `global.css` — never hardcode colors
2. Apply `backdrop-filter: blur(10px)` + `var(--surface)` for any card/panel
3. Add `transition: var(--transition)` for interactive elements
4. Use `border-radius: var(--radius)` on all containers
5. Use `--fuchsia` for eyebrows/section labels, `--blue` for primary actions
6. Add micro-animation on `:hover` (translateY + glow)
7. Test in both dark (default) and light themes
8. Use emojis in navigation labels and section headings
