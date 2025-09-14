import Faq from "../shared/faq";
import { THERAPIST_FAQ_ITEMS } from "@/lib/faq-data";

export default function LandingFaq() {
  return <Faq items={THERAPIST_FAQ_ITEMS} defaultOpenIndex={0} />;
}


