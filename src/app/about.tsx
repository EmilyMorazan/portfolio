import { StyleSheet, View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { PinkCard } from "@/components/pink-card";
import { ScreenLayout } from "@/components/screen-layout";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { education, profile, skills } from "@/data/portfolio";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function AboutScreen() {
  const theme = useTheme();

  return (
    <ScreenLayout>
      <PageHeader title="About" subtitle="A little about me and what I do." />

      <PinkCard>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Bio
        </ThemedText>
        <ThemedText type="small">{profile.bio}</ThemedText>
      </PinkCard>

      <PinkCard>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Skills
        </ThemedText>
        <View style={styles.tagRow}>
          {skills.map((skill) => (
            <ThemedView
              key={skill}
              type="backgroundAccent"
              style={[styles.tag, { borderColor: theme.border }]}
            >
              <ThemedText type="code">{skill}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </PinkCard>

      <PinkCard>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Education
        </ThemedText>
        <ThemedText type="smallBold">{education.school}</ThemedText>
        <ThemedText type="small">{education.degree1}</ThemedText>
        {/* just added */}
        <ThemedText type="smallBold">{education.mostRecent}</ThemedText>
        <ThemedText type="small">{education.degree2}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {education.period}
        </ThemedText>
      </PinkCard>

      <PinkCard soft>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Resume
        </ThemedText>
        <ExternalLink href={profile.resumeUrl}>
          <ThemedText type="linkPrimary">Download Resume</ThemedText>
        </ExternalLink>
      </PinkCard>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    lineHeight: 30,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.two,
  },
  tag: {
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
});
