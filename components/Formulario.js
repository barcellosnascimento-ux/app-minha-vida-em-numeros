import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Formulario({ onSave, onCancel, registroEmEdicao }) {
  const [tituloLivro, setTituloLivro] = useState('');
  const [paginas, setPaginas] = useState('');
  const [dias, setDias] = useState('');

  useEffect(() => {
    if (registroEmEdicao) {
      setTituloLivro(registroEmEdicao.titulo);
      setPaginas(String(registroEmEdicao.paginas));
      setDias(String(registroEmEdicao.dias));
    } else {
      setTituloLivro('');
      setPaginas('');
      setDias('');
    }
  }, [registroEmEdicao]);

  const handleSaveClick = () => {
    onSave(tituloLivro, paginas, dias);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.subtitulo}>
        {registroEmEdicao ? 'Editando Registro' : 'Novo Registro'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Título do livro"
        value={tituloLivro}
        onChangeText={setTituloLivro}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de páginas lidas"
        keyboardType="numeric"
        value={paginas}
        onChangeText={setPaginas}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de dias que leu"
        keyboardType="numeric"
        value={dias}
        onChangeText={setDias}
      />

      <TouchableOpacity style={styles.botao} onPress={handleSaveClick}>
        <Text style={styles.botaoTexto}>
          {registroEmEdicao ? 'Atualizar Registro' : 'Gravar no Arquivo'}
        </Text>
      </TouchableOpacity>

      {registroEmEdicao && (
        <TouchableOpacity style={styles.botaoCancelar} onPress={onCancel}>
          <Text style={styles.botaoTexto}>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 8, padding: 15, marginHorizontal: 15, marginBottom: 20, elevation: 3 },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#34495e' },
  input: { borderWidth: 1, borderColor: '#cccccc', borderRadius: 5, padding: 12, fontSize: 16, marginBottom: 10 },
  botao: { backgroundColor: '#3498db', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 5 },
  botaoTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  botaoCancelar: { backgroundColor: '#7f8c8d', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
});
