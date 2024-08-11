import { Button, ButtonProps, Stack, Text } from "libreria01";

const variants: ButtonProps["variant"][] = ["default", "primary", "success", "danger", "warning", "ghost"];

const rounded: ButtonProps["rounded"][] = ["basic", "sm", "md", "lg", "full"];

const sizes: ButtonProps["size"][] = ["default", "sm", "md", "lg", "full"];

export const N4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Text as="h2" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Variants
      </Text>
      <Stack>
        {variants.map((x) => (
          <Button key={x} variant={x}>
            {x}
          </Button>
        ))}
      </Stack>
      <Text as="h2" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Outlines
      </Text>
      <Stack>
        {variants.map((x) => (
          <Button key={x} outline variant={x}>
            {x}
          </Button>
        ))}
      </Stack>
      <Text as="h2" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Outlines
      </Text>
      <Stack>
        {rounded.map((x) => (
          <Button key={x} variant="success" rounded={x}>
            {x}
          </Button>
        ))}
      </Stack>
      <Text as="h2" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Outlines
      </Text>
      <Stack>
        {sizes.map((x) => (
          <Button key={x} variant="primary" size={x}>
            {x}
          </Button>
        ))}
      </Stack>
    </div>
  );
};
