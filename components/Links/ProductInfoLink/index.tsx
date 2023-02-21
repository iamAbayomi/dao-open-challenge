import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { productDocumentationLink } from "../../../utils/constants";

interface Props {
  children: ReactNode;
}

const ProductInfoLink = ({ children }: Props) => {
  return (
    <Link href={productDocumentationLink} target={"_blank"}>
      {children}
    </Link>
  );
};

export default ProductInfoLink;
