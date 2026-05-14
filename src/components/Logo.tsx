import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-eds.png"
        alt="Easy Digital Solutions"
        width={400}
        height={180}
        className="h-[52px] w-auto max-w-[min(100%,340px)] object-contain object-left"
        priority
        sizes="(max-width: 640px) 220px, 340px"
      />
    </span>
  );
}
