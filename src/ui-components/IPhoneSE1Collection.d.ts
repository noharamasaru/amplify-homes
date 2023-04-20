/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IPhoneSE1Props } from "./IPhoneSE1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IPhoneSE1CollectionOverridesProps = {
    IPhoneSE1Collection?: PrimitiveOverrideProps<CollectionProps>;
    IPhoneSE1?: IPhoneSE1Props;
} & EscapeHatchProps;
export declare type IPhoneSE1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => IPhoneSE1Props;
} & {
    overrides?: IPhoneSE1CollectionOverridesProps | undefined | null;
}>;
export default function IPhoneSE1Collection(props: IPhoneSE1CollectionProps): React.ReactElement;
