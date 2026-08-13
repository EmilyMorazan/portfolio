import { StyleSheet } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { PinkCard } from "@/components/pink-card";
import { ScreenLayout } from "@/components/screen-layout";
import { ThemedText } from "@/components/themed-text";
import { profile } from "@/data/portfolio";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/yourusername", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: profile.linkedin },
];

export default function ContactScreen() {
  return (
    <ScreenLayout>
      <PageHeader
        title="Contact"
        subtitle="Let's connect — I'd love to hear from you."
      />

      {contactLinks.map((link) => (
        <PinkCard key={link.label} soft style={styles.card}>
          <ThemedText type="smallBold">{link.label}</ThemedText>
          <ExternalLink href={link.href}>
            <ThemedText type="linkPrimary">{link.value}</ThemedText>
          </ExternalLink>
        </PinkCard>
      ))}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8,
  },
});
