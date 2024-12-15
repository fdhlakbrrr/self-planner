import { AppImage, Card, CardDescription } from "../ui";
import type { MainMenu } from "@/types";
import { QuestionTooltip } from "./questionTooltip";
import { Text } from "../ui";

interface Props {
  menuProps: MainMenu;
}

export const CardMenu = ({ menuProps }: Props) => {
  const {
    title,
    description,
    icon,
    withQuestionTooltip,
    questionTooltipContent,
    onClick,
  } = menuProps;

  return (
    <Card
      className="w-[300px] h-[80px] flex cursor-pointer shadow-sm transition-shadow hover:shadow-md relative"
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-3 w-full p-3 box-border">
        {icon && <AppImage name={icon} />}
        <div className="text-left">
          <Text>{title}</Text>
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
