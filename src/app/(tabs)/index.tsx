import { Link, Stack } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ItemCard } from '@/components/catalog/item-card';
import { StatPill } from '@/components/catalog/stat-pill';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { catalogItems } from '@/data/catalog';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  const totalValue = catalogItems.reduce((sum, item) => {
    return sum + Number(item.estimatedValue.replace(/[^0-9.]/g, ''));
  }, 0);
  const reviewCount = catalogItems.filter((item) => item.aiAnalysis.status === 'needs_review').length;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ title: 'Archive' }} />
      <ThemedView style={styles.container}>
        <View style={styles.hero}>
          <ThemedText type="code" themeColor="textSecondary" selectable>
            PRIVATE COLLECTION / DEMO MODE
          </ThemedText>
          <ThemedText type="title" selectable style={styles.heroTitle}>
            Toys & Collectibles
          </ThemedText>
          <ThemedText themeColor="textSecondary" selectable style={styles.heroCopy}>
            A premium archive for objects with a story, using AI metadata as a careful assistant
            instead of an unquestioned source of truth.
          </ThemedText>
          <Link href="/explore" asChild>
            <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <ThemedText type="smallBold" style={styles.primaryButtonText}>
                Add Item
              </ThemedText>
            </Pressable>
          </Link>
        </View>

        <View style={styles.stats}>
          <StatPill label="Items" value={`${catalogItems.length}`} />
          <StatPill label="Tracked value" value={`$${totalValue}`} />
          <StatPill label="Needs review" value={`${reviewCount}`} />
        </View>

        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" selectable style={styles.sectionTitle}>
            Collection Shelf
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" selectable>
            Search and filters land here in Phase 4.
          </ThemedText>
        </View>

        <View style={styles.grid}>
          {catalogItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    padding: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
  },
  hero: {
    gap: Spacing.three,
    paddingTop: Spacing.three,
  },
  heroTitle: {
    fontSize: 44,
    lineHeight: 48,
  },
  heroCopy: {
    maxWidth: 620,
  },
  primaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#7f3f2f',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: '#fffdf8',
  },
  pressed: {
    opacity: 0.75,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  sectionHeader: {
    gap: Spacing.one,
  },
  sectionTitle: {
    fontSize: 28,
    lineHeight: 34,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
});
