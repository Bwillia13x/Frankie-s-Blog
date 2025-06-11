// This file will contain the setup items data.

export interface SetupItemDetail {
  name: string;
  description: string;
  link: string;
  price: string; // Can be "$2,199", "Free", "$8/month" etc.
  why: string;
}

export interface SetupCategory {
  id: string;
  name: string;
  iconName?: string; // e.g., "MonitorIcon", "KeyboardIcon"
  description: string;
  items: SetupItemDetail[];
}

export const setupCategoriesData: SetupCategory[] = [
  {
    id: "hardware",
    name: "Hardware & Desk Setup",
    iconName: "MonitorIcon",
    description: "My physical workspace and equipment",
    items: [
      {
        name: "MacBook Pro 14\" (M3 Pro)",
        description: "My main development machine with 18GB RAM and 512GB SSD",
        link: "https://apple.com/macbook-pro-14",
        price: "$2,199",
        why: "Perfect balance of performance and portability for development work"
      },
      {
        name: "LG UltraFine 27\" 4K Monitor",
        description: "Primary external display for coding and design work",
        link: "https://lg.com/us/monitors/lg-27up850-w",
        price: "$449",
        why: "Crisp text rendering and great color accuracy for UI work"
      },
      {
        name: "Herman Miller Aeron Chair",
        description: "Ergonomic office chair for long coding sessions",
        link: "https://hermanmiller.com/products/seating/office-chairs/aeron-chairs/",
        price: "$1,395",
        why: "Worth every penny for back health during 8+ hour coding days"
      },
      {
        name: "Keychron K3 Mechanical Keyboard",
        description: "Low-profile mechanical keyboard with brown switches",
        link: "https://keychron.com/products/keychron-k3-wireless-mechanical-keyboard",
        price: "$84",
        why: "Great tactile feedback without the noise of traditional mechanical keyboards"
      },
      {
        name: "Logitech MX Master 3S",
        description: "Wireless mouse with precision scrolling",
        link: "https://logitech.com/en-us/products/mice/mx-master-3s.html",
        price: "$99",
        why: "Best mouse I've ever used for productivity and precision work"
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        description: "Noise-cancelling headphones for focus and calls",
        link: "https://sony.com/en/electronics/headband-headphones/wh-1000xm5",
        price: "$399",
        why: "Incredible noise cancellation for open office environments"
      }
    ]
  },
  {
    id: "software",
    name: "Development Software",
    iconName: "KeyboardIcon",
    description: "Tools and applications I use daily",
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with custom extensions and theme",
        link: "https://code.visualstudio.com",
        price: "Free",
        why: "Unbeatable extension ecosystem and great TypeScript support"
      },
      {
        name: "iTerm2 + Oh My Zsh",
        description: "Terminal with custom shell configuration",
        link: "https://iterm2.com",
        price: "Free",
        why: "Much better than default Terminal with great customization options"
      },
      {
        name: "Docker Desktop",
        description: "Containerization for consistent development environments",
        link: "https://docker.com/products/docker-desktop",
        price: "Free",
        why: "Essential for microservices development and deployment"
      },
      {
        name: "Figma",
        description: "Design tool for UI/UX work and collaboration",
        link: "https://figma.com",
        price: "Free/Pro",
        why: "Best collaboration tool for working with designers"
      },
      {
        name: "Notion",
        description: "All-in-one workspace for notes and project management",
        link: "https://notion.so",
        price: "$8/month",
        why: "My second brain for everything from todos to documentation"
      },
      {
        name: "1Password",
        description: "Password manager and secure storage",
        link: "https://1password.com",
        price: "$2.99/month",
        why: "Essential for security with unique passwords for every service"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Utilities",
    iconName: "CoffeeIcon",
    description: "Apps that keep me organized and efficient",
    items: [
      {
        name: "Raycast",
        description: "Spotlight replacement with powerful extensions",
        link: "https://raycast.com",
        price: "Free",
        why: "Lightning-fast app launcher with clipboard history and snippets"
      },
      {
        name: "CleanMyMac X",
        description: "System optimization and maintenance",
        link: "https://macpaw.com/cleanmymac",
        price: "$89.95",
        why: "Keeps my Mac running smoothly and frees up storage space"
      },
      {
        name: "Bartender 4",
        description: "Menu bar organization tool",
        link: "https://macbartender.com",
        price: "$16",
        why: "Cleans up the menu bar and hides less important icons"
      },
      {
        name: "RescueTime",
        description: "Automatic time tracking and productivity insights",
        link: "https://rescuetime.com",
        price: "$12/month",
        why: "Great for understanding where time goes and improving focus"
      },
      {
        name: "Spotify",
        description: "Music streaming for focus and background noise",
        link: "https://spotify.com",
        price: "$9.99/month",
        why: "Essential for maintaining focus during deep work sessions"
      },
      {
        name: "Arc Browser",
        description: "Modern browser with better tab management",
        link: "https://arc.net",
        price: "Free",
        why: "Revolutionary approach to browsing with spaces and sidebar organization"
      }
    ]
  }
];

// workflowTips are not included here as they are more page-specific content.
