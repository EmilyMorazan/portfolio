import { ScrollView, StyleSheet, ViewStyle } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

type ScreenLayoutProps = {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
};

export function ScreenLayout({ children, contentContainerStyle }: ScreenLayoutProps) {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
      <ThemedView style={styles.container}>{children}</ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    maxWidth: MaxContentWidth,
    marginHorizontal: "auto",
    width: "100%",
    padding: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.six,
    gap: Spacing.four,
  },
});
