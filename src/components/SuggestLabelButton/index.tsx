import * as React from "react";

import {
  Image,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { acceptIcon, rejectIcon } from "../../utilities/img";

import { Label } from "../../utilities/getSuggestedLabels";
import styles from "./styles";

interface Props {
  onAccept: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onReject: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  label: Label;
}

const SuggestLabelButton = (props: Props) => {
  const { onAccept, onReject, label } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAccept}>
        <Image source={acceptIcon} />
      </TouchableOpacity>
      <Text style={styles.labelText}>{label.name}</Text>
      <TouchableOpacity onPress={onReject}>
        <Image source={rejectIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SuggestLabelButton;
