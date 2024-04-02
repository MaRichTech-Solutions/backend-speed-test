import axios from 'axios';
import { expect } from 'chai';  // Using Expect style

    const endpoint = 'http://localhost:3000/test'; // Replace this with your actual backend endpoint URL
    let shouldBreak = false;
    // Send 1000 requests concurrently
    for (let i = 0; i < 100; i++) {

       //If wait time is more than 1 sec then break the loop
       if (shouldBreak) {
        break; // Break out of the loop
    }

      describe(`Backend Endpoint Availability Test ${i+1}`, function() {
        it('should respond within 1 second for 1000 requests', async function() {
          this.timeout(1000); // Increase Mocha's timeout for this test to 10 seconds
         

          setTimeout(() => {
            console.log('Request took more than 1 sec');
            shouldBreak = true
            
          }, 1000);
  
       await axios.get(endpoint)
          .then(response => {
            expect(response.status).to.equal(200); // Check if the response status is 200 OK
          })
        });

        
      });
    }

