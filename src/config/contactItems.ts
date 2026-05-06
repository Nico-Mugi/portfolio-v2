import { LucideIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { m } from "~/paraglide/messages";

export type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | undefined;
};

export const contactItems = [
  {
    icon: MapPinIcon,
    label: m.contact_label_email(),
    value: "contact@nicolas-thouvenin.dev",
    href: "mailto:contact@nicolas-thouvenin.dev",
  },
  {
    icon: PhoneIcon,
    label: m.contact_label_phone(),
    value: "+33 (0)6 62 24 96 58",
    href: "tel:+33662249658",
  },
  {
    icon: MapPinIcon,
    label: m.contact_label_location(),
    value: "54 Rue des Alpins, 74000 Annecy, France",
    href: undefined,
  },
] as ContactItem[];
