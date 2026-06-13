import { Image } from 'expo-image';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { StatPill } from '@/components/catalog/stat-pill';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { catalogItems, findCatalogItem, getAiHighlights, getPrimaryImage } from '@/data/catalog';
import { useTheme } from '@/hooks/use-theme';

export function generateStaticParams() {
  return catalogItems.map((item) => ({ id: item.id }));
}

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = findCatalogItem(id);
  const theme = useTheme();
  const primaryImage = item ? getPrimaryImage(item) : undefined;

  if (!item) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scrollView, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.emptyContainer}>
        <Stack.Screen options={{ title: 'Item not found' }} />
        <ThemedText type="subtitle">Item not found</ThemedText>
        <Link href="/" asChild>
          <Pressable style={styles.primaryButton}>
            <ThemedText type="smallBold" style={styles.primaryButtonText}>
              Return to catalog
            </ThemedText>
          </Pressable>
        </Link>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ title: item.title }} />
      <ThemedView style={styles.container}>
        <Image
          source={{ uri: primaryImage?.uri }}
          accessibilityLabel={primaryImage?.alt}
          style={styles.heroImage}
          contentFit="cover"
        />

        <View style={styles.header}>
          <ThemedText type="title" selectable style={styles.title}>
            {item.title}
          </ThemedText>
          <ThemedText themeColor="textSecondary" selectable>
            {item.category} / {item.collection} / {item.era}
          </ThemedText>
        </View>

        <View style={styles.stats}>
          <StatPill label="Condition" value={item.condition} />
          <StatPill label="Value" value={item.estimatedValue} />
          <StatPill label="AI confidence" value={`${Math.round(item.aiAnalysis.confidence * 100)}%`} />
        </View>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="smallBold">Core Metadata</ThemedText>
          <DetailRow label="Maker" value={item.maker} />
          <DetailRow label="Brand" value={item.brand} />
          <DetailRow label="Year / era" value={[item.year, item.era].filter(Boolean).join(' / ')} />
          <DetailRow label="Acquired" value={`${item.acquisitionDate} / ${item.acquisitionSource}`} />
          <DetailRow label="Storage" value={item.storageLocation} />
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="smallBold">Collection Story</ThemedText>
          <ThemedText selectable>{item.story}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary" selectable>
            {item.notes}
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="smallBold">AI Observations</ThemedText>
          {getAiHighlights(item).map((highlight) => (
            <ThemedText key={highlight} type="small" selectable themeColor="textSecondary">
              {highlight}
            </ThemedText>
          ))}
        </ThemedView>

        <View style={styles.tagWrap}>
          {item.tags.map((tag) => (
            <ThemedView key={tag} type="backgroundElement" style={styles.tag}>
              <ThemedText type="code" selectable>
                {tag}
              </ThemedText>
            </ThemedView>
          ))}
        </View>
      </ThemedView>
    </ScrollView>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <ThemedText type="code" themeColor="textSecondary" selectable style={styles.detailLabel}>
        {label}
      </ThemedText>
      <ThemedText type="small" selectable style={styles.detailValue}>
        {value}
      </ThemedText>
    </View>
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
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.four,
    gap: Spacing.three,
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.three,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
    backgroundColor: '#d8d2c4',
  },
  header: {
    gap: Spacing.two,
  },
  title: {
    fontSize: 38,
    lineHeight: 42,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  section: {
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  detailRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  detailLabel: {
    width: 90,
  },
  detailValue: {
    flex: 1,
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#7f3f2f',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: '#fffdf8',
  },
});
