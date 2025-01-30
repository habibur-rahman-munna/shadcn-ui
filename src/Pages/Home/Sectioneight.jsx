import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sectioneight = () => {
  const [activeTab, setActiveTab] = useState("item-1");

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex justify-center mb-6 space-x-4">
          {[
            { id: "item-1", label: "General" },
            { id: "item-2", label: "Technical" },
            { id: "item-3", label: "Payment" },
            { id: "item-4", label: "License" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-full border ${
                activeTab === tab.id
                  ? "bg-black text-white dark:text-white dark:bg-gray-900 "
                  : "bg-white text-gray-500 border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">How many have purchased Achromatic so far?</AccordionTrigger>
              <AccordionContent>
              More than 300 licenses have been sold already. Ranging from solopreneurs to enterprise with multiple teams. Keep in mind we released the first version around September 2024.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">What do I get exactly with Achromatic?</AccordionTrigger>
              <AccordionContent>
              With Achromatic, you receive lifetime access to a comprehensive SaaS starter kit based on Next 15 and React 19. This includes the full source code and access to the GitHub repository. The package features a robust authentication system, organization and member management, Stripe billing integration, profile mangement, a dashboards, detailed examples for master/detail page layouts and pre-built components. It's built with the App Router and uses TypeScript for improved type safety and developer experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">How often is Achromatic updated?</AccordionTrigger>
              <AccordionContent>
              We update the GitHub repository multiple times a week with bug fixes, improvements and new features. Major releases, which bundle these changes, are typically rolled out every few months. We're committed to keeping Achromatic current with the latest stable versions of Next and React.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Do I need to be an expert to use Achromatic?</AccordionTrigger>
              <AccordionContent>
              While you don't need to be an expert, you should be comfortable with React and TypeScript. Familiarity with Next is beneficial but not required. We provide comprehensive documentation and examples to help you get started quickly, regardless of your expertise level.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Sectioneight;
