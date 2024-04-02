import axios from 'axios';
import { expect } from 'chai';  // Using Expect style

    const endpoint = 'http://localhost:3000/test'; // Replace this with your actual backend endpoint URL
    // Send 1000 requests concurrently
    for (let i = 0; i < 100; i++) {

      describe(`Backend Endpoint Availability Test ${i+1}`, function() {
        it('should respond within 1 second for 1000 requests', async function() {
          this.timeout(10000); // Increase Mocha's timeout for this test to 10 seconds
  
       await axios.get(endpoint)
          .then(response => {
            expect(response.status).to.equal(200); // Check if the response status is 200 OK
          })
        });
      });
    }

