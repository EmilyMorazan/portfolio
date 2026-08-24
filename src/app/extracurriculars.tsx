import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { PageHeader } from "@/components/page-header";
import { PinkCard } from "@/components/pink-card";
import { ScreenLayout } from "@/components/screen-layout";
import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { extracurriculars } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

export default function ExtracurricularsScreen() {
  const theme = useTheme();

  return (
    <ScreenLayout>
      <PageHeader
        title="Extracurriculars"
        subtitle="Activities, leadership, and moments outside the classroom."
      />

      {extracurriculars.map((item) => (
        <PinkCard key={item.id} style={styles.card}>
          <Image
            source={item.image}
            style={[styles.image, { borderColor: theme.border }]}
            contentFit="cover"
          />
          <ThemedText type="subtitle" style={styles.title}>
            {item.title}
          </ThemedText>
          <ThemedText type="small" style={styles.description}>
            {item.description}
          </ThemedText>
        </PinkCard>
      ))}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.three,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
    borderWidth: 1.5,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  description: {
    lineHeight: 24,
  },
});
