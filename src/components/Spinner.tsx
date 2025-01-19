import { IconLoader2 } from "@tabler/icons-react";

interface Props {
  size?: number;
}

export const Spinner = ({ size }: Props) => {
  return <IconLoader2 size={size} className="animate-spin" />;
};
