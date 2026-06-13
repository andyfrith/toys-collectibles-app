import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type StatPillProps = {
  label: string;
  value: string;
};

export function StatPill({ label, value }: StatPillProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      <ThemedText type="code" themeColor="textSecondary" selectable>
        {label}
      </ThemedText>
      <View>
        <ThemedText type="smallBold" selectable style={styles.value}>
          {value}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 104,
    flex: 1,
    borderRadius: 8,
    padding: 14,
    gap: 6,
  },
  value: {
    fontVariant: ['tabular-nums'],
  },
});
