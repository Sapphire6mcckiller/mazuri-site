import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Mazuri Cultural Designs in Dodoma, Tanzania. Call +255 673 585 034, email us, or visit our workshop in Ipagala near Upland Hotel. We'd love to hear from you!",
  keywords: ["contact Mazuri Cultural Designs", "furniture Dodoma contact", "interior designer Tanzania contact"],
  openGraph: {
    title: "Contact Us | Mazuri Cultural Designs",
    description: "Get in touch for your custom design needs. Located in Ipagala, Dodoma, Tanzania.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}