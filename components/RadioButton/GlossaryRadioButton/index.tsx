import { Box, Text, useRadio, chakra, Link } from "@chakra-ui/react";

const GlossaryComponent = (props: any) => {
  const { text, ...radioButtonProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioButtonProps);

  return (
    <chakra.label {...htmlProps} className={"pointer"}>
      <input {...getInputProps()} hidden />
      {/* <Link href={`#${text}`}> */}
      <Box
        background={state?.isChecked ? "#C2EC5B" : "white"}
        p={"10px 20px"}
        borderRadius={"10px"}
        maxWidth={"max-content"}
        gridTemplateColumns={""}
        border={"1px solid white"}
        {...getCheckboxProps()}
      >
        <Text
          fontStyle={"bold"}
          fontWeight={"700"}
          fontSize={"18px"}
          color={"black"}
          {...getLabelProps()}
        >
          {text}
        </Text>
      </Box>
      {/* </Link> */}
    </chakra.label>
  );
};

export default GlossaryComponent;
