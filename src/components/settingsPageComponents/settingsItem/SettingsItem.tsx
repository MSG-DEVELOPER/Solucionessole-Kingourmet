//el settings item es el componente que renderiza cada item del grid de settings

import { SettingsItemCard, IconWrapper, ItemTitle, ItemDesc } from "./SettingsItem.styles";
import type { LucideIcon } from "lucide-react";


interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
  onClick: () => void;
}

function SettingsItem({ icon: Icon, title, desc, onClick }: Props) {
  
  return (
    <SettingsItemCard onClick={onClick}>
      <IconWrapper>
        <Icon size={32} strokeWidth={1.5} />
      </IconWrapper>

      <ItemTitle>{title}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </SettingsItemCard>
  );
}

export default SettingsItem;
