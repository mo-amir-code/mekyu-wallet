import { cn } from "@/lib/utils";
import { TypographyType } from "./TypographyH1";

export default function TypographySmall({
  content,
  className,
}: TypographyType) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {content}
    </small>
  );
}
