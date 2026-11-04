import type { NextConfig } from "next";

const slugs = [
  "backtracking", "caesar", "calculator", "converters", "divide-conquer",
  "dp", "graphs", "greedy", "hashing", "huffman", "linkedlist", "mst",
  "recursion", "searching", "shortest-path", "sorting", "stackqueue",
  "string-matching", "truetale",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...slugs.flatMap((slug) => [
        { source: `/algorithms/${slug}/index.html`, destination: `/algorithms/${slug}`, permanent: true },
        { source: `/algorithms/${slug}/simulation.html`, destination: `/algorithms/${slug}/simulation`, permanent: true },
        { source: `/algorithms/${slug}/code.html`, destination: `/algorithms/${slug}/code`, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
