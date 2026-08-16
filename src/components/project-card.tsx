import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { PinkCard } from "@/components/pink-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Project } from "@/data/portfolio";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <PinkCard style={styles.card}>
      <ThemedText type="subtitle" style={styles.title}>
        {project.title}
      </ThemedText>

      <ThemedText type="small" style={styles.description}>
        {project.description}
      </ThemedText>

      <View style={styles.tagRow}>
        {project.tech.map((item) => (
          <ThemedView
            key={item}
            type="backgroundAccent"
            style={[styles.tag, { borderColor: theme.border }]}
          >
            <ThemedText type="code">{item}</ThemedText>
          </ThemedView>
        ))}
      </View>

      {(project.github || project.demo) && (
        <View style={styles.linkRow}>
          {project.github && (
            <ExternalLink href={project.github}>
              <ThemedText type="linkPrimary">GitHub</ThemedText>
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink href={project.demo}>
              <ThemedText type="linkPrimary">Live Demo</ThemedText>
            </ExternalLink>
          )}
        </View>
      )}
      {project.image ? (
        <Image
          source={project.image}
          style={[styles.image, { borderColor: theme.border }]}
          contentFit="cover"
        />
      ) : (
        <ThemedView type="backgroundAccent" style={styles.imagePlaceholder}>
          <ThemedText type="small" themeColor="textSecondary">
            Screenshot coming soon
          </ThemedText>
        </ThemedView>
      )}
    </PinkCard>
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
  imagePlaceholder: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  description: {
    lineHeight: 24,
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
  linkRow: {
    flexDirection: "row",
    gap: Spacing.four,
  },
});
