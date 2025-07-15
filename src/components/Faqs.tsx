import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'
import { FAQItem } from "@/utils/FaqItem"

const containerQuestionsOne = [{
    id: "01",
    question: "What is Boring Designer?",
    answer: "Boring Designer is a subscription-based web design studio that provides high-quality, custom designs, rapid frontend development, and open-source website maintenance for startups and indie hackers only."
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
    answer: "Yes, you can cancel your subscription at any time. However, we recommend discussing your needs with us before cancellation to ensure you get the most out of our services. We will cancel your subscription and will return 90% of your payment because we also invested energy and time in your project."
},
]

const containerQuestionTwo = [
   {
    id: "05",
    question: "What is the process for getting started?",
    answer: "To get started, simply first schedule a free call to discuss about your project and then subscribe to get started."
},
{
    id: "06",
    question: "Do you offer custom designs?",
    answer: "Yes, we specialize in creating custom designs tailored to your specific business needs and branding."
},
{
    id: "07",
    question: "How long does it take to complete a project?",
    answer: "The timeline for project completion varies based on the complexity of the design and development work. We will provide an estimated timeline during the initial consultation . We will keep you updated through emails and slack support"
},
{
    id: "08",
    question: "What if I need ongoing support after my project is completed?",
    answer: "Our subscription model includes ongoing support and maintenance, ensuring your website remains up-to-date and functional for an estimated time frame."

}
]
const Faqs = () => {
    return (
        <div className='md:px-24'>
            <p className="text-muted-background jetbrains-mono uppercase text-sm md:text-center pb-2 md:pb-7">[ FAQs ]</p>
            <div className="w-full flex flex-col md:items-center md:justify-center">
                <h1 className="md:text-center text-foreground text-2xl md:text-5xl uppercase font-bold tracking-tight font-bebas md:tracking-tighter md:max-w-[50%] text-wrap">
                    You have the Question
                </h1>
                <h1 className="md:text-center text-foreground text-2xl md:text-5xl uppercase font-bold tracking-tight font-bebas md:tracking-tighter max-w-[70%] md:max-w-[50%] text-wrap">
                    We got the damn asnwers
                </h1>
            </div>
            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="grid pt-8 md:gap-16 md:grid-cols-2 text-left">
                    <div>
                        {
                            containerQuestionsOne.map((item) => (
                                <FAQItem
                                    key={item.id}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))} 
                    </div>

                    {/* Right Column */}
                    <div>
                        {
                            containerQuestionTwo.map((item) => (
                                <FAQItem
                                    key={item.id}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Faqs
