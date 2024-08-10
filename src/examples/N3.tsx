import { Button2 } from "../components/Button2";

export const N3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Button2> Tester2 </Button2>
      <Button2 colorVariant="secondary"> Tester2 </Button2>
      <Button2 colorVariant="success"> Tester2 </Button2>
      <Button2 colorVariant="warning"> Tester2 </Button2>
      <Button2 colorVariant="danger"> Tester2 </Button2>
    </div>
  );
};
