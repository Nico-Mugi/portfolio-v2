interface SideLabelProps {
  children: React.ReactNode;
}

const SideLabel = ({ children }: SideLabelProps) => (
  <h3 className="font-[Raleway,sans-serif] text-[11px] font-bold tracking-[0.16em] uppercase text-white/75 mb-2">
    {children}
  </h3>
);

interface SideSectionProps {
  title: string;
  items: React.ReactNode[];
}

export const SideSection = ({ title, items }: SideSectionProps) => (
  <div>
    <SideLabel>{title}</SideLabel>
    {items}
  </div>
);
