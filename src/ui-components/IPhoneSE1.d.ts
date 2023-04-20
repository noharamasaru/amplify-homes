/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IPhoneSE1OverridesProps = {
    IPhoneSE1?: PrimitiveOverrideProps<ViewProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    birthday?: PrimitiveOverrideProps<TextProps>;
    "rufy 1"?: PrimitiveOverrideProps<ImageProps>;
    bounty?: PrimitiveOverrideProps<TextProps>;
    "\u540D\u524D"?: PrimitiveOverrideProps<TextProps>;
    "\u61F8\u8CDE\u91D1"?: PrimitiveOverrideProps<TextProps>;
    "\u8A95\u751F\u65E5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IPhoneSE1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: IPhoneSE1OverridesProps | undefined | null;
}>;
export default function IPhoneSE1(props: IPhoneSE1Props): React.ReactElement;
