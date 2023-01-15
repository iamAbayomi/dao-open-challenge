import { useCheckboxGroup } from "@chakra-ui/react";
import { interestData } from "../../../../utils/dummydata";
import ButtonCheckbox from "../../../ButtonCheckbox";

const MostInterested = () => {
  const { getCheckboxProps } = useCheckboxGroup({ defaultValue: ["0"] });
  return (
    <>
      {interestData?.map((item: string, index: number) => (
        <ButtonCheckbox
          key={index}
          checkBoxProps={getCheckboxProps}
          buttonText={item}
        />
      ))}
    </>
  );
};

export default MostInterested;
