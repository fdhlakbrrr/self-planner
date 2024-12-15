import type { ReactNode } from "react";

export interface MainMenu {
  title: string;
  icon?: string | null;
  description: string;
  withQuestionTooltip: boolean;
  questionTooltipContent: string | ReactNode;
  onClick?: () => void;
}
