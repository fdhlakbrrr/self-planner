import Image from "next/image";
import MoneyPlan from "@/assets/svg/money-plan-25.svg";
import QuestionRound from "@/assets/svg/questionround-25.svg";

interface Props {
  name: string;
  width?: number;
  height?: number;
}

export const AppImage = ({ name, width = 50, height = 50 }: Props) => {
  switch (name) {
    case "money":
      return (
        <Image alt="money plan" src={MoneyPlan} width={width} height={height} />
      );
    case "question-round":
      return <Image alt="Question mark" src={QuestionRound} width={width} height={height} />
  }
};
