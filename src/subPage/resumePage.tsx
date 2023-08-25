

type experienceType = {
    duration: string,
    jobPosition: string,
    companyName: string,
    projectTitle: string,
    projectDescription: string
}

type EducationType = {
    duration: string,
    university: string,
    degree: string,
    location: string,
    description: string
}

type professionalType = {
    skill: string,
}

const resumePage = () => {

    const experienceList: experienceType[] = [
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "VAS",
            projectDescription: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. \n \nI’m a great place for you to tell a story and let your users know a little more about you"
        },
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "GovWallet",
            projectDescription: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. \n \nI’m a great place for you to tell a story and let your users know a little more about you"
        },
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "supplyally",
            projectDescription: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to  the font. \n \nI’m a great place for you to tell a story and let your users know a little more about you"
        },
    ]

    const experienceCard = (cardData: experienceType[]) => {

        return cardData.map((card) => {
            return (
                <div className="w-3/4 sm:w-5/12 flex flex-col sm:flex-row bg-white p-4 leading-normal mt-10">
                    <div className="w-full sm:w-1/2 flex space-y-2 flex-col p-5 sm:p-8">
                        <span className="font-bold text-xl text-rose-700">{card.duration}</span>
                        <span className="uppercase">{card.jobPosition}</span>
                        <span >{card.companyName}</span>
                    </div>
                    <div className="w-full sm:w-1/2 space-y-2  p-5 sm:p-8">
                        <span className="font-semibold text-xl  sm:m-10">{card.projectTitle}</span>
                        <p className="whitespace-pre-line">
                            {card.projectDescription}
                        </p>
                    </div>
                </div>
            )
        })
    }

    const educationList: EducationType[] = [
        {
            duration: '2018 - 2019',
            degree: "System Analysis",
            university: "National University of Singapore",
            location: "Singapore",
            description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to  the font. \n \nI’m a great place for you to tell a story and let your users know a little more about you"
        },
        {
            duration: '2012 - 2016',
            degree: "Mechanical Engineering",
            university: "Anna University ",
            location: "India",
            description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to  the font. \n \nI’m a great place for you to tell a story and let your users know a little more about you"
        },
    ]
    const educationCard = (cardData: EducationType[]) => {

        return cardData.map((card) => {
            return (
                <div className="w-3/4 sm:w-5/12 flex flex-col sm:flex-row bg-white p-4 leading-normal mt-10">
                    <div className="w-full sm:w-1/2 flex space-y-2 flex-col p-5 sm:p-8">
                        <span className="font-bold text-xl text-rose-700">{card.duration}</span>
                        <span className="uppercase">{card.degree}</span>
                        <span >{card.university}</span>
                        <span >{card.location}</span>
                    </div>
                    <div className="w-full sm:w-1/2 ">
                        <p className="p-5 sm:p-5">
                            {card.description}
                        </p>
                    </div>
                </div>
            )
        })
    }

    const professionalList: professionalType[] = [
        {
            skill: 'Python',
        },
        {
            skill: 'node',
        }
        ,
        {
            skill: 'TypeScript',
        },
        {
            skill: 'AI',
        }
        ,
        {
            skill: 'Java',
        }
        ,
        {
            skill: 'C#',
        }
        ,
        {
            skill: 'Android',
        }
    ]
    const professionalCard = (cardData: professionalType[]) => {
        return cardData.map((card) => {
            return (
                <div className="flex flex-row space-x-2 my-2 items-center">
                    <p className="bg-blue-600 h-2 w-2"></p>
                    <span className="" >{card.skill}</span>
                </div>
            )
        })
    }

    return (
        <div className="w-full h-full bg-[#e6dace]">
            <div className="grid justify-items-center ">
                <h6 className="py-12 sm:py-24 text-xl sm:text-3xl font-bold">Resume</h6>

            </div>
            <div className="grid justify-items-center ">
                <div className="w-3/4 sm:w-5/12 mb-6">
                    <h2 className="font-bold text-xl sm:text-3xl">Experience</h2>
                </div>
                {experienceCard(experienceList)}
            </div>
            <div className="grid justify-items-center ">
                <div className="w-3/4 sm:w-5/12 mt-16">
                    <h2 className="font-bold text-xl sm:text-3xl">Education</h2>
                </div>
                {educationCard(educationList)}
            </div>
            <div className="grid justify-items-center ">
                <div className="w-3/4 sm:w-5/12 flex flex-col bg-white p-4 leading-normal mt-10">
                    <h2 className="font-bold text-xl sm:text-3xl p-5 pb-0 sm:pb-0 sm:p-8 sm:pb-0">Professional Skill</h2>
                    <div className="w-full grid grid-cols-2 p-5 sm:p-8">
                        {professionalCard(professionalList)}
                    </div>
                </div>
            </div>
            <div className="h-24" ></div>
        </div>
    )
}

export default resumePage