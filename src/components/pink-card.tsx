import { StyleSheet, View, type ViewProps } from 'react-native';

import { Radius, Shadows } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type PinkCardProps = ViewProps & {
  soft?: boolean;
};

export function PinkCard({ style, soft, children, ...rest }: PinkCardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        soft ? Shadows.soft : Shadows.card,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: theme.border,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1.5,
    borderRadius: Radius.lg,
    padding: 24,
    gap: 16,
  },
});
