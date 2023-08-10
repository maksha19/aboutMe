

type experienceType ={
    duration: string,
    jobPosition:string,
    companyName:string,
    projectTitle:string,
    projectDescription:string
}

type EducationType ={
    duration: string,
    university:string,
    degree:string,
    location:string,
    description:string
}

const resumePage = () => {

    const experienceList :experienceType[] = [
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "VAS",
            projectDescription: "Employ"
        },
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "GovWallet",
            projectDescription: "Employ"
        },
        {
            duration: "2020 - Present",
            jobPosition: "Senior Software Engineer",
            companyName: "GovTech Singapore",
            projectTitle: "supplyally",
            projectDescription: 'Employ'
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
                    <div className="w-full sm:w-1/2 sm:p-8">
                        <span className="font-semibold text-xl p-5 sm:m-10">{card.projectTitle}</span>
                        <p className="p-5 sm:p-5">
                            {card.projectDescription}
                        </p>
                    </div>
                </div>
            )
        })
    }

    const educationList :EducationType[] = [
        {
            duration: '2018 - 2019',
            degree: "System Analysis",
            university: "National University of Singapore",
            location: "Singapore",
            description:"Student"
        },
        {
            duration: '2012 - 2016',
            degree: "Mechanical Engineering",
            university: "Anna University ",
            location: "India",
            description:"Student"
        }
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

    return (
        <div className="w-full h-full bg-[#e6dace]">
            <div className="grid justify-items-center ">
                <h6 className="py-12 sm:py-24">Resume</h6>

            </div>
            <div className="grid justify-items-center ">
                <div className="w-3/4 sm:w-5/12 mb-6">
                    <h2>Experience</h2>
                </div>
                {experienceCard(experienceList)}
            </div>
            <div className="grid justify-items-center ">
                <div className="w-3/4 sm:w-5/12 mt-16">
                    <h2>Education</h2>
                </div>
                {educationCard(educationList)}
            </div>
            <div className="h-24" ></div>
        </div>
    )
}

export default resumePage