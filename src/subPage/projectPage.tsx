
import profile from '../profile.jpg'


const ProjectPage = () => {

    const projects = [
        {
            projectName: 'Video Analytics System (VAS)',
            describe: "video analysis project",
            link: 'https://www.developer.tech.gov.sg/products/categories/analytics/vas/overview.html'
        },
        {
            projectName: 'GovWallet',
            describe: "e-wallet project",
            link: "https://www.wallet.gov.sg/"
        },
        {
            projectName: 'supplyally',
            describe: "distribution item project",
            link: 'https://www.supplyally.gov.sg/'
        }
    ]

    const listOfProject = () => {

        return projects.map((project) => {
            return (
                <div className="grid grid-flow-row grid-cols-9 my-10">
                    <div className="h-auto col-start-2 col-span-7 sm:col-start-3 sm:col-span-5">
                        <div className="flex h-full flex-col bg-white  p-4  leading-normal">
                            <div className="mt-8 text-center">
                                <div className="text-gray-900 font-bold text-2xl mb-2 underline underline-offset-8">{project.projectName}</div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-700 text-base">{project.describe}</p>
                            </div>
                            {project.link &&
                                (
                                    <div className='text-end'>
                                        <a className="cta-base text-blue-700 hover:text-primary-700 active:text-primary-700 flex justify-end mr-24" href={project.link}>
                                            Project link
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        })

    }


    return (
        <div className="w-full h-screen bg-[#e6dace]">
            <div>
                <div className="grid justify-items-center ">
                    <h1 className='my-6'>Projects</h1>
                </div>
                <div className="grid my-8 grid-flow-row grid-cols-8">
                    <div className='col-start-2 col-span-6'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>

                </div>
                {listOfProject()}

            </div>
        </div>
    )

}

export default ProjectPage;