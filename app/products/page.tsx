import type { Metadata } from "next";
import ProductsPageClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Three Ventures, One Vision",
  description:
    "Discover Digital Chautari's three ventures: Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home — Nepal's first at-home physiotherapy platform.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
