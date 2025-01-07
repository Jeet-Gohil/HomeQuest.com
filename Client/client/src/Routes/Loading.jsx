import React from 'react'

const Loading = () => {
  return (
    <div style={styles.loading}>
      <p>Loading... Please wait!</p>
    </div>
  );
}

const styles = {
    loading: {
      textAlign: 'center',
      padding: '50px',
      fontSize: '20px',
      color: '#555',
    },
  };
export default Loading
