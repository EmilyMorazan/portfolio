import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { PinkCard } from "@/components/pink-card";
import { ScreenLayout } from "@/components/screen-layout";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ThreeDPortrait } from "@/components/three-d-portrait";
import { profile } from "@/data/portfolio";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScreenLayout contentContainerStyle={styles.scrollContent}>
      <PinkCard style={styles.heroCard}>
        <ThreeDPortrait source={profile.photo} />

        <ThemedText type="title" style={styles.title}>
          Hi, I&apos;m {profile.name}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          {profile.title}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={styles.tagline}>
          {profile.tagline}
        </ThemedText>

        <ThemedView style={styles.buttonRow}>
          <Link href="/projects" asChild>
            <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
              <ThemedView type="backgroundSelected" style={styles.primaryButton}>
                <ThemedText type="smallBold" themeColor="textInverse">
                  View Projects
                </ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
          <Link href="/contact" asChild>
            <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
              <ThemedView
                type="backgroundElement"
                style={[styles.secondaryButton, { borderColor: theme.border }]}>
                <ThemedText type="smallBold">Contact Me</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </ThemedView>
      </PinkCard>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  heroCard: {
    alignItems: "center",
    gap: Spacing.three,
    paddingVertical: Spacing.five,
    paddingHorizontal: Spacing.four,
    marginTop: Spacing.four,
  },
  title: {
    textAlign: "center",
    fontSize: 38,
    lineHeight: 44,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
  },
  tagline: {
    textAlign: "center",
    maxWidth: 440,
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: "row",
    gap: Spacing.three,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: Spacing.two,
  },
  button: {
    borderRadius: Radius.pill,
  },
  primaryButton: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
  },
  secondaryButton: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
    borderWidth: 1.5,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
