import { permanentRedirect } from "next/navigation";

/** Old share URL; 308 to /emarama-bci (no site chrome on either path). */
export default function LegacyEmaramaPathRedirect() {
  permanentRedirect("/emarama-bci");
}
