/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @import "./abstracts/variables.scss";
const nextConfig = {
     sassOptions: {
         includePaths: [path.join(__dirname, 'styles')],
         prependData: `@use "./abstracts/placeholders.scss"; @import "./abstracts/variables.scss";`
       },
};

export default nextConfig;
