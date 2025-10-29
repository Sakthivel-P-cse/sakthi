import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Set outputFileTracingRoot to the project directory so Next doesn't
  // mistakenly infer the workspace root when multiple lockfiles exist.
  outputFileTracingRoot: path.resolve(__dirname),
}

export default nextConfig
