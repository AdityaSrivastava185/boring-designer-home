export const FAQItem = ({
  question,
  answer,
  extra,
}: {
  question: string;
  answer: React.ReactNode;
  extra?: React.ReactNode;
}) => (
  <div className="mb-10">
    <h3 className="mb-4 font-medium uppercase tracking-tighter bebas text-sm text-foreground flex items-center">
      <svg
        className="w-5 h-5 mr-2 text-muted-foreground"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </svg>
      {question}
    </h3>
    <p className="text-muted-foreground bebas text-xs uppercase">{answer}</p>
    {extra && <div className="mt-2">{extra}</div>}
  </div>
);
