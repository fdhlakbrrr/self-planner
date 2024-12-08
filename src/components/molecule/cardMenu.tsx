import { Card, CardDescription } from "../ui/card";
import { AppImage } from "../ui/appImage";

interface Props {
  title: string;
  imageName?: string | null;
  description?: string;
}

export const CardMenu = ({ title, description, imageName }: Props) => {
  return (
    <Card className="w-[300px] h-[80px] flex cursor-pointer shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-row items-center gap-3 w-full p-3">
        {imageName && <AppImage name={imageName} width={50} height={50} />}
        <div>
          {title}
          <CardDescription className="w-[200px] truncate">
            {description}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};
