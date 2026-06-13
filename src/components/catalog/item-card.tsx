import { Image } from 'expo-image';
import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getPrimaryImage, type CollectionItem } from '@/data/catalog';

type ItemCardProps = {
  item: CollectionItem;
};

export function ItemCard({ item }: ItemCardProps) {
  const href = { pathname: '/item/[id]', params: { id: item.id } } as unknown as Href;
  const primaryImage = getPrimaryImage(item);

  return (
    <Link href={href} asChild>
      <Pressable style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
        <ThemedView type="backgroundElement" style={styles.card}>
          <Image
            source={{ uri: primaryImage.uri }}
            accessibilityLabel={primaryImage.alt}
            style={styles.image}
            contentFit="cover"
          />
          <View style={styles.content}>
            <View style={styles.row}>
              <ThemedText type="smallBold" selectable style={styles.title}>
                {item.title}
              </ThemedText>
              <ThemedText type="code" selectable style={styles.value}>
                {item.estimatedValue}
              </ThemedText>
            </View>
            <ThemedText type="small" themeColor="textSecondary" selectable>
              {item.category} / {item.collection}
            </ThemedText>
            <View style={styles.swatches}>
              {item.colors.map((color) => (
                <View key={color} style={[styles.swatch, { backgroundColor: color }]} />
              ))}
            </View>
          </View>
        </ThemedView>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    minWidth: 156,
  },
  pressed: {
    opacity: 0.78,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(120, 105, 82, 0.16)',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#d8d2c4',
  },
  content: {
    padding: 12,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    flex: 1,
  },
  value: {
    color: '#7f3f2f',
    fontVariant: ['tabular-nums'],
  },
  swatches: {
    flexDirection: 'row',
    gap: 6,
  },
  swatch: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
});
