import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'
import { FAQItem } from "@/utils/FaqItem"

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
        <div className='md:px-24'>
            <p className="text-muted-background jetbrains-mono uppercase text-sm text-center pb-7">[ FAQs ]</p>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-center text-foreground text-2xl md:text-5xl uppercase font-bold tracking-tight font-bebas md:tracking-tighter md:max-w-[50%] text-wrap">
                    You have the Question
                </h1>
                <h1 className="text-center text-foreground text-2xl md:text-5xl uppercase font-bold tracking-tight font-bebas md:tracking-tighter md:max-w-[50%] text-wrap">
                    We got the damn asnwers
                </h1>
            </div>
            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="grid pt-8 md:gap-16 md:grid-cols-2 text-left">
                    {/* Left Column */}
                    <div>
                        <FAQItem
                            question="What do you mean by 'Figma assets'?"
                            answer="You will have access to download the full Figma project including all of the pages, components, responsive pages, and also the icons, illustrations, and images included in the screens."
                        />

                        <FAQItem
                            question="What does 'lifetime access' exactly mean?"
                            answer="Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge."
                        />

                        <FAQItem
                            question="How does support work?"
                            answer="Support is provided directly by the authors who worked on this project. Feel free to contact us and we’ll help you out as soon as we can."
                            extra={
                                <p className="text-muted-foreground">
                                    Feel free to{" "}
                                    <a
                                        href="#"
                                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        contact us
                                    </a>{" "}
                                    and we'll help you out as soon as we can.
                                </p>
                            }
                        />

                        <FAQItem
                            question="I want to build more than one project. Is that allowed?"
                            answer="You can use Windster for unlimited projects, whether personal, SaaS, or client work. Just don&apos;t build a competing UI kit, theme, or template."
                            extra={
                                <p className="text-muted-foreground">
                                    Find out more by{" "}
                                    <a
                                        href="#"
                                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                                    >
                                        reading the license
                                    </a>
                                    .
                                </p>
                            }
                        />
                    </div>

                    {/* Right Column */}
                    <div>
                        <FAQItem
                            question="What does 'free updates' include?"
                            answer={
                                <>
                                    Free updates follow our{" "}
                                    <a
                                        href="#"
                                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                                    >
                                        roadmap
                                    </a>
                                    . Additional updates outside the roadmap may also be provided.
                                </>
                            }
                        />

                        <FAQItem
                            question="What does the free version include?"
                            answer={
                                <>
                                    The{" "}
                                    <a
                                        href="#"
                                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                                    >
                                        free version
                                    </a>{" "}
                                    includes minimal style guidelines, component variants, and a mobile-compatible dashboard page. It’s open-source under the MIT license.
                                </>
                            }
                        />

                        <FAQItem
                            question="What is the difference between Windster and Tailwind UI?"
                            answer="Windster includes additional design styles, UI elements, and pages compared to Tailwind UI. It also covers application, marketing, and e-commerce interfaces."
                        />

                        <FAQItem
                            question="Can I use Windster in open-source projects?"
                            answer="Yes, Windster can be used in open-source projects as long as it's not used to build a competing UI kit or template."
                            extra={
                                <p className="text-muted-foreground">
                                    Find out more by{" "}
                                    <a
                                        href="#"
                                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                                    >
                                        reading the license
                                    </a>
                                    .
                                </p>
                            }
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Faqs
