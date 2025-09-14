import { Testimonial } from "@/components/shared/testimonials";

// All therapist testimonials in one place
export const THERAPIST_TESTIMONIALS_CONFIG = {
  title: "THERAPIST TESTIMONIALS",
  subtitle: "Trusted by therapists who want more than just video calls",
  testimonials: [
    {
      quote:
        "Assigning and tracking homework is finally easy. Clients are more engaged now.",
      author: "Marcus Thompson",
      role: "Defiance Capital",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "I spend less time on admin and more time helping clients. Nara keeps me updated even between sessions.",
      author: "David Rodriguez",
      role: "Pacific Health Partners",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Seeing mood trends helps me personalise care. I've caught early signs of relapse thanks to Nara.",
      author: "James Wilson",
      role: "Wellness Collective",
      avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "The AI insights have transformed how I approach treatment planning. My clients feel more supported between sessions.",
      author: "Dr. Sarah Johnson",
      role: "Mindful Therapy Group",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Nara's dashboard gives me real-time visibility into my clients' progress. It's like having a co-therapist that never sleeps.",
      author: "Dr. Michael Chen",
      role: "Thrive Mental Health",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Nara has revolutionized how I manage my practice. The insights are invaluable.",
      author: "Dr. Emily Watson",
      role: "Private Practice",
      avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "My clients love the homework assignments. They're more engaged than ever.",
      author: "Dr. Michael Brown",
      role: "Community Health Center",
      avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
  ],
};


// Client page testimonials configuration
export const CLIENT_TESTIMONIALS_CONFIG = {
  title: "CLIENT TESTIMONIALS",
  subtitle: "Hear from clients who've found healing with Nara",
  testimonials: [
    {
      quote:
        "With just four sessions through Nara's therapist, I discovered new ways to cope with stress, and I've felt ten times happier ever since!",
      author: "Morgan",
      role: "Seattle, Washington",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "I was able to find and schedule a session with my therapist in under 24 hours.",
      author: "Alex",
      role: "Austin, Texas",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Nara took my therapy costs from $200 per session to just $20 per session. Game changer!",
      author: "Halie",
      role: "Buffalo, NY",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Nara's daily mood checking and gratitude prompts have become essential parts of my routine. They keep me grounded and positive every day.",
      author: "Chioma",
      role: "Atlanta, Georgia",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Incorporating Nara's 'share love' task into my daily life has strengthened my relationships and boosted my overall happiness. It's amazing!",
      author: "Jake",
      role: "Denver, Colorado",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
  ],
};

// Individual exports for backward compatibility
export const THERAPIST_TESTIMONIALS = THERAPIST_TESTIMONIALS_CONFIG.testimonials;
export const CLIENT_TESTIMONIALS = CLIENT_TESTIMONIALS_CONFIG.testimonials;
