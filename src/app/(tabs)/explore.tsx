import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { mockAiSuggestions } from '@/data/catalog';
import { useTheme } from '@/hooks/use-theme';

export default function CaptureScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ title: 'Capture' }} />
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="code" themeColor="textSecondary" selectable>
            MOCKED AI FLOW / PHASE 1
          </ThemedText>
          <ThemedText type="title" selectable style={styles.title}>
            Review before saving
          </ThemedText>
          <ThemedText themeColor="textSecondary" selectable>
            The prototype assumes suggestions require explicit collector approval before they
            become trusted item metadata.
          </ThemedText>
        </View>

        <ThemedView type="backgroundElement" style={styles.capturePanel}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
            }}
            style={styles.previewImage}
            contentFit="cover"
          />
          <View style={styles.captureActions}>
            <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
              <ThemedText type="smallBold">Choose Photo</ThemedText>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <ThemedText type="smallBold" style={styles.primaryButtonText}>
                Run Analysis
              </ThemedText>
            </Pressable>
          </View>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.reviewPanel}>
          <View style={styles.reviewHeader}>
            <View>
              <ThemedText type="smallBold" selectable>
                Suggested Metadata
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary" selectable>
                {Math.round(mockAiSuggestions.confidence * 100)}% confidence
              </ThemedText>
            </View>
            <ThemedText type="code" style={styles.status} selectable>
              HUMAN REVIEW
            </ThemedText>
          </View>

          <Field label="Title" value={mockAiSuggestions.title} />
          <Field label="Category" value={mockAiSuggestions.category} />
          <Field label="Description" value={mockAiSuggestions.description} />

          <View style={styles.tagWrap}>
            {mockAiSuggestions.suggestedTags.map((tag) => (
              <ThemedView key={tag} style={styles.tag}>
                <ThemedText type="code" selectable>
                  {tag}
                </ThemedText>
              </ThemedView>
            ))}
          </View>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.reviewPanel}>
          <ThemedText type="smallBold" selectable>
            Follow-up Questions
          </ThemedText>
          {mockAiSuggestions.questions.map((question) => (
            <ThemedText key={question} type="small" themeColor="textSecondary" selectable>
              {question}
            </ThemedText>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <ThemedText type="code" themeColor="textSecondary" selectable>
        {label}
      </ThemedText>
      <ThemedText selectable>{value}</ThemedText>
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
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.two,
    paddingTop: Spacing.three,
  },
  title: {
    fontSize: 38,
    lineHeight: 42,
  },
  capturePanel: {
    borderRadius: 8,
    padding: Spacing.two,
    gap: Spacing.two,
  },
  previewImage: {
    width: '100%',
    aspectRatio: 16 / 10,
    borderRadius: 8,
    backgroundColor: '#d8d2c4',
  },
  captureActions: {
    flexDirection: 'row',
    gap: Spacing.two,
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#7f3f2f',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: '#fffdf8',
  },
  secondaryButton: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fffdf8',
  },
  pressed: {
    opacity: 0.75,
  },
  reviewPanel: {
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  status: {
    color: '#7f3f2f',
  },
  field: {
    gap: 6,
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
});
