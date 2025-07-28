import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Template {
  id: string | number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCards: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <div>
            <div className="max-w-xs border border-border rounded-lg shadow-sm overflow-hidden">
                <Link href={template.href ?? "#"} className="">
                    <img className="rounded-t-lg object-center" src={template.imageSrc} alt={template.imageAlt} />
                </Link>
            </div>
        </div>
    )
}

export default TemplateCards
