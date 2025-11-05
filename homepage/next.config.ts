import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [new URL('https://code-adjacent.s3.eu-central-1.amazonaws.com/**')]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
