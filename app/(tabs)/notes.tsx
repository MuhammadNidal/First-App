import { Platform, SectionList, StyleSheet, Text, View } from "react-native";

export default function NotesScreen() {
  const DATA = [
    { title: "Work", data: ["Meeting notes", "Project plan", "Weekly summary"] },
    { title: "Personal", data: ["Shopping list", "Ideas", "Travel plans"] },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", marginTop: 60, paddingHorizontal: 15 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#2f95dc",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 8,
  },
  noteCard: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    fontSize: Platform.select({ ios: 18, android: 16 }),
    color: "#333",
  },
});
