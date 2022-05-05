import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from 'react-native';
import { Voximplant } from 'react-native-voximplant'

export default function ContactScreen({navigation}) {
    const contact = ['User1', 'User2', 'Sajjad', 'Umair', 'Yaseen', 'Waqas'];
    const [search, setSearch] = React.useState('');
    const [dummyContacts, setDummyContacts] = React.useState(contact);
    const [filteredContacts, setFilteredContacts] = React.useState();
    const voximplant = Voximplant.getInstance();

    React.useEffect(() => {
      const newContact = dummyContacts.filter((contact) => contact.toLowerCase().includes(search.toLowerCase()));
      setFilteredContacts(newContact);
    }, [search])

    React.useEffect(() => {
      voximplant.on(Voximplant.ClientEvents.IncomingCall, (incomingCallEvent) => {
        navigation.navigate('IncommingCall', {
          call: incomingCallEvent.call,
        });
      });

      return () => {
        voximplant.off(Voximplant.ClientEvents.IncomingCall);
      };
    }, [])

    const callUser = (user) => {
      navigation.navigate("Calling", {user})
    }
  return (
    <View style={styles.page}>
      <TextInput placeholder='Search...' style = {styles.searchInput} value = {search} onChangeText = {setSearch}/>
        <FlatList
          data={filteredContacts}
          renderItem={({item}) => (
            <Pressable onPress={() => callUser(item)}><Text style={styles.contactName}>{item}</Text></Pressable>
          )}
          ItemSeparatorComponent = {() => (<View style = {styles.seperator}/>)}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  page: {
    padding: 15,
    flex: 1, 
    backgroundColor: 'white'
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0'
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5
  }
});