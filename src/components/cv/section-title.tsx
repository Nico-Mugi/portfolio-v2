interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <div className="flex flex-row gap-2 items-center">
    <h2 className="font-[Raleway,sans-serif] text-[13px] font-bold text-gray-700 uppercase whitespace-nowrap">
      {children}
    </h2>
    <div className="w-full h-0.5 bg-[#8FAF83]" />
  </div>
);
