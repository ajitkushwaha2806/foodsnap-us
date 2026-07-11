"use client";
import clsx from "clsx";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";
import Image from "next/image";

const galleryImages = [
  { image: "/assets/gallery/food_gallery_1.webp" },
  { image: "/assets/gallery/food_gallery_3.webp" },
  { image: "/assets/gallery/food_gallery_5.webp" },
  { image: "/assets/gallery/food_gallery_6.webp" },
  { image: "/assets/gallery/food_gallery_7.webp" },
  { image: "/assets/gallery/food_gallery_8.webp" },
  { image: "/assets/gallery/food_gallery_9.webp" },
  { image: "/assets/gallery/food_gallery_10.webp" },
  { image: "/assets/gallery/food_gallery_11.webp" },
  { image: "/assets/gallery/food_gallery_2.webp" },
  { image: "/assets/gallery/food_gallery_4.webp" },
];

function MasonryItem({ img, index }) {
  return (
    <motion.figure
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-black p-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "200px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="overflow-hidden rounded-[10px] w-full relative">
        <img
          src={img.image}
          alt="Food Image"
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </motion.figure>
  );
}

export default function RequiredDocumentsSection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-6 bg-zinc-50 dark:bg-[#0A0A0A]"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-emerald-600/30 fill-emerald-600/30 dark:stroke-emerald-400/30 dark:fill-emerald-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_40%)]",
        )}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          {/* <Title
            title={
              <span className="text-3xl md:text-5xl">
                Premium Food <br />{" "}
                <Highlighter action="highlight" color="#22c55e">
                  <span className="text-white relative z-10 px-2 py-1">
                    Image Gallery
                  </span>
                </Highlighter>
              </span>
            }
            description="Browse our extensive collection of high-quality, pre-approved food photos ready for download."
          /> */}
        </motion.div>

        <div
          className={[
            "[column-fill:_balance]",
            "columns-1 md:columns-2 lg:columns-3",
            "gap-4",
          ].join(" ")}
        >
          {galleryImages.map((img, index) => (
            <MasonryItem key={index} img={img} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
