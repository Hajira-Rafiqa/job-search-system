import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const fields = [
    {
        label: "Job Title", placeholder: "Enter Job Title", 
        options: ["Designer", "Developer", "Product Manager", "Marketing Specialist", "Data Analyst", 
            "Sales Executive", "Content Writer", "Customer Support"], 
        value: "Software Engineer", leftSection: IconBriefcase
    },
    {
        label: "Company", placeholder: "Enter Company Name", 
        options: ["Google", "Microsoft", "Meta", "Netflix", "Adobe", "Facebook", "Amazon", "Apple", "Spotify"],
        value: "Google", leftSection: IconBriefcase
    },
    {
        label: "Location", placeholder: "Enter Job Location", 
        options: ["Delhi", "New York", "San Fransisco", "London", "Berlin", "Tokyo", "Sydney", "Toronto"],
        value: "New York, United States", leftSection: IconMapPin
    },

]

const skillsData = [
    {   
        options: [
            { value: "React", label: "React" },
            { value: "JavaScript", label: "JavaScript" },
            { value: "Angular", label: "Angular" },
            { value: "HTML", label: "HTML" },
            { value: "Spring Boot", label: "Spring Boot" },
            { value: "Java", label: "Java" },
            { value: "Python", label: "Python" },
            { value: "Data Science", label: "Data Science" },
        ]
    }
]

export {fields, skillsData};