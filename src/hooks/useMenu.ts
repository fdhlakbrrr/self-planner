"use client";

import type { MainMenu } from "@/types";
import { useMemo } from "react";
import { usePrefixNavigate } from "./usePrefixNavigate";

export const useMenu = () => {
  const { navigate } = usePrefixNavigate();

  const mainMenu: MainMenu[] = useMemo(() => {
    return [
      {
        title: "Money Plan",
        icon: "money",
        description: "Manage your money spent daily",
        withQuestionTooltip: true,
        questionTooltipContent: "Manage your money spent daily",
        onClick: () => navigate("/money"),
      },
    ];
  }, [navigate]);

  return { mainMenu };
};
