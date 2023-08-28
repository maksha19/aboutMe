import { useState } from "react";



const ContactPage = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit =() => {
        console.log({
            firstName,lastName,email,subject,message
        })
    }

    return (
        <div className="w-full h-screen h-full bg-[#e6dace]">
            <div className="grid grid-flow-row grid-cols-9 mt-10">
                <div className="h-auto col-start-2 col-span-7 sm:col-start-3 sm:mt-44  sm:col-span-5">
                    <div className="flex h-full flex-col bg-white p-4  shadow-xl leading-normal">
                        <div>
                            <div>
                                <span>First Name</span>
                                <input type="text" className="border-b-4 border-slate-400"  onChange={(e)=> setFirstName(e.target.value)}/>
                            </div>
                            <div>
                                <span>Last Name</span>
                                <input type="text" className="border-b-4 border-slate-400" onChange={(e)=> setLastName(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Email</span>
                                <input type="email" className="border-b-4 border-slate-400" onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Subject</span>
                                <input type="text" aria-aria-multiline className="border-b-4 border-slate-400" onChange={(e)=> setSubject(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Message</span>
                                <input type="text" aria-multiline className="border-b-4 border-slate-400" onChange={(e)=> setMessage(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <button className="rounded-full w-32 bg-[#0050ff] text-white" onClick={()=> onSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactPage;