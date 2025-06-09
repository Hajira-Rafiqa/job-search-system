const fields = [
    {
        label: "Job Title", placeholder: "Enter Job Title", options:["Designer", "Developer", "Product Manager", 
        "Marketing Specialist", "Data Analyst", "Sales Executive", "Content Writer", "Customer Support"]
    },
    {
        label: "Company", placeholder: "Enter Company Name", options:["Google", "Microsoft", "Meta", 
        "Netflix", "Adobe", "Facebook", "Amazon", "Apple", "Spotify"]
    },
    {
        label: "Experience", placeholder: "Enter Experience Level", options:["Entry Level", "Intermediate", 
            "Expert"]
    },
    {
        label: "Job Type", placeholder: "Enter Job Type", options:["Full Time", "Part Time", "Contract", 
        "Freelance", "Internship"]
    },
    {
        label: "Location", placeholder: "Enter Job Location", options:["Delhi", "New York", "San Fransisco", 
        "London", "Berlin", "Tokyo", "Sydney", "Toronto"]
    },
    {
        label: "Salary", placeholder: "Enter Salary", options:["10 LPA", "15 LPA", "20 LPA", 
        "25 LPA", "30 LPA", "35 LPA", "40 LPA", "45 LPA"]
    }
]


const content = 
    '<h4>About the Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>';


const skillsData = [
    {   
        options: [
            { value: "React", label: "React" },
            { value: "JavaScript", label: "JavaScript" },
            { value: "Angular", label: "Angular" },
            { value: "HTML", Angularlabel: "HTML" },
            { value: "Spring Boot", label: "Spring Boot" },
            { value: "Java", label: "Java" },
            { value: "Python", label: "Python" },
            { value: "Data Science", label: "Data Science" },
        ]
    }
]

export {fields, content, skillsData};