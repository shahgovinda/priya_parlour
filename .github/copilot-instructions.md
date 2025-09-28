# Copilot Instructions for go_salon

## Project Overview
- This is a Next.js 13+ app using the `/app` directory structure, bootstrapped with `create-next-app`.
- The project is organized by feature: each route (e.g., `/about`, `/blog`, `/services`) has its own folder under `app/` with a `page.tsx` file.
- UI components are in `components/`, with further sub-organization for homepage sections, UI primitives, and animation utilities.
- Data is colocated in `data/` (e.g., `services.ts`), and utility functions are in `lib/`.

## Key Patterns & Conventions
- **Component Structure:**
  - Use functional React components with TypeScript.
  - Prefer colocating related components in feature or UI folders (see `components/homepage/`, `components/ui/`).
  - Animation and visual effects are in `components/animate-ui/` and `components/magicui/`.
- **Styling:**
  - Use global styles in `app/globals.css`.
  - Component-level styles are handled via CSS modules or inline styles.
- **Routing:**
  - Each folder in `app/` with a `page.tsx` is a route.
  - Nested routes are supported by subfolders.
- **Data:**
  - Static data is imported from `data/`.
  - No backend API integration is present by default.
- **Utilities:**
  - Common helpers are in `lib/utils.ts`.
  - Custom hooks are in `hooks/` (e.g., `use-outside-click.tsx`).

## Developer Workflows
- **Development:**
  - Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
  - Hot reload is enabled for all files in `app/` and `components/`.
- **Build:**
  - Run `npm run build` to create a production build.
- **Linting:**
  - Lint with `npm run lint` (uses ESLint, see `eslint.config.mjs`).
- **Type Checking:**
  - TypeScript is enforced via `tsconfig.json`.
- **Deployment:**
  - Designed for Vercel, but can be deployed anywhere supporting Next.js 13+.

## Examples
- To add a new route: create a folder under `app/` and add a `page.tsx`.
- To add a new UI component: add to `components/ui/` and import where needed.
- To update the service menu: edit `data/services.ts` and `components/homepage/ServiceMenu.tsx`.

## Special Notes
- No custom server or API routes are present.
- All images and static assets are in `public/`.
- Follow the existing folder structure for new features.

---

For more details, see `README.md` and explore the `components/` and `app/` directories for examples of project patterns.
