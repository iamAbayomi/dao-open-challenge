import {
  chakra,
  Box,
  Text,
  useCheckbox,
  UseCheckboxProps,
  Button,
  useCheckboxGroup
} from "@chakra-ui/react";

interface Props {
  checkBoxProps: any;
  buttonText: string;
  onClick?: () => void;
}

function ButtonCheckbox({ checkBoxProps, buttonText, onClick }: Props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(checkBoxProps);
  return (
    <chakra.label {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Box
        margin={"0px 50px 0px 0px"}
        p={"10px 36px"}
        w={"100%"}
        maxWidth={"265px"}
        background={state.isChecked ? "#FFFFFF" : "#ECECEC"}
        boxSizing={"border-box"}
        borderRadius={"10px"}
        {...getCheckboxProps()}
      >
        <Text fontWeight={"400"} {...getLabelProps()} textAlign={"center"}>
          {" "}
          {buttonText}
        </Text>
      </Box>
    </chakra.label>
  );
}

export default ButtonCheckbox;
