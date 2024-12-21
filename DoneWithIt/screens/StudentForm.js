import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    if (agree) {
      alert('Form Submitted');
    } else {
      alert('Please agree to the terms and conditions');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Details Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="USN"
        value={usn}
        onChangeText={setUsn}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />
      <TextInput
        style={styles.input}
        placeholder="Batch"
        value={batch}
        onChangeText={setBatch}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agree}
          onValueChange={setAgree}
        />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

