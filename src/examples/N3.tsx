import { Button2 } from "../components/Button2";

export const N3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Button2> Tester2 </Button2>
      <Button2 colorVariant="primary" variant="rounded" size="md">
        Tester2
      </Button2>
      <Button2 colorVariant="success" variant="pill" size="lg">
        Tester2
      </Button2>
      <Button2 colorVariant="warning" variant="rounded" size="lg">
        Tester2
      </Button2>
      <Button2 colorVariant="danger" variant="pill" size="full">
        Tester2
      </Button2>
    </div>
  );
};
