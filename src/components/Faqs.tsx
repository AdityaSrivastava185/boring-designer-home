import React from 'react'

const containerQuestionsOne = [{
    id: "01",
    question: "What is Boring Designer?",
    answer: "Boring Designer is a subscription-based web design service that provides high-quality, custom UI/UX designs, rapid frontend development, and open-source website maintenance for startups and indie hackers."
},
{
    id: "02",
    question: "How does the subscription model work?",
    answer: "The subscription model allows you to pay a monthly fee for ongoing design and development services, ensuring you have continuous support and updates for your website."
},
{
    id: "03",
    question: "What types of businesses can benefit from Boring Designer?",
    answer: "Boring Designer is ideal for startups, indie hackers, and any business looking for high-converting, minimalistic web design that enhances their online presence."
},
{
    id: "04",
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. However, we recommend discussing your needs with us before cancellation to ensure you get the most out of our services."
},
{
    id: "05",
    question: "What is the process for getting started?",
    answer: "To get started, simply subscribe to one of our plans, and we will reach out to discuss your design needs and project requirements."
},
{
    id: "06",
    question: "Do you offer custom designs?",
    answer: "Yes, we specialize in creating custom designs tailored to your specific business needs and branding."
},
{
    id: "07",
    question: "How long does it take to complete a project?",
    answer: "The timeline for project completion varies based on the complexity of the design and development work. We will provide an estimated timeline during the initial consultation."
},
{
    id: "08",
    question: "What if I need ongoing support after my project is completed?",
    answer: "Our subscription model includes ongoing support and maintenance, ensuring your website remains up-to-date and functional."

}
]

const Faqs = () => {
    return (
        <div className='md:pt-17 py-7 md:py-0'>
            <div className=' max-w-[50%] md:max-w-[50%]'>
                 <p className="text-muted-background font-mono uppercase text-sm">[ FAQs ]</p>
                <h1 className='md:mt-7 text-left text-foreground md:text-5xl capitalize font-bold tracking-tight bebas text-3xl font-bebas md:tracking-tighter'>everything you need to know</h1>
            </div>
            <div className='flex flex-col  md:items-center md:justify-center inset-0 w-full h-auto mx-auto md:my-10 '>
                <div className='divide-y-2 divide-dashed divide-secondary-border w-full '>
                    {
                        containerQuestionsOne.map((item, index) => (
                            <div key={index} className='md:my-10 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-start md:gap-24'>
                                <div className='flex items-center justify-center h-6 w-6 bg-foreground text-background rounded-full text-xs font-bold uppercase p-6 my-3 md:my-0'>
                                    {item.id}
                                </div>
                                <h2 className='text-foreground text-sm capitalize bebas text-wrap md:max-w-[10vw] '>{item.question}</h2>
                                <p className='text-muted-foreground text-sm py-2 capitalize bebas text-wrap md:max-w-[50vw]'>{item.answer}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Faqs
