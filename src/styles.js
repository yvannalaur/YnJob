import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContact: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  paymentName: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  paymentPhone: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  sectionContainer: {
    transition: 'opacity 0.5s ease-in-out',
  },
  subtitle: {
    color: '#007bff', // Example color, adjust as needed
  },
  paymentSection: {
    backgroundColor: '#f0f8ff', // Light blue background
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // for Android shadow
  },
  paymentContainer: {
    alignItems: 'center', // Center content horizontally
  },
  paymentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3498db', // Blue title color
    marginBottom: 15,
    textAlign: 'center',
  },
  paymentDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentMethods: {
    flexDirection: 'column', // Arrange methods in a column
    width: '100%', // Take full width of the container
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // for Android shadow
  },
  paymentIcon: {
    marginRight: 15,
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  paymentNumber: {
    fontSize: 16,
    color: '#777',
  },
  paymentName: {
    fontSize: 14,
    color: '#999',
  },
  priceInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#27ae60', // Green price color
  },
  priceAmount: {
    color: '#e74c3c', // Red amount color
  },
  codeIDText: {
    fontWeight: 'bold',
    color: '#e74c3c', // Red color for Code ID
  }
});

export default styles;
