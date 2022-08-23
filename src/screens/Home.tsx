import {
  Text,
  FlatList,
  SafeAreaView
} from 'react-native';

import Card from '../components/Card';

import { useQuery } from '@apollo/client';

import INFO_PERSON from '../queries';

export default function Home(){

  const { loading, error, data } = useQuery(INFO_PERSON)
  
  return(
    <SafeAreaView>
      { loading && <Text>Loading ...</Text> }
      { error && <Text>Error ...</Text> }
      { data && 
        <FlatList
          data={data.characters.results}
          renderItem={ ({item}) => <Card card={item}/>}
        />
      }
    </SafeAreaView>
  )
}