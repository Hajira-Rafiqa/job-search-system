import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields = [
    {   
        title: "Job Title", 
        icon: IconSearch,
        options: [
            { value: "Designer", label: "Designer" },
            { value: "Developer", label: "Developer" },
            { value: "Product Manager", label: "Product Manager" },
            { value: "Marketing Specialist", label: "Marketing Specialist" },
            { value: "Data Analyst", label: "Data Analyst" },
            { value: "Sales Executive", label: "Sales Executive" },
            { value: "Content Writer", label: "Content Writer" },
            { value: "Customer Support", label: "Customer Support" },
        ]
    },

    {
        title:"Location",
        icon: IconMapPin,
        options: [
            { value: "Delhi", label: "Delhi" },
            { value: "New York", label: "New York" },
            { value: "London", label: "London" },
            { value: "Berlin", label: "Berlin" },
            { value: "Tokyo", label: "Tokyo" },
            { value: "Sydney", label: "Sydney" },
            { value: "Toronto", label: "Toronto" },
            { value: "Mexico", label: "Mexico" },
        ]
    },
    {
        title:"Skills",
        icon: IconRecharging,
        options: [
            { value: "HTML",  label: "HTML"},
            { value: "CSS",  label: "CSS"},
            { value: "JavaScript",  label: "JavaScript"},
            { value: "React",  label: "React"},
            { value: "Angular",  label: "Angular"},
            { value: "NodeJS",  label: "NodeJS"},
            { value: "Python",  label: "Python"},
            { value: "Java",  label: "Java"},
            { value: "Ruby",  label: "Ruby"},
            { value: "PHP",  label: "PHP"},
            { value: "SQL",  label: "SQL"},
            { value: "MongoDB",  label: "MongoDB"},

        ]
    }
]

const talents = [
    {
        name: "Jarrod Wood",
        role: "Software Engineer",
        company: "Google",
        topSkills: ["React", "SpringBoot", "MongoDB"],
        about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My experties lies in integrating front-end and back-end.",
        expectedCtc: "₹48-60 LPA",
        location: "New York, United States",
        image: "avatar"
    },
    {
        name: "Alice Johnson",
        role: "Manager",
        company: "Microsoft",
        topSkills: ["Excel", "Word"],
        about: "As a Software Engineer at Microsoft, I specialize in handling large sized teams. I work in building UI components and backend part of web applications.",
        expectedCtc: "₹30-35 LPA",
        location: "Mumbai",
        image: "avatar"
    },
    {
        name: "Christopher",
        role: "UI Developer",
        company: "Adobe",
        topSkills: ["React", "SpringBoot", "MongoDB"],
        about: "As a UI developer I work in building UI components and backend part of web applications. I specialize in handling large sized teams.",
        expectedCtc: "₹18-20 LPA",
        location: "Pune",
        image: "avatar"
    },
    {
        name: "Alice Joseph",
        role: "Data Scientist",
        company: "Meta",
        topSkills: ["Python", "Machine Learning"],
        about: "I work on data visualization, EDA and data wrangling methods to clean and understand the data. I also work on building ML models which are scalable to work on large datasets.",
        expectedCtc: "₹28-30 LPA",
        location: "Bangalore",
        image: "avatar"
    }
];

const profile = {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "I am interested in Parallel programming and making use of the available parallel hardware systems to drive the performance of applications. This also relates to my interest in Compilers and Program Analysis for automatic code generation for various architectures along with optimizations. This area has been my research topic for my Masters. Photography is my other creative part which is in exploration phase.",
    skills: ["React1", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "NodeJS", "Express JS", "MySQL"],
    experience: [
        {
            title: "Software Engineer II",
            company: "Google", 
            location: "New York, United States",
            startDate: "Apr 2022",
            endDate: "Present",
            description: "A LLVM Based Compiler backend for the 8-bit micro controller.We developed Code generation strategies for generating efficient code for Micro-controller."
        },
        {
            title: "Software Engineer I",
            company: "Cisco", 
            location: "New York, United States",
            startDate: "Jan 2018",
            endDate: "Apr 2022",
            description: "Cisco UCS Integration for Rack Servers and Standalone Rack Server management. I worked in the development of Baseboard Management Controller(BMC) for Servers which is used to control the servers in the virtualization environment. The software is used to remotely control and change the behavior of many servers connected to a Data center management."
        },
    ],
    certifications: [
        {
            name: "Google Professional Data Scientist",
            issuer: "Google",
            issueDate: "Aug 2023",
            certificateId: "CB72982GG"
        },
        {
            name: "Microsoft Certified Azure Solutions Architect Expert",
            issuer: "Microsoft",
            issueDate: "May 2022",
            certificateId: "MS1239AZ"
        },

    ]
    
    
}

export {searchFields, talents, profile};