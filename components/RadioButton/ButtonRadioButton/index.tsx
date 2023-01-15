import { Box, useRadio, chakra, Text } from "@chakra-ui/react";

interface Props {
  radioButtonProps: any;
  buttonText: string;
  onClick?: () => void;
}

const ButtonRadioButton = (props: any) => {
  const { buttonText, ...radioButtonProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioButtonProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
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
};

export default ButtonRadioButton;
