# Linklist

This project is a [Next.js](https://nextjs.org/) application that stores data in [Supabase](https://supabase.com/).

## Getting Started

Follow these steps to run the project locally.

1. **Clone the repository** and enter the project directory.

   ```bash
   git clone https://github.com/your-user/linklist.git
   cd linklist
   ```

2. **Install dependencies** (Node.js 18 or later is recommended).

   ```bash
   npm install
   ```

3. **Create a `.env.local` file** in the project root and define the environment variables below:

   ```bash
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   S3_ACCESS_KEY=<your-s3-access-key>
   S3_SECRET_ACCESS_KEY=<your-s3-secret-access-key>
   BUCKET_NAME=<your-bucket-name>
   URL=http://localhost:3000
   SECRET=<any-random-string>
   ```

   - `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` can be found in the **API** settings of your Supabase project.
   - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are obtained from OAuth credentials in the Google Cloud Console.
   - `S3_ACCESS_KEY`, `S3_SECRET_ACCESS_KEY` and `BUCKET_NAME` come from an AWS account with S3 access.
   - `URL` should match your Vercel deployment URL in production (use `http://localhost:3000` locally).
   - `SECRET` is an arbitrary string used by NextAuth.

4. **Start the development server**.

   ```bash
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

## Database Schema Details

Below is a reference of the tables used by this project and the main properties of each column.

### pages
- `id` **uuid** – primary key. Not nullable.
- `uri` **text** – unique identifier of a page. Not nullable and unique.
- `owner` **text** – email of the page owner. Not nullable.
- `displayName` **text** – nullable.
- `location` **text** – nullable.
- `bio` **text** – nullable.
- `bgType` **text** – nullable.
- `bgColor` **text** – nullable.
- `bgImage` **text** – nullable.
- `buttons` **jsonb** – nullable object storing button data.
- `links` **jsonb[]** – nullable array of link objects.
- `created_at` **timestamp with time zone** – defaults to `now()`.
- `updated_at` **timestamp with time zone** – defaults to `now()`.

### events
- `id` **uuid** – primary key. Not nullable.
- `type` **text** – event type such as `view` or `click`. Not nullable.
- `page` **text** – the related page `uri`. Not nullable.
- `uri` **text** – the URL that triggered the event. Not nullable.
- `created_at` **timestamp with time zone** – defaults to `now()`.

### users
- `id` **uuid** – primary key. Not nullable.
- `name` **text** – nullable.
- `email` **text** – unique, nullable.
- `emailVerified` **timestamp with time zone** – nullable.
- `image` **text** – nullable.

### accounts
- `id` **uuid** – primary key. Not nullable.
- `provider` **text** – not nullable.
- `providerAccountId` **text** – not nullable.
- `type` **text** – not nullable.
- `userId` **uuid** – references `users.id`. Nullable.
- other OAuth token fields – nullable.
- unique constraint on `(provider, providerAccountId)`.

### sessions
- `id` **uuid** – primary key. Not nullable.
- `sessionToken` **text** – unique, not nullable.
- `userId` **uuid** – references `users.id`. Nullable.
- `expires` **timestamp with time zone** – not nullable.

### verification_tokens
- `token` **text** – primary key. Unique.
- `identifier` **text** – nullable.
- `expires` **timestamp with time zone** – not nullable.

