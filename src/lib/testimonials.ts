import { testimonialPageGallery } from "@/lib/wix-images";

export const porterGroupLogos = [
  {
    src: "/testimonials/porter-group/toa-petroleum.png",
    alt: "TOA Petroleum logo",
    width: 740,
    height: 516,
  },
  {
    src: "/testimonials/porter-group/toa-gas.png",
    alt: "TOA Gas logo",
    width: 225,
    height: 225,
  },
  {
    src: "/testimonials/porter-group/ride-rarotonga.png",
    alt: "Ride Rarotonga logo",
    width: 416,
    height: 416,
  },
  {
    src: "/testimonials/porter-group/rarotonga-laundromat.png",
    alt: "Rarotonga Laundromat logo",
    width: 1024,
    height: 464,
  },
  {
    src: "/testimonials/porter-group/blue-pacific-laundry.png",
    alt: "Blue Pacific Laundry Rarotonga logo",
    width: 404,
    height: 223,
  },
] as const;

const airRarotongaGallerySplitId = "dan-forsyth";

export function getTestimonialGalleryParts() {
  const splitIndex = testimonialPageGallery.findIndex(
    (item) => item.id === airRarotongaGallerySplitId,
  );

  if (splitIndex === -1) {
    return {
      beforeAirRarotonga: testimonialPageGallery,
      afterAirRarotonga: [] as (typeof testimonialPageGallery)[number][],
    };
  }

  return {
    beforeAirRarotonga: testimonialPageGallery.slice(0, splitIndex + 1),
    afterAirRarotonga: testimonialPageGallery.slice(splitIndex + 1),
  };
}
