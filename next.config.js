/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
      },
    //   images:{
    //     domains:[
    //         'github.com',
    //         '127.0.0.1',
    //         '192.168.1.9:8000',
    //     ],
    //   },
}
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
