\# Internship Management System



\## Project-Based CI/CD Implementation



This project demonstrates a complete CI/CD pipeline for an Internship Management System using React, Node.js, Docker, GitHub Actions, Amazon ECR, Amazon EC2, and Amazon RDS MySQL.



\## Project Objective



The objective of this project is to implement an automated CI/CD pipeline that builds, tests, containerizes, publishes, and deploys the application.



\## Technology Stack



\### Frontend



\* React

\* Vite

\* JavaScript

\* HTML

\* CSS



\### Backend



\* Node.js

\* Express.js

\* MySQL

\* REST API



\### DevOps \& AWS



\* Git

\* GitHub

\* GitHub Actions

\* Docker

\* Amazon ECR

\* Amazon EC2

\* Amazon RDS MySQL

\* AWS IAM



\## Application Architecture



```text

Developer

&#x20;   |

&#x20;   | git push

&#x20;   v

GitHub Repository

&#x20;   |

&#x20;   v

GitHub Actions

&#x20;   |

&#x20;   +--> Build Frontend

&#x20;   |

&#x20;   +--> Test Backend

&#x20;   |

&#x20;   +--> Build Docker Images

&#x20;   |

&#x20;   +--> Push Images to Amazon ECR

&#x20;   |

&#x20;   +--> Deploy to Amazon EC2

&#x20;   |

&#x20;   v

Amazon EC2

&#x20;   |

&#x20;   +--> React Frontend

&#x20;   |

&#x20;   +--> Node.js Backend

&#x20;   |

&#x20;   v

Amazon RDS MySQL

```



\## Project Structure



```text

internship-management-cicd/

│

├── frontend/

│   ├── src/

│   ├── package.json

│   ├── package-lock.json

│   ├── Dockerfile

│   └── .dockerignore

│

├── backend/

│   ├── src/

│   ├── tests/

│   ├── package.json

│   ├── package-lock.json

│   ├── Dockerfile

│   ├── .dockerignore

│   └── .env.example

│

├── .github/

│   └── workflows/

│       └── cicd.yml

│

├── docker-compose.yml

├── .gitignore

└── README.md

```



\## Backend API



\### Health Check



```text

GET /api/health

```



Example response:



```json

{

&#x20; "status": "UP",

&#x20; "database": "CONNECTED",

&#x20; "service": "Internship Management Backend"

}

```



\### Get Internships



```text

GET /api/internships

```



Example response:



```json

\[

&#x20; {

&#x20;   "id": 3,

&#x20;   "title": "DevOps Intern",

&#x20;   "company": "Cloud Systems",

&#x20;   "location": "Bangalore",

&#x20;   "duration": "6 Months"

&#x20; },

&#x20; {

&#x20;   "id": 2,

&#x20;   "title": "Software Developer Intern",

&#x20;   "company": "Tech Solutions",

&#x20;   "location": "Hyderabad",

&#x20;   "duration": "3 Months"

&#x20; },

&#x20; {

&#x20;   "id": 1,

&#x20;   "title": "Cloud Engineer Intern",

&#x20;   "company": "Stackly",

&#x20;   "location": "Hyderabad",

&#x20;   "duration": "6 Months"

&#x20; }

]

```



\## Docker



The application is containerized into two Docker containers:



```text

Frontend Container

Port: 5173



Backend Container

Port: 5000

```



Docker images are stored in Amazon ECR.



\## AWS Deployment



The application is deployed in the AWS `ap-south-2` region.



\### Amazon ECR



Two repositories are used:



```text

internship-frontend

internship-backend

```



\### Amazon EC2



The EC2 instance runs the Docker containers:



```text

React Frontend → Port 5173

Node.js Backend → Port 5000

```



\### Amazon RDS



MySQL is used as the database.



```text

Database: internshipdb

Port: 3306

```



The RDS database is accessed by the backend running on EC2.



\## CI/CD Pipeline



The planned GitHub Actions pipeline performs the following steps:



```text

Git Push

&#x20;  |

&#x20;  v

Checkout Source Code

&#x20;  |

&#x20;  v

Install Dependencies

&#x20;  |

&#x20;  v

Run Backend Tests

&#x20;  |

&#x20;  v

Build Frontend

&#x20;  |

&#x20;  v

Build Docker Images

&#x20;  |

&#x20;  v

Push Images to Amazon ECR

&#x20;  |

&#x20;  v

Deploy to Amazon EC2

&#x20;  |

&#x20;  v

Verify Application Health

```



\## Security



Sensitive information such as database passwords and AWS credentials should not be committed to GitHub.



The following files are excluded using `.gitignore`:



```text

.env

.env.\*

node\_modules/

dist/

coverage/

```



AWS credentials used by CI/CD should be stored securely using GitHub Secrets or preferably GitHub Actions OIDC with an AWS IAM role.



\## Application Verification



After deployment, the application can be verified using:



```text

Frontend:

http://EC2\_PUBLIC\_IP:5173



Backend:

http://EC2\_PUBLIC\_IP:5000



Health Check:

http://EC2\_PUBLIC\_IP:5000/api/health

```



\## Implementation Assumption



The actual Internship Management System source code and AWS project environment were not available at the time of this assignment. Therefore, a project-aligned sample application consisting of a React frontend and Node.js backend was created to demonstrate the CI/CD implementation.



The sample architecture follows the technologies and AWS deployment approach specified for the project. The workflow can be adapted to the actual project repository once source-code and environment access are provided.



\## Result



The application has been successfully containerized and deployed on Amazon EC2. The Node.js backend connects to Amazon RDS MySQL, and the React frontend retrieves and displays internship information through the backend API.



The next step is to automate the build, test, Docker image publishing, deployment, and verification process using GitHub Actions.



