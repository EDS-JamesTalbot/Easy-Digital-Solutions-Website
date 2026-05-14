export function servicePageProseClass(compactMobile: boolean) {
  return compactMobile
    ? "mt-5 space-y-4 text-base leading-relaxed sm:mt-8 sm:space-y-6 [&_p]:text-eds-charcoal [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-eds-charcoal sm:[&_h2]:mt-10 [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-eds-charcoal sm:[&_h3]:mt-8 [&_li]:text-eds-charcoal [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-eds-charcoal sm:[&_ul]:my-4 [&_p_a]:font-semibold [&_p_a]:text-eds-green [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-semibold [&_li_a]:text-eds-green [&_li_a]:underline-offset-4 hover:[&_li_a]:underline"
    : "mt-8 space-y-6 text-base leading-relaxed [&_p]:text-eds-charcoal [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-eds-charcoal [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-eds-charcoal [&_li]:text-eds-charcoal [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-eds-charcoal [&_p_a]:font-semibold [&_p_a]:text-eds-green [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-semibold [&_li_a]:text-eds-green [&_li_a]:underline-offset-4 hover:[&_li_a]:underline";
}

export function servicePageFooterCtaClass(compactMobile: boolean) {
  return compactMobile
    ? "mt-8 flex flex-col items-center gap-3 rounded-2xl border border-eds-green/25 bg-eds-green/5 p-5 text-center sm:mt-12 sm:gap-4 sm:p-8"
    : "mt-12 flex flex-col items-center gap-3 rounded-2xl border border-eds-green/25 bg-eds-green/5 p-6 text-center sm:gap-4 sm:p-8";
}

export const portfolioSectionClass =
  "mt-7 sm:mt-16 first:mt-7 first:sm:mt-16";

export const portfolioSectionDividerClass =
  "mt-8 border-t border-eds-charcoal/10 pt-7 sm:mt-16 sm:pt-16";

export const portfolioSectionHeadingClass =
  "font-display text-xl font-bold text-eds-charcoal sm:text-2xl";

export const portfolioSectionIntroClass =
  "mt-3 text-base leading-relaxed text-eds-charcoal sm:mt-4";

export const pageEndCtaClass =
  "mt-8 border-t border-eds-charcoal/10 pt-7 text-center sm:mt-16 sm:pt-12";
