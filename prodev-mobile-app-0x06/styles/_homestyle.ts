import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchGroup: {
    backgroundColor: '#2B876E',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingLeft: 24,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 12,
    color: '#000',
    marginBottom: -4,
    marginLeft: 4,
  },
  searchInputText: {
    fontSize: 12,
    color: '#333',
  },
  searchControl: {
    paddingVertical: 6,
  },
  searchButton: {
    backgroundColor: '#FFA800',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  filterGroup: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  filterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  filterText:{
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
  listingContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  paginationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
  },
  showMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
