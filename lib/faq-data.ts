export type FaqItemData = { 
  q: string; 
  a: string; 
  icon: string; 
};

// Landing page FAQ items
export const LANDING_FAQ_ITEMS: FaqItemData[] = [
  {
    q: "Is there a cost to join as a provider?",
    a: "No. Nara is completely free for therapists. There are no sign-up or subscription fees.",
    icon: "Money",
  },
  {
    q: "How is patient privacy handled?",
    a: "We're HIPAA-compliant. Patient data is encrypted, and AI summaries are only visible with explicit consent.",
    icon: "ShieldTick",
  },
  {
    q: "Can I customise the homework assignments?",
    a: "Yes! You can create custom assignments tailored to each client's needs, or choose from our library of evidence-based exercises. Track progress and send reminders automatically.",
    icon: "DocumentText",
  },
  {
    q: "What does AI chat visibility look like?",
    a: "You'll see a summary of the client's AI interactions—only after they give permission. This helps you stay informed between sessions.",
    icon: "SmsStar",
  },
];

// Therapist-specific FAQ items
export const THERAPIST_FAQ_ITEMS: FaqItemData[] = [
  {
    q: "How does Nara integrate with my existing practice?",
    a: "Nara seamlessly integrates with your current workflow. You can import client data, sync with your calendar, and use our API to connect with other practice management tools.",
    icon: "UserOctagon",
  },
  {
    q: "What training is provided for therapists?",
    a: "We provide comprehensive onboarding, video tutorials, live webinars, and ongoing support to help you get the most out of Nara's features.",
    icon: "Book",
  },
  {
    q: "Can clients use Nara without my supervision?",
    a: "Clients can access their assigned homework and mood tracking independently, but all therapeutic content and AI interactions are designed to complement, not replace, your professional guidance.",
    icon: "Messages2",
  },
  {
    q: "How is patient privacy handled?",
    a: "We're HIPAA-compliant. Patient data is encrypted, and AI summaries are only visible with explicit consent.",
    icon: "ShieldTick",
  },
];

// Client-focused FAQ items
export const CLIENT_FAQ_ITEMS: FaqItemData[] = [
  {
    q: "Can I connect with a licensed therapist through Nara?",
    a: "Of course, you can. We match you with the best therapist from our pool of experts based on your needs.",
    icon: "UserOctagon",
  },
  {
    q: "How much does a therapy session cost on Nara?",
    a: "Therapy sessions through Nara are significantly more affordable than traditional therapy, with costs starting at just $20 per session compared to $200+ elsewhere.",
    icon: "Money",
  },
  {
    q: "Who is Nara Therapy designed for?",
    a: "Nara is designed for anyone seeking mental health support, whether you're new to therapy or looking to enhance your existing therapeutic journey.",
    icon: "UserOctagon",
  },
  {
    q: "Is my information safe and confidential on Nara?",
    a: "Yes, your data is encrypted and HIPAA-compliant. Only you and your therapist (with your permission) can access your information.",
    icon: "ShieldTick",
  },
  {
    q: "Is Nara Therapy backed by research and evidence-based practices?",
    a: "Absolutely. Nara's features are built on evidence-based therapeutic practices and are continuously validated through research and clinical studies.",
    icon: "Book",
  },
  {
    q: "How does Nara support me between therapy sessions?",
    a: "Nara provides daily mood tracking, AI-powered support conversations, homework assignments, and gratitude prompts to keep you engaged with your mental health journey.",
    icon: "Messages2",
  },
  {
    q: "Do I need previous therapy experience to use Nara?",
    a: "No previous therapy experience is required. Nara is designed to be accessible to everyone, whether you're new to mental health support or have been in therapy for years.",
    icon: "UserOctagon",
  },
];

// Support/Help FAQ items
export const SUPPORT_FAQ_ITEMS: FaqItemData[] = [
  {
    q: "How do I get technical support?",
    a: "You can reach our support team through the in-app chat, email us at support@nara.com, or visit our help center for comprehensive guides and tutorials.",
    icon: "Messages2",
  },
  {
    q: "What if I forget my password?",
    a: "Click 'Forgot Password' on the login page, and we'll send you a secure reset link. You can also contact support if you need additional help.",
    icon: "ShieldTick",
  },
  {
    q: "Can I export my data?",
    a: "Yes, you have full control over your data. You can export your progress reports, mood logs, and completed assignments at any time from your account settings.",
    icon: "DocumentText",
  },
];
