# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Supabase backend setup

If you want to connect this app to Supabase, create a Supabase project and then:

1. Add the following environment variables in a `.env` file at the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

2. Use the Supabase client helper in `src/lib/supabaseClient.ts`.
3. Run the SQL in `supabase_schema.sql` inside the Supabase SQL editor.
4. Enable Auth and configure email/password or social login providers.

## How can I deploy this project?

This app is a static Vite + React site and can be hosted on several platforms.

### Recommended: Vercel
1. Push your repository to GitHub.
2. Go to https://vercel.com and import your repo.
3. Set these Environment Variables in Vercel:

```env
VITE_SUPABASE_URL=https://sxpdjrurfvieovpkklbx.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_WypHEgSW50in3HK1trHz8w_AlI81beV
```

4. Use these build settings:
- Build command: `npm run build`
- Output directory: `dist`

A `vercel.json` file is included to support SPA routing.

### Alternative: Supabase Static Hosting
1. Build locally: `npm run build`
2. Upload the `dist` folder to Supabase Static Hosting.
3. Add the same environment variables in Supabase project settings.

### Alternative: Netlify
1. Push your repo to GitHub.
2. Connect the repo in Netlify.
3. Set the same environment variables.
4. Build command: `npm run build`
5. Publish directory: `dist`

### Important
- Do not commit `.env` to GitHub.
- The frontend uses the public `anon` key only.
- Secure your Supabase database with Row Level Security (RLS).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
