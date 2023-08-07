
import profile from '../profile.jpg'


const ProjectPage = () => {





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
                <div className="grid grid-flow-row grid-cols-8">
                    <div className="h-48  col-start-2 col-span-4">
                        <div className="flex h-full flex-col bg-white  p-4  leading-normal">
                            <div className="mt-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">Project Name</div>
                            </div>
                            <div className="mt-8">
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-48 col-start-6 col-span-1'>
                    <div className="h-48  lg:w-48 flex-none bg-cover text-center overflow-hidden" title="Woman holding a mug">
                        <img src={profile} alt="Card" />
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default ProjectPage;