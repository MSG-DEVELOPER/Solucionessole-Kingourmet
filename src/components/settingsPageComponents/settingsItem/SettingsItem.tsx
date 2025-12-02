import { SettingsItemCard, IconWrapper, ItemTitle, ItemDesc } from "./SettingsItem.styles";
import type { LucideIcon } from "lucide-react";


interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function SettingsItem({ icon: Icon, title, desc }: Props) {
  function handleClick() {
    alert("Abrir: " + title);
  }

  return (
    <SettingsItemCard onClick={handleClick}>
      <IconWrapper>
        <Icon size={32} strokeWidth={1.5} />
      </IconWrapper>

      <ItemTitle>{title}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </SettingsItemCard>
  );
}

export default SettingsItem;
