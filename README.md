# Quest 3 

Performance testing with huge data for backend and e2e testing for web frontend

1. goal: backend developer made API, but not sure it is good speed or slow with huge data.
2. SQA applicant will make test code for that when response is over 1 second not pass testing.
3. make 1million data, and need to show one page and need to response less than 1 second, if not passed can't commit.

## Used strategy
1. Write test using mocha and chai
2. Add github workflow code to run code on commit and before merging to main.
3. As a security messure the main branch can be locked to avaoid direct commits so that each developer can contribute to main via Pull Requests. This means that any PR with failing tests cant be merged to main.
