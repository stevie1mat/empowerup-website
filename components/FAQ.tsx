"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        "q": "What is MahaCura?",
        "a": "MahaCura helps you understand your cycle, track your period and symptoms, discover menstrual products, and connect with a community. Our goal is to reduce stigma and make menstrual care more accessible."
    },
    {
        "q": "What are MahaCura’s values?",
        "a": "We are building inclusive, user-centred menstrual care for people in Canada. We listen to people who menstruate and design around their needs, comfort, and concerns."
    },
    {
        "q": "Who can use MahaCura?",
        "a": "MahaCura is designed for people who menstruate in Canada, with an app for iOS and Android."
    },
    {
        "q": "Is the app available in French?",
        "a": "MahaCura supports English and French. You can change the language in Settings under Preferences."
    },
    {
        "q": "Does MahaCura sponsor any brands?",
        "a": "No. MahaCura does not sponsor product brands. Recommendations are based on the information you share and the app’s recommendation rules."
    },
    {
        "q": "How are product recommendations made?",
        "a": "Luna uses your onboarding answers, including product comfort, access to clean water and sanitation, material sensitivities, flow, product preferences, priorities, sustainability preferences, and monthly budget. Cycle information and recent symptom logs also help personalize guidance. Missing product information can limit the recommendations available."
    },
    {
        "q": "Is MahaCura a medical device?",
        "a": "MahaCura is a care companion that informs rather than diagnoses. It does not replace medical advice or professional care. Consult a healthcare professional about medical concerns."
    },
    {
        "q": "Who is behind MahaCura?",
        "a": "MahaCura was created with a vision of menstrual equity. Its approach centres on listening to women and other people who menstruate, then building an app that reflects their needs and concerns."
    },
    {
        "q": "Is MahaCura free?",
        "a": "Cycle tracking, symptom logging, product browsing, and reading community posts are free. Free accounts include five CONNECT posts and five Luna messages. The CAD $4.99/month plan unlocks unlimited CONNECT posting, Expert Opinion articles, and Luna chat while the subscription is active."
    },
    {
        "q": "Who is Luna?",
        "a": "Luna is MahaCura’s personalized care companion. She helps you understand your cycle, track patterns, and explore wellness tips, menstrual products, and educational content."
    },
    {
        "q": "How does Luna work?",
        "a": "Luna uses your onboarding preferences and logged cycle information to personalize the experience. Luna Care supports tracking and wellness, while Learn with Luna offers education about cycles, symptoms, and products."
    },
    {
        "q": "Is Luna 100% accurate?",
        "a": "No. Predictions and recommendations may change as you add information. Luna supports and informs you; she does not diagnose medical conditions."
    },
    {
        "q": "Can I use MahaCura if I am under 16?",
        "a": "Ask your parent or guardian to help set up your MahaCura account, give permission to use the app, and choose your privacy settings before you continue."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background" id="faq">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-urbanist font-medium tracking-tight sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? We&apos;ve got answers.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-border/50 rounded-xl overflow-hidden bg-secondary/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-secondary/40 transition-colors"
                                id={`faq-question-${i}`}
                                aria-controls={`faq-answer-${i}`}
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-medium text-foreground text-lg">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                role="region"
                                aria-labelledby={`faq-question-${i}`}
                                aria-hidden={openIndex !== i}
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
