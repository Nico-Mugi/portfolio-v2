import { LucideIcon } from "lucide-react";
import { ResumeLocale } from "~/config/data";

export type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | undefined;
};

export function buildContactItems(locale: ResumeLocale): ContactItem[] {
  return [
    {
      icon: locale.contact.email.icon,
      label: locale.ui.contactLabels.email,
      value: locale.contact.email.display,
      href: locale.contact.email.href,
    },
    {
      icon: locale.contact.phone.icon,
      label: locale.ui.contactLabels.phone,
      value: locale.contact.phone.display,
      href: locale.contact.phone.href,
    },
    {
      icon: locale.contact.address.icon,
      label: locale.ui.contactLabels.location,
      value: locale.contact.address.city,
      href: undefined,
    },
  ];
}
