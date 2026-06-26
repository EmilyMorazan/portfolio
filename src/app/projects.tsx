import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
// import styles from "expo-router/build/modal/web/modalStyles";

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.root}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Projects</ThemedText>
        <ThemedText type="small">Here are a few projects I built:</ThemedText>

        <ThemedView type="backgroundElement" style={styles.projectCard}>
          <ThemedText type="subtitle">
            Project One: Network Traffic Analyzer & Firewall
          </ThemedText>
          <ThemedText type="small">
            Create a Network Traffic Analyzer & Firewall Web Application to
            monitor and display real-time network activity, including traffic,
            IP address information, and network speed. In this project, the
            firewall would control access and security by implementing
            connection-blocking rules.
          </ThemedText>
          {/* need to add more projects here */}
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.projectCard}>
          <ThemedText type="subtitle">
            Project Two: Gamified Habit Tracker for ADHD
          </ThemedText>
          <ThemedText type="small">
            Gamified Habit Tracker for ADHD Brief Description: A gamified habit
            tracker designed specifically for individuals with ADHD. The app
            incorporates game-like elements, such as rewards, challenges, and
            progress tracking, to help users stay motivated and build positive
            habits. It provides a user-friendly interface and personalized
            reminders to support habit formation and improve focus and
            productivity.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    maxWidth: MaxContentWidth,
    marginHorizontal: "auto",
    padding: Spacing.four,
    gap: Spacing.four,
  },
  projectCard: {
    padding: Spacing.four,
    borderRadius: Spacing.four,
  },
});
