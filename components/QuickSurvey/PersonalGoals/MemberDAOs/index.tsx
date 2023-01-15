import { Box, useRadioGroup } from "@chakra-ui/react";
import { memberData } from "../../../../utils/dummydata";
import ButtonRadioButton from "../../../RadioButton/ButtonRadioButton";

const MemberDAOs = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({});
  return (
    <Box
      {...getRootProps()}
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
      gap={"50px"}
    >
      {memberData?.map((item: string, index: number) => (
        <ButtonRadioButton
          key={index}
          buttonText={item}
          {...getRadioProps({ value: item })}
        />
      ))}
    </Box>
  );
};

export default MemberDAOs;
