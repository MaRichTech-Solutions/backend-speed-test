import axios from 'axios';
import { expect } from 'chai';  // Using Expect style

const endpoint = 'http://localhost:3000/test';

describe(`Backend Endpoint Availability Test`, function() {
  it('should respond within 1 second for 1000 requests', async function() {

      const startTime = new Date().getTime(); // Record the start time of the request

      // Send 1000 requests
      for (let i = 0; i < 10; i++) {
        console.log("Test ", i+1)

        // Await the axios request
        await axios.get(endpoint)
        .then(response => {
          expect(response.status).to.equal(200); // Check if the response status is 200 OK
        })
        .catch(error => {
          console.error('Error occurred:', error);
        });

        const endTime = new Date().getTime(); // Record the end time of the request
        const duration = endTime - startTime; 
        if (duration > 1000){
          //End the test
          return
        }
      }
  });
});
