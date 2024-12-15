import { AppImage } from "../ui";
import { ReactNode } from "react";
import { TooltipWrapper } from "./tooltipWrapper";

interface Props {
  content: string | ReactNode;
}

export const QuestionTooltip = ({ content }: Props) => {
  return (
    <TooltipWrapper content={content}>
      <AppImage name="question-round" width={15} height={15} />
    </TooltipWrapper>
  );
};
