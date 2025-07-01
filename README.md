# Linklist

This project is a [Next.js](https://nextjs.org/) application that stores data in [Supabase](https://supabase.com/).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deploying to Vercel

Follow these steps to deploy your own instance using this repository:

1. **Create a Supabase project** and define the following tables:
   - `pages` – columns: `id`, `uri`, `owner`, `displayName`, `location`, `bio`, `bgType`, `bgColor`, `bgImage`, `buttons` (jsonb), `links` (jsonb), `created_at`, `updated_at`.
   - `events` – columns: `id`, `type`, `page`, `uri`, `created_at`.
   Supabase automatically creates a `users` table for authentication when using the adapter.
2. **Fork or clone** this repository on GitHub.
3. **Login to Vercel** and choose **New Project**.
4. Import your forked GitHub repository by pasting its URL.
5. In the Vercel project settings, add these environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `S3_ACCESS_KEY`
   - `S3_SECRET_ACCESS_KEY`
   - `BUCKET_NAME`
   - `URL` – the Vercel URL of your deployment (e.g. `https://your-app.vercel.app`)
   - `SECRET` – a random string used by NextAuth
6. Click **Deploy** and wait for the build to finish.

After deployment, your application will be available on the provided Vercel URL.
