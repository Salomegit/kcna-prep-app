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
