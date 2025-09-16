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
