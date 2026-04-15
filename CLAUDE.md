# CLAUDE.md — t Sticht Wine House

## Project

Website voor wijnenhetsticht / 't Sticht Wine House. Een single-page React applicatie (one-page scroll).

## Tech stack

- **React 18** + **TypeScript**
- **Vite** als bundler
- **Tailwind CSS** voor styling
- **shadcn/ui** (Radix UI) voor componenten
- **React Router v6** (alleen `/` en `*` routes)
- **React Hook Form** + **Zod** voor formulieren
- **Vitest** + **@testing-library/react** voor tests

## Structuur

```
src/
  pages/          # Index.tsx (hoofdpagina), NotFound.tsx
  components/     # Hero, NavLink, OverOns, Wijnen, Partners, Contact, Footer
  components/ui/  # shadcn/ui componenten (niet handmatig aanpassen)
  hooks/
  lib/
public/
  Images/         # Afbeeldingen
content/          # Statische content
```

## Commando's

```bash
npm run dev       # Ontwikkelserver
npm run build     # Productie build
npm run lint      # ESLint
npm run test      # Vitest (eenmalig)
npm run test:watch
```

## Richtlijnen

# Wijnen Het Sticht — project context

## Stijl
- Klassiek, sober, typografie-gedreven. Referentie: keldertoppers.nl
- Palet: bordeauxrood #5A1A2B accent, crème #F5F1EA achtergrond, 
  antraciet #1F1F1F tekst
- Headings: serif (Cormorant Garamond / EB Garamond)
- Body: sans-serif (Inter)
- Royale witruimte, asymmetrische layouts

## Vermijd
- Gradients, glassmorphism, neon
- Emoji in headings/buttons
- Generieke "tech startup" hero met centered CTA
- Iconen voor elk concept
- Te veel kleur

## Tech
- Vite + React + TypeScript + Tailwind + shadcn/ui
- Image paths: /images/... (vanaf public/)
- Geen nieuwe dependencies zonder overleg

## Werkwijze
- Plan eerst, code daarna, wacht op akkoord bij grotere wijzigingen
- Sectie voor sectie, niet alles tegelijk
- Verzin geen content — vraag het bij ontbrekende info
