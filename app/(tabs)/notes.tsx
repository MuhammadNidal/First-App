import { Formik } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";

// export default function NotesScreen() {
//   const DATA = [
//     { title: "Work", data: ["Meeting notes", "Project plan", "Weekly summary"] },
//     { title: "Personal", data: ["Shopping list", "Ideas", "Travel plans"] },
//   ];

//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => (
//           <View style={styles.noteCard}>
//             <Text style={styles.item}>{item}</Text>
//           </View>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <Text style={styles.header}>{title}</Text>
//         )}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f9f9f9", marginTop: 60, paddingHorizontal: 15 },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     backgroundColor: "#2f95dc",
//     color: "white",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     marginTop: 15,
//     marginBottom: 8,
//   },
//   noteCard: {
//     backgroundColor: "white",
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   item: {
//     fontSize: Platform.select({ ios: 18, android: 16 }),
//     color: "#333",
//   },
// });
// ✅ Validation Schema with Yup
// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email:  Yup.string().email("Invalid email").required("Email is required"),
})

export default function NotesScreen() {
  // const [note, setNote] = useState('');
  // const [note2, setNote2] = useState('');
  // useEffect(() => {
  //   setNote("")
  //   setNote2("")
  //   // console.log('Note updated:', note);
  // }, []);
  return (
  <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Submit Button */}
          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  error: { color: "red", marginBottom: 10 },
});