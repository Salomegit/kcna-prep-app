import { Question } from "../types";

export const questions: Question[] = [
  {
    id: '1',
    question: 'What is the primary purpose of Kubernetes?',
    options: [
      'To replace Docker containers',
      'To orchestrate and manage containerized applications',
      'To create virtual machines',
      'To build container images'
    ],
    correctAnswer: 1,
    explanation: 'Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
    topic: 'kubernetes-fundamentals',
    difficulty: 'hard'
  },
  {

    id: '2',
    question: 'Which component is responsible for making scheduling decisions in Kubernetes?',
    options: [
      'kubelet',
      'kube-proxy',
      'kube-scheduler',
      'etcd'
    ],
    correctAnswer: 2,
    explanation: 'The kube-scheduler is responsible for selecting which node a pod should run on based on resource requirements and constraints.',
    topic: 'kubernetes-fundamentals',
    difficulty: 'medium'
  },
  {
    id: '3',
    question: 'What is a Pod in Kubernetes?',
    options: [
      'A single container',
      'The smallest deployable unit that can contain one or more containers',
      'A collection of nodes',
      'A networking component'
    ],
    correctAnswer: 1,
    explanation: 'A Pod is the smallest deployable unit in Kubernetes and can contain one or more tightly coupled containers that share storage and network.',
    topic: 'container-orchestration',
    difficulty: 'easy'
  },
  {
    id: '4',
    question: 'Which of the following is a key principle of cloud native architecture?',
    options: [
      'Monolithic application design',
      'Manual scaling and deployment',
      'Microservices and containerization',
      'On-premises only deployment'
    ],
    correctAnswer: 2,
    explanation: 'Cloud native architecture emphasizes microservices, containerization, and automated scaling to build resilient and scalable applications.',
    topic: 'cloud-native-architecture',
    difficulty: 'medium'
  },
  {
    id: '5',
    question: 'What is the purpose of Prometheus in cloud native observability?',
    options: [
      'Container orchestration',
      'Service mesh management',
      'Metrics collection and monitoring',
      'Image registry management'
    ],
    correctAnswer: 2,
    explanation: 'Prometheus is an open-source monitoring and alerting toolkit designed for collecting and storing metrics from cloud native applications.',
    topic: 'cloud-native-observability',
    difficulty: 'medium'
  },
  {
    id: '6',
    question: 'What is the meaning of Cloud Native?',
    options: [
      'It applies only to Public Cloud',
      'It applies only to AWS - Amazon Web Services',
      'It applies to all cloud offerings including Public, Private, and Hybrid Clouds',
      'It applies only to Private and Hybrid Clouds'
    ],
    correctAnswer: 2,
    explanation: 'Cloud Native refers to the approach of designing and building applications to fully utilize cloud environments. This includes all types of clouds, such as Public, Private, and Hybrid, to enable scalability, resilience, and manageability.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '7',
    question: 'What does CNCF stand for in the context of cloud computing?',
    options: [
      'Cloud Native Community Framework',
      'Cloud Native Computing Foundation',
      'Cloud Networking Communication Forum',
      'Cloud Native Coding Framework'
    ],
    correctAnswer: 1,
    explanation: 'Cloud Native Computing Foundation (CNCF) is an organization under the Linux Foundation that promotes the adoption of cloud-native technologies, such as Kubernetes and Prometheus, and helps build sustainable ecosystems.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {

    id: '8',

    question: 'What is the role of the CNCF?',
    options: [
      'It is responsible for the commercial adoption of Linux',
      'It is the primary organisation responsible for promoting and developing cloud native technologies',
      'It is a closed-source, vendor-specific hub focusing specifically on Cloud Native Computing',
      'It is a sub-foundation of Microsoft Azure dedicated to making Cloud Native Ubiquitous'
    ],
    correctAnswer: 1,
    explanation: 'The CNCF (Cloud Native Computing Foundation) is dedicated to fostering the growth and development of cloud-native technologies. It hosts and supports popular open-source projects like Kubernetes, Prometheus, and Envoy, helping to build and sustain a thriving ecosystem for cloud-native computing.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  }, {
    id: '9',
    question: 'Which project was the first-ever project submission to the CNCF?',
    options: [
      'Prometheus',
      'Linux Kernel',
      'Envoy',
      'Kubernetes'
    ],
    correctAnswer: 3,
    explanation: 'Kubernetes was the first project donated to the CNCF when the foundation was established in 2015. It is a leading open-source platform for automating the deployment, scaling, and management of containerized applications.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '10',
    question: 'What is the significance of the Linux Foundation in relation to Cloud Native?',
    options: [
      'It is a foundation that exclusively deals with Windows-based operating systems',
      'It is responsible for hosting significant projects like the Linux Kernel, Kubernetes, and the CNCF',
      'It is a foundation that was established in 2015 and was a merger between Open Source Development Labs and the Free Standards Group',
      'It is a commercial entity that sells Linux distributions'],
    correctAnswer: 1,
    explanation: 'The Linux Foundation plays a pivotal role in the open-source ecosystem by hosting a variety of critical projects such as the Linux Kernel, Kubernetes, and the CNCF (Cloud Native Computing Foundation). It provides resources, governance, and support to foster the development and widespread adoption of these technologies.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '11',
    question: 'When was the Linux Foundation founded?',
    options: [
      '2005',
      '2015',
      '2000',
      '2010'
    ],
    correctAnswer: 2,
    explanation: 'The Linux Foundation was established in 2000 through the merger of Open Source Development Labs (OSDL) and the Free Standards Group to promote and support the Linux operating system and open-source software development.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'

  },
  {
    id: '12',
    question: 'Cloud Native Architecture refers to:',
    options: [
      'Applications built only for public cloud services',
      'Applications built using Cloud Native best practices to run across all Cloud Native Systems',
      'Applications that can only be run on specific cloud service providers',
      'Applications that are developed only using container technologies'
    ],
    correctAnswer: 2,
    explanation: 'Cloud Native Architecture involves designing and building applications that follow best practices such as microservices, containerization, and continuous integration/continuous deployment (CI/CD). These applications are meant to run effectively across various cloud environments, providing scalability, resilience, and flexibility.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '13',
    question: 'What is the role of container technologies in the Cloud Native ecosystem?',
    options: [
      'Using containers necessarily equals being Cloud Native',
      'Containers are not used in Cloud Native ecosystem',
      'Containers are beneficial from an application management perspective, and they are a positive step towards Cloud Native',
      'Containers are only used with the Docker runtime'
    ],
    correctAnswer: 2,
    explanation: 'Containers play a crucial role in the Cloud Native ecosystem by enabling consistent deployment, scaling, and management of applications across different environments. They provide isolation, portability, and ease of management, making them an essential component of Cloud Native strategies.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '14',
    question: 'What distinguishes Cloud Native from a legacy deployment in terms of application development?',
    options: [
      'Applications designed for high availability and fault tolerance',
      'Applications leveraging the infrastructure provided by cloud service providers',
      'Applications built using infrastructure-as-code tools like Terraform for flexible and vendor-agnostic management',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'All of these aspects—designing for high availability and fault tolerance, leveraging cloud infrastructure, and using infrastructure-as-code tools—are integral to Cloud Native application development. These practices, combined, enable scalability, flexibility, and resilience, distinguishing Cloud Native from traditional, monolithic legacy deployments.',
    topic: 'cloud-native-architecture',
    difficulty: 'easy'
  },
  {
    id: '15',
    question: 'Who was the original developer of Kubernetes?',
    options: [
      'Microsoft',
      'Amazon',
      'IBM',
      'Google'
    ],
    correctAnswer: 3,
    explanation: 'Google developed Kubernetes and open-sourced it in 2014. The project was based on lessons learned from Googles internal container orchestration system, Borg, and has since become a cornerstone of the cloud- native ecosystem.',
topic: 'cloud-native-architecture',
  difficulty: 'easy'
  },
  {
    id: '16',
    question: 'What could the term "tight coupling" refer to in the context of monolithic applications?',
options: [
'High impact changes are easy and frequent',
'A User Interface and Business Logic are hard to work on separately',
'The application and the operating system are entirely separate',
'The application is easy to manage and maintain'
],
correctAnswer: 1,
explanation: 'Tight coupling means that different components of an application, such as the User Interface (UI) and Business Logic, are closely linked and interdependent. This makes it challenging to work on them separately, as changes to one component often require changes to others, complicating development and maintenance.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },
  {
    id: '17',
    question: 'What is a significant advantage of microservices in cloud-native applications?',
options: [
'They make the system more tightly coupled',
'They reduce the need for automation',
'They enhance flexibility and make the application easier to manage',
'They eliminate the need for system updates'
],
correctAnswer: 2,
explanation: 'Microservices enhance flexibility by allowing each service to be developed, deployed, and scaled independently. This modularity makes the application easier to manage, as changes or updates to one service do not impact the entire system.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },
  {
    id: '18',
    question: 'What is a significant advantage of using autoscaling in Cloud Native patterns?',
options: [
'It permanently scales the architecture',
'It allows the application to scale based on the workload at the time',
'It reduces efficiency',
'It increases cost'
],
correctAnswer: 1,
explanation: 'Autoscaling enables an application to automatically adjust its resources based on real-time workload, ensuring that the application can handle varying levels of demand efficiently. This helps maintain performance and optimize resource usage without manual intervention.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },
  {
    id: '19',
    question: 'What are the fundamental characteristics that define a Cloud Native Application?',
options: [
'Portability, Scalability, Maintainability, Cost-effectiveness',
'Resiliency, Agility, Operability, Observability',
'Continuous Integration, Continuous Delivery, DevOps, Microservices',
'Interoperability, Sustainability, Autonomy, Efficiency'
],
correctAnswer: 1,
explanation: 'Cloud-native applications are designed to be resilient, meaning they can withstand failures; agile, allowing for rapid development and deployment; operable, ensuring ease of management; and observable, enabling effective monitoring and troubleshooting.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },{
    id: '20',
    question: 'What does "Self Healing" refer to in the context of Cloud Native practices?',
options: [
'Always restarting a failed process manually',
'Architecting your application to automatically resolve issues and restart processes when they fail',
'Ensuring that all components of the system are always up and running',
'Always ensuring that a system never fails'
],
correctAnswer: 1,
explanation: 'In Cloud Native practices, self-healing refers to the ability of an application to detect failures or issues and automatically recover from them. This includes restarting failed processes, reallocating resources, or rerouting traffic to maintain availability and performance without manual intervention.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },{
    id: '21',
    question: 'How could Ansible facilitate Cloud Native automation?',
options: [
'Ansible only assists with the lifecycle of applications',
'Ansible is only useful for creating Linux distributions',
'Ansible is a toolset that could assist with many areas including Container and Application Lifecycles as well as infrastructure deployment',
'Ansible is a programming language for developing Cloud Native applications'
],
correctAnswer: 2,
explanation: 'Ansible is a versatile automation tool that can be used to automate various aspects of cloud-native environments, including managing container and application lifecycles, deploying infrastructure, and automating configuration tasks. It provides a consistent way to automate complex workflows across different platforms.',
topic: 'cloud-native-architecture',
difficulty: 'hard'
  },
  {
    id: '22',
    question: 'Which of the following is a key function of Terraform in Cloud Native Automation?',
options: [
'Terraform is used exclusively for version control in source version control software',
'Terraform focuses on Infrastructure as Code (IAC), allowing for consistent, reproducible, and automated infrastructure across different environments',
'Terraform is used to replace Ansible in automation tasks',
'Terraform is a programming language used in Cloud Native applications'
],
correctAnswer: 1,
explanation: 'Terraform is an Infrastructure as Code (IaC) tool that enables you to safely and efficiently build, change, and version infrastructure. It is cloud-agnostic and supports multiple service providers, allowing for consistent and reproducible infrastructure automation.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
  },{
    id: '23',
    question: 'What best describes the concept of Continuous Delivery in the context of CI/CD?',
options: [
'A practice where developers are encouraged to constantly deliver new codes',
'The manual process of moving changes to the production environment',
'A practice that encourages frequent development changes with an emphasis on automated testing, leading up to a releasable build',
'The continuous automatic deployment of changes to the production environment'
],
correctAnswer: 2,
explanation: 'Continuous Delivery (CD) is a practice where code changes are automatically built, tested, and prepared for release. It emphasizes automation in testing and integration, ensuring that the application is always in a releasable state, even if it is not immediately deployed to production.',
topic: 'cloud-native-architecture',
difficulty: 'medium'
  }
,{
  id: '24',
  question: 'What does the term Continuous Deployment mean in the context of CI/CD?',
options: [
'It refers to the practice of delaying the deployment of changes until they are manually approved',
'It refers to the practice where changes are continuously deployed and released into a Production environment, often without requiring human initiation',
'It refers to the practice of deploying changes once a day',
'It refers to the practice of stopping the deployment of changes to perform manual tests'
],
correctAnswer: 1,
explanation: 'Continuous Deployment (CD) is the practice where code changes that pass automated testing are automatically deployed to the production environment without the need for manual intervention. It ensures rapid and frequent release of new features, bug fixes, and updates directly to users.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
},{
  id: '25',
  question: 'What is a key consideration when designing an application or infrastructure in cloud native practices?',
options: [
'Performance/Speed',
'Popularity of components used',
'How quickly it can be built',
'Potential for component failure'
],
correctAnswer: 3,
explanation: 'In cloud-native design, acknowledging and planning for potential component failure is crucial. This approach involves building systems with redundancy, self-healing capabilities, and scalability to ensure high availability and reliability, even when individual components fail.',
topic: 'cloud-native-architecture',
difficulty: 'easy'
},{
  id: '26',
question: "Which of the following options correctly lists the key pillars of Cloud Native Architecture?",
options: [
"Microservices, Continuous Integration, DevOps, Containerisation",
"Monolithic applications, Agile development, Containerisation, Self-healing",
"Microservices, Containers, DevOps, Continuous Delivery",
"Containers, DevOps, Continuous Integration, Cloud Native Infrastructure"
],
correctAnswer: 2,
explanation: "This is the correct answer. The key pillars of Cloud Native Architecture include Microservices, Containers, DevOps, and Continuous Delivery. Microservices enable modular, independent service development; Containers provide isolated and consistent environments; DevOps practices facilitate collaboration and automation; and Continuous Delivery ensures that code changes are tested and ready for deployment at any time.",
topic: "cloud-native-architecture",
difficulty: "easy"
},{
  id: '27',
  question: "Which Autoscaling types reacts when metrics hit a given threshold?",
options: [
"Predictive Autoscaling",
"Vertical Autoscaling",
"Reactive Autoscaling",
"Scheduled Autoscaling"
],
correctAnswer: 2,
explanation: "Reactive Autoscaling responds to real-time metrics such as CPU utilization or request rates. When these metrics cross a predefined threshold, the system automatically scales resources up or down to meet the current demand, ensuring efficient use of resources.",
topic: "cloud-native-architecture",
difficulty: "easy"
},{
  id: '28',
 
question: "What is the function of Horizontal Pod Autoscalers (HPA) in Kubernetes?",
options: [
"They scale the number of replicas for an application",
"They automatically adjust the size of a Kubernetes Cluster based on the workload",
"They scale the resource requests and limits of a pod",
"They facilitate the conversion of video formats"
],
correctAnswer: 0,
explanation: "The Horizontal Pod Autoscaler (HPA) in Kubernetes automatically scales the number of replicas of a pod based on observed metrics such as CPU utilization or custom metrics. This helps ensure that the application can handle varying loads efficiently by adjusting the number of pod instances dynamically.",
topic: "cloud-native-architecture",
difficulty: "easy"
},
{
  id: '29',
  question: "What is Keda in the context of Autoscaling?",
options: [
"It is a process to add more users to a software application",
"It is an event driven solution that makes use of ScaledObjects",
"It is a tool to automatically adjust the size of a Kubernetes Cluster based on the workload",
"It is a method to scale the resource requests and limits of a pod"
],
correctAnswer: 1,
explanation: "Keda (Kubernetes-based Event Driven Autoscaler) is an event-driven autoscaling solution for Kubernetes. It allows applications to scale based on external event sources, such as message queues or databases, using custom resources called ScaledObjects to define scaling criteria and behaviour.",
topic: "cloud-native-architecture",
difficulty: "medium"
},{
  id: '30',
  question: "What does provisioned concurrency in Serverless offerings refer to?",
options: [
"The number of instances that can be run simultaneously",
"The number of serverless functions that can be written",
"The number of cloud providers that can be used",
"The number of users that can access the serverless application"
],
correctAnswer: 0,
explanation: "Provisioned concurrency in serverless offerings refers to the number of instances of a serverless function that are kept warm and ready to handle requests simultaneously. It ensures that functions are pre-initialized and can serve requests with minimal latency, even under high demand.",
topic: "cloud-native-architecture",
difficulty: "easy"
},{
  id: '31',
  question: "What is the sequence of the CNCF project maturity levels?",
options: [
"Graduated, Incubated, Sandbox",
"Incubated, Graduated, Sandbox",
"Sandbox, Graduated, Incubated",
"Sandbox, Incubated, Graduated"
],
correctAnswer: 3,
explanation: "The sequence of CNCF project maturity levels is: Sandbox, Incubated, and then Graduated. Projects begin in the Sandbox to experiment and gain community support, move to Incubation as they mature and demonstrate traction, and finally achieve Graduation when they are widely adopted and meet stability and security criteria.",
topic: "cloud-native-architecture",
difficulty: "easy"
},
{
  id: "32",
question: "Why are Docker containers preferred over virtual machines?",
options: [
"They are faster to deploy and consume less system resources",
"They provide stronger security features than virtual machines",
"They offer better resource isolation compared to virtual machines",
"They can handle larger workloads than virtual machines"
],
correctAnswer: 0,
explanation: "Docker containers are preferred over virtual machines because they are faster to deploy and consume less system resources. Containers share the same kernel as the host operating system, which means that they don't require a separate operating system instance like virtual machines do. This makes them much more lightweight and efficient in terms of resource usage.",
topic: "container-orchestration",
difficulty: "easy"
},
{
  id: "33",
question: "What does Docker Desktop use to run an isolated instance for Docker?",
options: [
"A separate partition",
"A hidden virtual machine or 'subsystem'",
"A dedicated Docker server",
"A container orchestrator"
],
correctAnswer: 1,
explanation: "Docker Desktop uses a hidden virtual machine (VM) or 'subsystem' to run an isolated instance of Docker on Windows and macOS systems. This VM, also known as the 'Docker Desktop VM', provides a lightweight and isolated environment for running containers, without requiring the user to explicitly manage a separate VM.",
topic: "container-orchestration",
difficulty: "easy"
},
{
  id: "34",
question: "What is the purpose of the 'I' flag when running the 'docker run' command?",
options: [
"To initialise the container",
"To make the container interactive",
"To specify the container image",
"To ignore any errors"
],
correctAnswer: 1,
explanation: "The 'I' flag, short for '--interactive', tells Docker to keep the standard input (STDIN) open after starting the container. This allows you to interact with the container's process as if it were running on your local machine.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "35",
  question: "What is a container image?",
options: [
"A portable self-contained bundle of software and dependencies",
"A running instance of a software",
"A type of version control system",
"A cloud-based storage system"
],
correctAnswer: 0,
explanation: "A container image is a portable, self-contained bundle of software and dependencies that includes everything needed to run an application: code, runtime, system tools, system libraries, and settings.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "36",
  question: "What is a container registry?",
options: [
"A service for hosting and distributing container images",
"A software for creating containers",
"A version control system for containers",
"A layer within a container image"
],
correctAnswer: 0,
explanation: "A container registry is a service for hosting and distributing container images, allowing users to store, manage, and deploy container images efficiently.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "37",
  question: "What is the purpose of the 'latest' tag in Docker?",
options: [
"To indicate the newest version of a container image",
"To specify the oldest version of a container image",
"To be used as a default tag when working with images if a tag is not specified",
"To show the base operating system of a container image"
],
correctAnswer: 2,
explanation: "The 'latest' tag in Docker serves as a default tag when working with images if a specific tag is not specified. When you pull or use an image without specifying a particular tag, Docker will automatically use the image with the 'latest' tag. This simplifies the process of using and managing container images.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "38",
  question: "What is a digest in the context of container images?",
options: [
"A secure and unique identifier for an image from the container registry",
"A tag used to distinguish a version of a container image",
"A running instance of a container image",
"A layer within a container image"
],
correctAnswer: 0,
explanation: "In the context of container images, a digest refers to a secure and unique identifier that represents an image in a container registry. Digests are typically calculated using cryptographic hash functions (such as SHA-256), which produce a fixed-length string that uniquely identifies the contents of the image.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "39",
  question: "What is the command used to validate the Docker version and configuration?",
options: [
"docker --version",
"docker version",
"docker info",
"docker config"
],
correctAnswer: 1,
explanation: "The command 'docker version' provides detailed information about the Docker client and server versions, along with their configuration details. This makes it a more comprehensive option for validating both the version and configuration of Docker.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "40",
  question: "How can you override the default command in a Docker container when running it?",
options: [
"Add the command to the end of the docker run command",
"Modify the container's Dockerfile",
"Use the -e flag followed by the new command",
"It is not possible to override the default command"
],
correctAnswer: 0,
explanation: "When you add a command to the end of the docker run command, it overrides the default command specified in the Dockerfile. This allows you to customize the behavior of the container without modifying the original image.",
topic: "container-orchestration",
difficulty: "medium"
},{
  id: "41",
  question: "What does the command 'docker run --rm nginx' do?",
options: [
"Runs an nginx container in the background",
"Stops and removes an nginx container",
"Pulls the nginx image if it does not exist, runs a container and removes the container upon exit",
"Starts an interactive terminal session in an nginx container"
],
correctAnswer:2,
explanation: "Pulls the nginx image if it does not exist, runs a container and removes the container upon exit. This is the correct answer because the --rm flag tells Docker to automatically remove the container when it exits. If the nginx image does not already exist locally, Docker will pull it from the registry before running the container.",
topic: "container-orchestration",
difficulty: "medium"
},{
  id: "42",
  question: "What is the purpose of the '-d' option in the command 'docker run -d --rm -P nginx'?",
options: [
"Detaches the container from the terminal so it runs in the background",
"Specifies the port to be used by the container",
"Publishes all container ports to the host machine",
"Removes the container after it is stopped"
],
correctAnswer: 0,
explanation: "The '-d' option in the command 'docker run -d --rm -P nginx' detaches the container from the terminal, allowing it to run in the background. When a Docker container is started without this option, it will run in the foreground and any output will be printed directly to the terminal. By using the '-d' flag, you can detach the container and continue using your terminal for other tasks.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "43",
  question: "What is the purpose of using the '-p' option in the command 'docker run -d --rm -p 12345:80 nginx'?",
options: [
"Specifies the port to be used for connectivity to the container",
"Publishes all container ports to the host machine",
"Detaches the container from the terminal so it runs in the background",
"Removes the container after it is stopped"
],
correctAnswer: 0,
explanation: "The '-p' option in the command 'docker run -d --rm -p 12345:80 nginx' specifies the port to be used for connectivity to the container. In this case, it maps port 80 inside the container to port 12345 on the host machine. This allows external traffic to reach the container's web server (nginx) through the specified host port.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "44",
  question: "How do you publish all exposed ports of a container when running it with Docker?",
options: [
"P",
"P",
"E",
"e"
],
correctAnswer: 0,
explanation: "The -P flag tells Docker to publish all exposed ports of the container to the host machine. When you run a container with the -P flag, Docker will automatically map any exposed port in the container to a random available port on the host machine.",
topic: "container-orchestration",
difficulty: "medium"
},{
  id: "45",
  question: "What is a drawback of having too many layers in a container image?",
options: [
"Better security",
"Easier maintenance",
"Potential inefficiencies in image size and build times",
"Faster build times"
],
correctAnswer: 2,
explanation: "Having too many layers in a container image can lead to potential inefficiencies in image size and build times, as each layer adds overhead and can increase the overall size and complexity of the image.",
topic: "container-orchestration",
difficulty: "medium"
},{
  id: "46",
  question: "What is the difference between the CMD and RUN instructions in a Dockerfile?",
options: [
"CMD specifies the command that will be executed when the container runs, while RUN executes commands during the build process",
"CMD executes commands during the build process, while RUN specifies the command that will be executed when the container runs",
"CMD and RUN both execute commands during the build process, but CMD has a higher priority",
"CMD and RUN both specify the command that will be executed when the container runs, but RUN has a higher priority"
],
correctAnswer: 0,
explanation: "The primary difference between the CMD and RUN instructions in a Dockerfile lies in their purpose and timing of execution. The CMD instruction specifies the default command that will be executed when the container starts running, whereas the RUN instruction executes commands during the Docker image build process.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "47",
  question: "In a multistage Dockerfile, how can you copy a binary from one stage to another?",
options: [
"By using the COPY directive with the --from flag",
"By using the ADD directive",
"By using the RUN directive with cp command",
"By using the ENV directive"
],
correctAnswer: 0,
explanation: "In a multistage Dockerfile, you can copy a binary from one stage to another by using the COPY directive with the --from flag. The --from flag specifies the stage from which to copy the file. For example: COPY --from=build /path/to/binary /path/to/destination. This allows you to leverage the benefits of multistage builds, such as reducing the final image size and improving security.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "48",
  question: "What is the function of the Logical AND operator (&&) in a Dockerfile?",
options: [
"To run multiple commands in parallel",
"To run multiple commands in sequence, only if the previous command is successful",
"To run multiple commands in a single layer, regardless of their success",
"To check if multiple conditions are true"
],
correctAnswer: 1,
explanation: "In a Dockerfile, the Logical AND operator (&&) is used to chain multiple commands together, so that they are executed only if the previous command completes successfully (i.e., exits with a zero status code). If any of the preceding commands fail, the subsequent commands will not be executed.",
topic: "container-orchestration",
difficulty: "easy"
},{
  id: "49",

question: "What was the purpose of the adduser command in our Dockerfile?",
options: [
"To create a new user with full privileges",
"To create a new user with reduced privileges",
"To add an existing user to a group",
"To change the password of an existing user"
],
correctAnswer: 1,
explanation: "The adduser command in our Dockerfile was used to create a new user with reduced privileges. By creating a non-root user, we can avoid running our application with root privileges, which reduces the attack surface and improves security. Additionally, using a non-root user helps prevent accidental modifications to system files.",
topic: "container-orchestration",
difficulty: "easy"},{
  id: "50",
  question: "What is the primary function of Container Orchestration?",
options: [
"Web development",
"Supporting the operational needs in running containers",
"Data storage and backup",
"Enhancing graphics for applications"
],
correctAnswer: 1,
explanation: "Container Orchestration is primarily responsible for supporting the operational needs in running containers, such as deployment, scaling, networking, and management of containerized applications.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: "51",
  question: "Which of these is a means of expanding Kubernetes to have functionality outside of core functionality?",
options: [
"Docker Swarm",
"OpenShift",
"CRDs",
"Kubernetes Core"
],
correctAnswer: 2,
explanation: "CRDs (Custom Resource Definitions) are a means of expanding Kubernetes to have functionality outside of its core features. CRDs allow developers to define new resources and APIs that can be used to extend the Kubernetes platform. By creating custom resources, developers can add new features and functionality to their clusters without having to modify the underlying Kubernetes codebase.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: "52",
  question: "What is the primary benefit of Container Orchestration in the deployment of complex applications?",
options: [
"It allows you to bypass security protocols",
"It standardises the deployment and integrates with components like networking, storage, security, and autoscaling",
"It replaces the need for software developers",
"It significantly reduces the cost of hardware infrastructure"
],
correctAnswer: 1,
explanation: "The primary benefit of Container Orchestration in the deployment of complex applications is that it standardizes the deployment process and integrates with various components like networking, storage, security, and autoscaling. This enables developers to focus on writing code, rather than worrying about the underlying infrastructure.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: "53",
  question: "In the context of Container Orchestration, what is the purpose of 'self-healing'?",
options: [
"Recovering hardware failures",
"Automatically fixing or replacing containers when they fail",
"Upgrading software versions",
"Reducing the number of containers in use"
],
correctAnswer: 1,
explanation: "The purpose of self-healing in Container Orchestration is to automatically fix or replace containers when they fail. This ensures that the application remains available and running smoothly, even if one or more containers experience issues.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: "54",
  question: "Which component is responsible for spawning and running containers in a Kubernetes architecture?",
options: [
"Kubelet",
"Control-Plane",
"Low-Level Container Runtime",
"High-Level Container Runtime"
],
correctAnswer: 2,
explanation: "The Low-Level Container Runtime (e.g. runc) is a component that’s responsible for actually running the containers in a Kubernetes architecture. It interacts with the Kubelet to manage the lifecycle of containers on each node.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: "55",
  question: "Which component is responsible for spawning and running containers in a Kubernetes architecture?",
options: [
"Kubelet",
"Control-Plane",
"Low-Level Container Runtime",
"High-Level Container Runtime"
],
correctAnswer: 2,
explanation: "The Low-Level Container Runtime (e.g. runc) is a component that’s responsible for actually running the containers in a Kubernetes architecture. It interacts with the Kubelet to manage the lifecycle of containers on each node.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: "56",
  question: "What is the role of the Kubelet in the Kubernetes architecture?",
options: [
"It handles leader elections and network partitions",
"It acts as the Kubernetes component for maintaining Pods",
"It is the main gateway for access to the Kubernetes cluster",
"It handles the installation of Low-Level Container Runtime"
],
correctAnswer: 1,
explanation: "The Kubelet acts as the primary node agent that runs on each machine in a Kubernetes cluster. Its main responsibility is to maintain the state of Pods (collections of containers) on its host machine. It communicates with the API server and other components to ensure that the desired state of the Pod is maintained.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: "57",
  question: "What is the role of the Kube-Api Server in the Kubernetes architecture?",
options: [
"It is responsible for running the containers",
"It schedules tasks according to constraints and resources",
"It acts as the central point of the Kubernetes cluster and provides a RESTful API interface",
"It runs as a daemon-set on every control-plane instance and every node"
],
correctAnswer: 2,
explanation: "The Kube-Api Server acts as the central entry point for the Kubernetes cluster, providing a RESTful API interface to other components and external clients. It handles incoming requests, authenticates and authorizes them, and then routes them to the appropriate component for processing.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: "58",
  question: "What is the function of the Kube-Scheduler in the Kubernetes architecture?",
options: [
"It determines which Nodes are valid placements for Pods according to constraints and resources",
"It is used as the source of truth and the backing store for all data",
"It provides a RESTful API interface and stores all data",
"It handles the installation of Low-Level Container Runtime"
],
correctAnswer: 0,
explanation: "The Kube-Scheduler, also known as the Scheduler, is responsible for determining which nodes in a Kubernetes cluster are valid placements for pods based on various constraints and resource requirements. It takes into account factors such as node labels, taints, affinity, anti-affinity, and available resources when making scheduling decisions.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: "59",
  question: "What role does the Kube-Proxy play in the Kubernetes infrastructure?",
options: [
"It dynamically configures TCP/UDP and SCTP Forwarding on the system that it runs",
"It handles leader elections and network partitions",
"It acts as the central point of the Kubernetes cluster",
"It is the Kubernetes component for maintaining Pods"
],
correctAnswer: 0,
explanation: "The Kube-Proxy, also known as the Proxy, is a network proxy that runs on each node in a Kubernetes cluster. Its primary function is to dynamically configure TCP/UDP and SCTP forwarding on the system it runs on, allowing pods to communicate with each other even if they are not running on the same host.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '60',
question: "What is the role of the Controller-Manager in the Kubernetes architecture?",
options: [
"It is a control loop that monitors the state of your cluster and makes or requests changes",
"It determines which Nodes are valid placements for Pods according to constraints and resources",
"It provides network access and connectivity to your applications",
"It bridges functionality of the cloud provider to the Kubernetes server"
],
correctAnswer: 0,
explanation: "The Controller-Manager, also known as the controller-manager, is a component in the Kubernetes control plane that runs control loops to monitor the state of the cluster and make or request changes to achieve the desired state.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '61',
  question: "Which component bridges functionality of the cloud provider to the Kubernetes server?",
options: [
"Kubelet",
"Controller-Manager",
"Kube-Proxy",
"Cloud-Controller-Manager"
],
correctAnswer: 3,
explanation: "The Cloud Controller Manager (CCM) bridges functionality of the cloud provider to the Kubernetes server. It acts as an interface between the Kubernetes server and the underlying cloud infrastructure, enabling features such as: Node management (creating and deleting nodes in the cloud), Persistent volumes (managing persistent storage for pods), Load balancing (creating and managing load balancers for services). The CCM provides a way to integrate cloud-specific features into Kubernetes.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '62',
  question: "How do nodes in a highly available Kubernetes configuration connect to the API server?",
options: [
"They connect via the loadbalancer",
"They connect directly to the API server",
"They use the RAFT consensus protocol",
"They connect via a VPN tunnel"
],
correctAnswer: 0,
explanation: "In a highly available Kubernetes configuration, nodes typically connect to the API server through a load balancer. The load balancer distributes incoming traffic across multiple replicas of the API server, ensuring that the cluster remains accessible even if one or more API servers become unavailable. By using a load balancer, nodes can connect to the API server without needing to know the IP address of a specific API server instance.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '63',
  question: "Which command would you use to view the logs of a container that has crashed and restarted?",
options: [
"kubectl logs pod/<pod_name> -c <container_name> -p",
"kubectl logs pod/<pod_name> -c <container_name>",
"kubectl logs pod/<pod_name> -c <container_name> --tail=100",
"kubectl describe pod/<pod_name> -c <container_name>"
],
correctAnswer: 0,
explanation: "The '-p' flag (or '--previous') is used to retrieve the logs from a previous instance of the container in case it has crashed and restarted. This allows you to see the logs from the crashed container instance.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '64',
  question: "In Kubernetes, what is the purpose of a sidecar container in a pod?",
options: [
"To replicate the main container in case it fails",
"To perform a specific task in tandem with the main container",
"To run as a backup of the main container",
"To monitor the performance of the main container"
],
correctAnswer: 1,
explanation: "A sidecar container is a secondary container that runs alongside the main container in a pod, typically performing a specific task that complements or enhances the functionality of the main container. Examples include logging, monitoring, or proxying traffic to the main container.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '65',
  question: "Which command is used to execute an interactive shell inside a running container in a Kubernetes pod?",
options: [
"kubectl shell <pod_name> -c <container_name>",
"kubectl exec -it <pod_name> -c <container_name> -- bash",
"kubectl exec <pod_name> -it <container_name> -- bash",
"kubectl connect <pod_name> -c <container_name> -- bash"
],
correctAnswer: 1,
explanation: "The command 'kubectl exec -it <pod_name> -c <container_name> -- bash' is used to execute an interactive shell inside a running container in a Kubernetes pod. The '-it' flags allow for an interactive terminal session.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '66',
  question: "Which Linux namespace is the default shared in a Kubernetes Pod?",
options: [
"Mount",
"User",
"Network",
"UTS"
],
correctAnswer: 2,
explanation: "The Network namespace is the default shared namespace in a Kubernetes Pod. All containers in a pod share the same network namespace, which means they share the same IP address and port space. This allows them to communicate with each other as if they were on the same host.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '67',
  question: "In a Kubernetes Pod, what is used to run tasks that must complete successfully before the main application containers start?",
options: [
"Sidecar Containers",
"DaemonSets",
"Init Containers",
"Service Containers"
],
correctAnswer: 2,
explanation: "Init Containers are specialized containers in a Pod that run before the main application containers start. They are designed to perform initialization tasks, such as setting up environment variables, creating directories, or waiting for dependencies to become available. If an Init Container fails, the Pod will not start, ensuring that the main application containers only begin running once all necessary prerequisites have been met.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '68',
  question: "How can you run a pod in a specific namespace in Kubernetes?",
options: [
"kubectl run pod --nsp=mynamespace",
"kubectl run pod --n=mynamespace",
"kubectl -n mynamespace run pod",
"kubectl --ns=mynamespace run pod"
],
correctAnswer: 2,
explanation: "To run a pod in a specific namespace in Kubernetes, you can use the kubectl command with the -n option (or --namespace) followed by the name of your namespace and then the 'run' subcommand. For example: kubectl -n mynamespace run pod. This will create and run a new pod within the specified namespace.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '69',
  question: "What command will change the current context to use a specific namespace?",
options: [
"kubectl config set-context --current --namespace=mynamespace",
"kubectl config set-context --namespace=mynamespace",
"kubectl set-context --current --namespace=mynamespace",
"kubectl context set --current --namespace=mynamespace"
],
correctAnswer: 0,
explanation: "The command kubectl config set-context --current --namespace=mynamespace will change the current context to use a specific namespace, named 'mynamespace'. In Kubernetes, contexts determine which cluster and namespace you are interacting with when using the kubectl command-line tool. By specifying --current, you are updating the currently selected context.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '70',
  question: "What is the function of Kubernetes Deployment?",
options: [
"It offers a non-declarative way to manage applications",
"It decreases the number of Pod Replicas",
"It provides an object that delivers declarative updates for applications",
"It serves to manually manage Pods"
],
correctAnswer: 2,
explanation: "A Kubernetes Deployment provides an object that delivers declarative updates for applications. With Deployments, you describe the desired state of your application (e.g., number of replicas, container images, ports), and the Deployment controller ensures the actual state matches this description. This approach allows for easy rolling updates, scaling, and management of stateless or stateful applications.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '71',
  question: "What is the effect of changing the image of a Deployment?",
options: [
"It creates a new Deployment",
"It removes the current ReplicaSet",
"It creates a new ReplicaSet",
"It has no significant effect"
],
correctAnswer: 2,
explanation: "When you change the image of a Deployment, Kubernetes creates a new ReplicaSet to manage the rollout of the updated application or service. The old ReplicaSet is scaled down to zero replicas, while the new one is scaled up to the desired number of replicas. This process ensures that there's no downtime for your application and allows for a smooth transition between versions.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '72',
  question: "What happens when you roll back to a specific revision of a Deployment?",
options: [
"It erases the entire rollout history",
"It creates a new ReplicaSet",
"It reuses the original ReplicaSet and becomes the latest revision",
"It results in a Deployment failure"
],
correctAnswer: 2,
explanation: "When you roll back to a specific revision of a Deployment, Kubernetes reuses the original ReplicaSet and makes it the latest revision. The ReplicaSet is updated to reflect the changes from the previous revision, and the new revision becomes the current one.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '73',
 
question: "What happens when you delete a Kubernetes Deployment?",
options: [
"The Deployment is deleted, but the linked ReplicaSets remain",
"The linked ReplicaSets are deleted, but the Deployment remains",
"Both the Deployment and the linked ReplicaSets are deleted",
"Neither the Deployment nor the linked ReplicaSets are deleted"
],
correctAnswer: 2,
explanation: "When you delete a Kubernetes Deployment, both the Deployment itself and its associated ReplicaSets are deleted. This ensures that all resources related to the Deployment are removed, including any running replicas and their underlying pods.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '74',
  question: "Which Kubernetes service type allows services to be technically available outside of the cluster, if your nodes IP address are externally accessible?",
options: [
"Headless",
"ClusterIP",
"NodePort",
"ExternalName"
],
correctAnswer: 2,
explanation: "NodePort is a type of service in Kubernetes that allocates a port on each node's IP address, allowing external traffic to reach the service if the nodes' IP addresses are externally accessible. By doing so, services become technically available outside of the cluster, although it still depends on the specific network configuration and security policies.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
id: '75',
question: "What is a 'Headless' service in Kubernetes?",
options: [
"A service that does not use any of the 4 main types of services",
"A ClusterIP service that has no IP",
"A service that cannot be accessed via DNS",
"A NodePort service that does not have any nodes assigned"
],
correctAnswer: 1,
explanation: "A Headless service in Kubernetes is indeed a ClusterIP service that has no IP allocated to it. By doing so, it allows direct access to Pods without going through a service's IP address. Instead, clients can use DNS or environmental variables to find and communicate with the Pods directly.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '76',
  question: "What do EndPoints in Kubernetes represent?",
options: [
"The IP addresses assigned to the nodes that the service points to",
"The IP addresses assigned to the pods that the service points to",
"The storage volumes assigned to the pods",
"The routes assigned to the services in the Kubernetes cluster"
],
correctAnswer: 1,
explanation: "EndPoints in Kubernetes indeed represent the IP addresses and ports assigned to the individual pods that a service points to. When a service is created, Kubernetes automatically creates an EndPoint object that contains the IP addresses and ports of the pods that match the service's selector criteria. This allows the service to forward traffic to the correct pods.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: '77',
  question: "What is the distinguishing feature of a Headless service in Kubernetes?",
options: [
"It exposes a service with an internal IP address",
"It provides a DNS implementation with no proxy, so each pod handles its own traffic",
"It provides an alias for another domain",
"It assigns a specific port on each node to the service"
],
correctAnswer: 1,
explanation: "The distinguishing feature of a Headless service in Kubernetes is indeed that it provides a DNS implementation with no proxy, so each pod handles its own traffic. By creating a Headless service, you can ensure that each pod receives its own IP address and handles incoming requests directly, without relying on a proxy or load balancer.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '78',
  question: "What is the purpose of the ExternalName service type in Kubernetes?",
options: [
"To expose a service with an internal IP address",
"To provide a DNS implementation with no proxy",
"To provide an alias for another domain",
"To assign a specific port on each node to the service"
],
correctAnswer: 2,
explanation: "The purpose of the ExternalName service type in Kubernetes is to provide an alias for another domain. When you create an ExternalName service, you specify a DNS name that points to an external service outside of the Kubernetes cluster. This allows you to access the external service using a consistent name within your cluster, without needing to know its actual IP address or location.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '79',
  question: "How would you specifically define a Headless Service in a Kubernetes YAML specification?",
options: [
"By setting spec.clusterIP: None in the Service YAML specification",
"By setting spec.headless: True in the Service YAML specification",
"By setting spec.type: Headless in the Service YAML specification",
"By setting spec.selector: None in the Service YAML specification"
],
correctAnswer: 0,
explanation: "In a Kubernetes YAML specification, a Headless Service can be defined by setting spec.clusterIP: None. This tells Kubernetes not to assign an IP address to the service and instead return the DNS entries for the pods that match the selector. By doing so, clients can then directly access the pods without going through the service's load balancer.",
topic: "kubernetes-fundamentals",
difficulty: "medium"  
},{
  id: '80',
  question: "In terms of core abstractions provided by Kubernetes for service networking, how many types of services are primarily defined?",
options: [
"Three",
"Four",
"Five",
"Six"
],
correctAnswer: 1,
explanation: "In terms of core abstractions provided by Kubernetes for service networking, four types of services are primarily defined: ClusterIP, NodePort, LoadBalancer, and ExternalName. Each type provides a different way to expose a pod's network interface to other pods or external clients.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '81',
  question: "What is the primary function of a Job in Kubernetes?",
options: [
"To create a single pod and ensure it runs continuously",
"To create one or more pods and ensure a specified number of them successfully terminate",
"To create multiple nodes and ensure they work together in a cluster",
"To manage the scaling of pods within a node"
],
correctAnswer: 1,
explanation: "The Job resource in Kubernetes is designed for batch processing tasks that run to completion, such as data backups or report generation. A Job creates one or more Pods and ensures that a specified number of them successfully terminate, indicating the job has been completed.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '82',
  question: "In a Kubernetes Job, what does the parameter completions: 20 signify?",
options: [
"It specifies the maximum number of retries if the job fails",
"It indicates that the job will create 20 pods overall to do the task",
"It denotes the total number of pods running at any given point in time",
"It refers to the total number of nodes on which the job will run"
],
correctAnswer: 1,
explanation: "In a Kubernetes Job, the parameter completions: 20 signifies that the job will create up to 20 pods overall to complete the task. The Job controller will ensure that at least one pod completes successfully for the job to be considered complete.",
topic: "kubernetes-fundamentals",
difficulty: "medium"
},{
  id: '83',
  question: "What does a CronJob create according to the schedule?",
options: [
"Pods",
"Services",
"Deployments",
"Job objects"
],
correctAnswer: 3,
explanation: "A CronJob creates new Job objects according to its specified schedule. Each time a CronJob runs (e.g., every hour), it generates a new Job object that then triggers the creation of Pods to perform the actual work defined within the Job.",
topic: "kubernetes-fundamentals",
difficulty: "medium"

},{
  id: "84",
question: "What is a significant advantage of using ConfigMaps in Kubernetes?",
options: [
"They provide a centralised location for configuration data on the cluster",
"They increase the speed of pod creation",
"They secure the cluster from external threats",
"They automate the deployment process"
],
correctAnswer: 0,
explanation: "ConfigMaps in Kubernetes provide a centralized location for storing and managing configuration data that can be used by multiple pods and containers within the cluster. This allows for easier management and updating of application configurations, as well as improved scalability and flexibility.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
},{
  id: "85",
    question: "What is the difference between a Secret and a ConfigMap in Kubernetes?",
options: [
"ConfigMaps store sensitive data while Secrets store non-sensitive data",
"Secrets are for storing confidential information while ConfigMaps are for non-secret configuration data",
"Secrets and ConfigMaps serve the same purpose and have no differences",
"Secrets are used for storing an application's code while ConfigMaps are used for storing configuration data"
],
correctAnswer: 1,
explanation: "In Kubernetes, Secrets are used to store confidential information such as passwords, API keys, or certificates, while ConfigMaps are used to store non-secret configuration data such as environment variables, port numbers, or other application settings. The main difference between the two is that Secrets are encrypted at rest and in transit, whereas ConfigMaps are not.",
topic: "kubernetes-fundamentals",
difficulty: "easy"

},{
  id: "86",
  question: "What type is assigned when creating a generic secret in Kubernetes?",
options: [
"TypeGeneric",
"Generic",
"TypeSecret",
"Opaque"
],
correctAnswer: 3,
explanation: "When creating a generic secret in Kubernetes, the type assigned is indeed 'Opaque'. The term 'Opaque' signifies that the secret's contents are not specific to any particular type or format, making it a catch-all for secrets that don't fit into other predefined categories.",
topic: "kubernetes-fundamentals",
difficulty: "easy"
}

]

export const getQuestionsByTopic = (topic: string): Question[] => {
  return questions.filter(q => q.topic === topic);
}

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const getQuestionByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);

}
