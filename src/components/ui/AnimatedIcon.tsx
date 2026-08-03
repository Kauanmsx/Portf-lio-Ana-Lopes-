import type { LucideIcon } from "lucide-react";

type AnimatedIconProps = {
  icon: LucideIcon;
  label: string;
};

export function AnimatedIcon({ icon: Icon, label }: AnimatedIconProps) {
  return (
    <span className="animated-icon" aria-hidden="true" title={label}>
      <Icon size={28} strokeWidth={1.5} />
    </span>
  );
}
