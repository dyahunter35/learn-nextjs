import Page0 from "@/content/generated/backtracking/index";
import Page1 from "@/content/generated/backtracking/simulation";
import Page2 from "@/content/generated/backtracking/code";
import Page3 from "@/content/generated/caesar/index";
import Page4 from "@/content/generated/caesar/simulation";
import Page5 from "@/content/generated/caesar/code";
import Page6 from "@/content/generated/calculator/index";
import Page7 from "@/content/generated/calculator/simulation";
import Page8 from "@/content/generated/calculator/code";
import Page9 from "@/content/generated/converters/index";
import Page10 from "@/content/generated/converters/simulation";
import Page11 from "@/content/generated/converters/code";
import Page12 from "@/content/generated/divide-conquer/index";
import Page13 from "@/content/generated/divide-conquer/simulation";
import Page14 from "@/content/generated/divide-conquer/code";
import Page15 from "@/content/generated/dp/index";
import Page16 from "@/content/generated/dp/simulation";
import Page17 from "@/content/generated/dp/code";
import Page18 from "@/content/generated/graphs/index";
import Page19 from "@/content/generated/graphs/simulation";
import Page20 from "@/content/generated/graphs/code";
import Page21 from "@/content/generated/greedy/index";
import Page22 from "@/content/generated/greedy/simulation";
import Page23 from "@/content/generated/greedy/code";
import Page24 from "@/content/generated/hashing/index";
import Page25 from "@/content/generated/hashing/simulation";
import Page26 from "@/content/generated/hashing/code";
import Page27 from "@/content/generated/huffman/index";
import Page28 from "@/content/generated/huffman/simulation";
import Page29 from "@/content/generated/huffman/code";
import Page30 from "@/content/generated/linkedlist/index";
import Page31 from "@/content/generated/linkedlist/simulation";
import Page32 from "@/content/generated/linkedlist/code";
import Page33 from "@/content/generated/mst/index";
import Page34 from "@/content/generated/mst/simulation";
import Page35 from "@/content/generated/mst/code";
import Page36 from "@/content/generated/recursion/index";
import Page37 from "@/content/generated/recursion/simulation";
import Page38 from "@/content/generated/recursion/code";
import Page39 from "@/content/generated/searching/index";
import Page40 from "@/content/generated/searching/simulation";
import Page41 from "@/content/generated/searching/code";
import Page42 from "@/content/generated/shortest-path/index";
import Page43 from "@/content/generated/shortest-path/simulation";
import Page44 from "@/content/generated/shortest-path/code";
import Page45 from "@/content/generated/sorting/index";
import Page46 from "@/content/generated/sorting/simulation";
import Page47 from "@/content/generated/sorting/code";
import Page48 from "@/content/generated/stackqueue/index";
import Page49 from "@/content/generated/stackqueue/simulation";
import Page50 from "@/content/generated/stackqueue/code";
import Page51 from "@/content/generated/string-matching/index";
import Page52 from "@/content/generated/string-matching/simulation";
import Page53 from "@/content/generated/string-matching/code";
import Page54 from "@/content/generated/truetale/index";
import Page55 from "@/content/generated/truetale/simulation";
import Page56 from "@/content/generated/truetale/code";

const pages = {
  "backtracking:index": Page0,
  "backtracking:simulation": Page1,
  "backtracking:code": Page2,
  "caesar:index": Page3,
  "caesar:simulation": Page4,
  "caesar:code": Page5,
  "calculator:index": Page6,
  "calculator:simulation": Page7,
  "calculator:code": Page8,
  "converters:index": Page9,
  "converters:simulation": Page10,
  "converters:code": Page11,
  "divide-conquer:index": Page12,
  "divide-conquer:simulation": Page13,
  "divide-conquer:code": Page14,
  "dp:index": Page15,
  "dp:simulation": Page16,
  "dp:code": Page17,
  "graphs:index": Page18,
  "graphs:simulation": Page19,
  "graphs:code": Page20,
  "greedy:index": Page21,
  "greedy:simulation": Page22,
  "greedy:code": Page23,
  "hashing:index": Page24,
  "hashing:simulation": Page25,
  "hashing:code": Page26,
  "huffman:index": Page27,
  "huffman:simulation": Page28,
  "huffman:code": Page29,
  "linkedlist:index": Page30,
  "linkedlist:simulation": Page31,
  "linkedlist:code": Page32,
  "mst:index": Page33,
  "mst:simulation": Page34,
  "mst:code": Page35,
  "recursion:index": Page36,
  "recursion:simulation": Page37,
  "recursion:code": Page38,
  "searching:index": Page39,
  "searching:simulation": Page40,
  "searching:code": Page41,
  "shortest-path:index": Page42,
  "shortest-path:simulation": Page43,
  "shortest-path:code": Page44,
  "sorting:index": Page45,
  "sorting:simulation": Page46,
  "sorting:code": Page47,
  "stackqueue:index": Page48,
  "stackqueue:simulation": Page49,
  "stackqueue:code": Page50,
  "string-matching:index": Page51,
  "string-matching:simulation": Page52,
  "string-matching:code": Page53,
  "truetale:index": Page54,
  "truetale:simulation": Page55,
  "truetale:code": Page56,
};

export function getNativePage(slug: string, kind: string) {
  const Page = pages[`${slug}:${kind}` as keyof typeof pages];
  return Page ? <Page /> : null;
}
