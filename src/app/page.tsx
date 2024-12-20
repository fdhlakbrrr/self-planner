import { Container } from "@/components/ui";
import { HeadingText } from "@/components/molecule";
import { MenuSection } from "@/components/molecule";
// import Login from "@/components/Auth/Login";
// import { Text } from "@/components/ui/text";

export default function Home() {
  console.log("test")
  return (
    <Container customClass="p-0" align="CENTER">
      <Container
        direction="COL"
        align="CENTER"
        customClass="w-3/4 h-full gap-5 xl:gap-10 2xl:gap-20"
      >
        <HeadingText
          title="Welcome back, dude"
          subtitle="lets plan your daily routine, money spent, goals, and many more"
          contentAlign="START"
          textAlign="LEFT"
        />
        <MenuSection title="Main menu" />
      </Container>
    </Container>
  );
}
