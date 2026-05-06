interface ExperienceEntryProps {
  title?: string;
  company: string;
  period: string;
  bullets?: string[];
  children?: React.ReactNode;
}

export const ExperienceEntry = ({
  title,
  company,
  period,
  bullets,
  children,
}: ExperienceEntryProps) => (
  <div>
    <div className="flex justify-between items-start gap-3">
      <div>
        <p className="font-[Raleway,sans-serif] font-bold text-[13.5px] text-gray-900 m-0">
          {title ? title : company}
        </p>
        {!!title && (
          <p className="font-[Lato,sans-serif] text-[12px] text-[#5F7A56] italic mt-0.5 mb-0">
            {company}
          </p>
        )}
      </div>
      <span className="font-[Lato,sans-serif] text-[11px] text-gray-400 whitespace-nowrap italic text-right shrink-0 mt-0.5">
        {period}
      </span>
    </div>
    {bullets && bullets.length > 0 && (
      <ul className="pl-4 space-y-1 list-disc">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="font-[Lato,sans-serif] text-[12.5px] text-gray-600 leading-[1.55]"
          >
            {b}
          </li>
        ))}
      </ul>
    )}
    {children}
  </div>
);
