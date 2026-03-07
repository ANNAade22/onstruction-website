# Cloudinary Setup Guide

This guide walks you through uploading images/videos to Cloudinary and using them for fast loading on your Next.js site.

---

## Step 1: Install Dependencies ✅

Already done. The project uses `next-cloudinary` and `cloudinary`.

---

## Step 2: Create a Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com) and sign up (free tier is enough to start).
2. From the **Dashboard**, note your:
   - **Cloud Name**
   - **API Key**
   - **API Secret** (Settings → Access Keys)

---

## Step 3: Add Environment Variables

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Cloudinary values:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. Restart the dev server: `npm run dev`

---

## Step 4: Upload Media to Cloudinary

### Option A: Cloudinary Media Library (recommended for bulk upload)

1. Log in to [Cloudinary Media Library](https://cloudinary.com/console/media_library).
2. Click **Upload**.
3. Select images/videos from your computer (e.g. from `public/projects/`).
4. Organize into a folder, e.g. `projects`.
5. After upload, each asset has a **Public ID** (e.g. `projects/meco-milling`).

### Option B: Upload Widget in your app

Add an upload page or admin section using `CldUploadWidget`:

```tsx
"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function UploadPage() {
  return (
    <CldUploadWidget
      uploadPreset="your_upload_preset"
      onSuccess={(result) => console.log(result)}
    >
      {({ open }) => (
        <button onClick={() => open()}>Upload Image</button>
      )}
    </CldUploadWidget>
  );
}
```

To use the upload widget:

1. In Cloudinary Dashboard → **Settings** → **Upload** → **Add upload preset**.
2. Create an **Unsigned** preset (for client uploads).
3. Use its name in `uploadPreset`.

---

## Step 5: Update Project Data to Use Cloudinary URLs

Once uploaded, update `lib/projects.ts` to use Cloudinary public IDs instead of local paths.

**Before (local):**
```ts
image: "/projects/MECO Milling.jpeg",
```

**After (Cloudinary):**
```ts
image: "projects/meco-milling",  // public ID
```

Then use `CldImage` in your components:

```tsx
import { CldImage } from "next-cloudinary";

<CldImage
  src={project.image}
  alt={project.title}
  width={600}
  height={400}
  crop="fill"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

Or with `fill` for responsive containers:

```tsx
<div className="relative h-72 w-full">
  <CldImage
    src={project.image}
    alt={project.title}
    fill
    crop="fill"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
```

---

## Step 6: Add Videos

For hero or project videos:

```tsx
import { CldVideoPlayer } from "next-cloudinary";

<CldVideoPlayer
  width="1920"
  height="1080"
  src="your-video-public-id"
  poster="your-poster-public-id"
  autoPlay
  loop
  muted
/>
```

Upload videos to Cloudinary the same way as images, then use their public ID in `CldVideoPlayer`.

---

## Step 7: Transformations (Optional)

Use Cloudinary transformations for automatic optimization:

```tsx
<CldImage
  src={project.image}
  alt={project.title}
  width={600}
  height={400}
  crop="fill"
  fetchPriority="high"
  format="auto"       // WebP/AVIF when supported
  quality="auto"
/>
```

---

## Quick Reference

| Task           | Component / Tool              |
|----------------|-------------------------------|
| Display image  | `CldImage` from next-cloudinary |
| Display video  | `CldVideoPlayer`              |
| Upload UI      | `CldUploadWidget`             |
| Server upload  | `cloudinary.v2.uploader`      |

---

## Files Changed

- `next.config.ts` – added `res.cloudinary.com` to `images.remotePatterns`
- `lib/cloudinary.ts` – config and helpers
- `.env.local.example` – env var template
