"use client";

import { Container, Text } from "../ui";
import { CardMenu } from "./cardMenu";
import { useMenu } from "@/hooks";

interface Props {
  title: string;
}

export const MenuSection = ({ title }: Props) => {
  const { mainMenu } = useMenu();
  return (
    <Container>
      <Text variant="TITLE" textCase="CAPITALIZE">
        {title}
      </Text>

      {mainMenu.map((menu) => {
        return (
          <CardMenu
            key={menu.title}
            menuProps={{
              title: menu.title,
              description: menu.description,
              icon: menu.icon,
              withQuestionTooltip: menu.withQuestionTooltip,
              questionTooltipContent: menu.questionTooltipContent,
              onClick: menu.onClick,
            }}
          />
        );
      })}
    </Container>
  );
};
