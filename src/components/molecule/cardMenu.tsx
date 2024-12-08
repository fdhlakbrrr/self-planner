import type { ReactNode } from "react";

import { AppImage } from "../ui/appImage";
import { QuestionTooltip } from "./questionTooltip";
import { Text } from "../ui";
import { Card, CardDescription } from "../ui/card";

interface Props {
  title: string;
  imageName?: string | null;
  description?: string;
  withQuestionTooltip?: boolean;
  questionTooltipContent?: string | ReactNode;
}

export const CardMenu = ({
  title,
  description,
  imageName,
  withQuestionTooltip,
  questionTooltipContent,
}: Props) => {
  return (
    <Card className="w-[300px] h-[80px] flex cursor-pointer shadow-sm transition-shadow hover:shadow-md relative">
      <div className="flex flex-row items-center gap-3 w-full p-3 box-border">
        {imageName && <AppImage name={imageName} />}
        <div className="text-left">
          {/* <div className="flex gap-2 items-center"> */}
          <Text>{title}</Text>
          {/* <QuestionTooltip /> */}
          {/* </div> */}
          <CardDescription className="w-[200px] truncate">
            {description}
          </CardDescription>
        </div>
      </div>

      {withQuestionTooltip && (
        <div className="absolute right-1 top-1">
          <QuestionTooltip content={questionTooltipContent} />
        </div>
      )}
    </Card>
  );
};
