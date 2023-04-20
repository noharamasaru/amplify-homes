/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import IPhoneSE1 from "./IPhoneSE1";
import { Collection } from "@aws-amplify/ui-react";
export default function IPhoneSE1Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="serch"
      itemsPerPage={6}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "IPhoneSE1Collection")}
      {...rest}
    >
      {(item, index) => (
        <IPhoneSE1
          home={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></IPhoneSE1>
      )}
    </Collection>
  );
}
