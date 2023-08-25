export async function fetcher(url, options = {}) {

        let response;
        if (!options) {
          response = await fetch(url);
        } else {
          response = await fetch(url, options);
        }
        
        const data = await response.json();
        return data;
      
    }
/*
    try {
      const response = await fetch('http://localhost:1337/api/films');
      const data = await response.json();
      // Process the data
    } catch (error) {
      console.error('An error occurred:', error);
    }

    */

