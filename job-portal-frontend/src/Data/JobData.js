import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
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
        title:"Experience",
        icon: IconBriefcase,
        options: [
            { value: "Entry Level",  label: "Entry Level"},
            { value: "Intermediate",  label: "Intermediate"},
            { value: "Expert",  label: "Expert"}
        ]
    },
    {
        title:"Job Type",
        icon: IconRecharging,
        options: [
            { value: "Full Time", label: "Full Time" },  
            { value: "Part Time", label: "Part Time" },
            { value: "Contract",  label: "Contract" },
            { value: "Freelance", label: "Freelance" },
            { value: "Internship", label: "Internship" },
        ]
    }
]

const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "New York",
        package: "32 LPA",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform."
    },
    {
        jobTitle: "Sr. UX Designer",
        company: "Netflix",
        applicants: 14,
        experience: "Expert",
        jobType: "Part-Time",
        location: "San Fransisco",
        package: "40 LPA",
        postedDaysAgo: 5,
        description: "Netflix is looking for a Senior UX Designer to enhance our user experience on streaming platforms."
    },
    {
        jobTitle: "Product Designer",
        company: "Microsoft",
        applicants: 58,
        experience: "Intermediate",
        jobType: "Full-Time",
        location: "Remote",
        package: "35 LPA",
        postedDaysAgo: 4,
        description: "Join Microsoft as a Product Designer and contribute to our new LightSpeed LA studio."
    },
    {
        jobTitle: "Product Designer",
        company: "Adobe",
        applicants: 23,
        experience: "Expert",
        jobType: "Part-Time",
        location: "Toronto",
        package: "33 LPA",
        postedDaysAgo: 22,
        description: "Adobe is seeking a part time product designer to help us enhance our user experience. You'll work closely with our team to design features for our platform."
    },
    {
        jobTitle: "Backend Developer",
        company: "Google",
        applicants: 21,
        experience: "Entry",
        jobType: "Full-Time",
        location: "Bangalore",
        package: "38 LPA",
        postedDaysAgo: 8,
        description: "Google is hiring a backend developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems."
    },

]

export {dropdownData, jobList};