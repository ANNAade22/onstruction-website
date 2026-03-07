/**
 * Cloudinary configuration and helpers for Next.js.
 * Used for optimized images/videos and optional server-side upload.
 */

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ?? "",
  apiSecret: process.env.CLOUDINARY_API_SECRET ?? "",
} as const;

/** Base URL for Cloudinary delivery (images/videos) */
export function getCloudinaryUrl(publicId: string, options?: { type?: "image" | "video"; transformations?: string }) {
  const cloudName = cloudinaryConfig.cloudName;
  if (!cloudName) return "";
  const resource = options?.type === "video" ? "video" : "image";
  const trans = options?.transformations ? `/upload/${options.transformations}` : "/upload";
  return `https://res.cloudinary.com/${cloudName}/${resource}${trans}/${publicId}`;
}

/** Check if Cloudinary is configured (for conditional features) */
export function isCloudinaryConfigured(): boolean {
  return Boolean(cloudinaryConfig.cloudName);
}
