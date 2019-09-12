import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);
  const filterResultByPrice = price => {
    // price === '$ || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
