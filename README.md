# Job Application Tracker

A modern, intuitive, and free web application for capturing, organizing, and managing your job applications in one place. Track your career journey with an interactive Kanban board that keeps you organized and motivated.

## Overview

Job Application Tracker is a comprehensive tool designed to simplify the job search process. Whether you're applying to dozens of positions or managing a carefully curated list, this application helps you stay organized, track progress, and never lose track of an opportunity.

**Key Highlight:** Free forever. No credit card required.

## 🚀 Live Demo

Try the application now: [https://job-application-tracker-six-gold.vercel.app/](https://job-application-tracker-six-gold.vercel.app/)

## ✨ Features

### 🎯 Core Features

- **Interactive Kanban Board** - Visualize your job application journey with an intuitive drag-and-drop Kanban board
- **Application Status Tracking** - Track your applications through multiple stages:
  - Applied
  - Interview Scheduled
  - Offered
  - Rejected
- **User Authentication** - Secure sign-up and sign-in with email-based authentication
- **Application Details** - Store comprehensive information for each application:
  - Company name and position
  - Location
  - Application date
  - Salary range
  - Job URL
  - Custom notes
  - Tags for easy categorization
- **Real-time Organization** - Drag and drop applications between columns to update their status
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### 🔐 Security & Privacy

- Secure authentication using industry-standard methods
- MongoDB-backed data persistence
- User-specific data isolation - each user only sees their own applications
- Session management with cookie caching

### 🎨 User Experience

- Clean, modern interface with Tailwind CSS styling
- Radix UI components for accessibility
- Interactive icons and visual indicators
- Smooth animations and transitions
- Dark mode support

## 🛠 Tech Stack

### Frontend

- **Framework:** [Next.js 16](https://nextjs.org) - React framework with built-in SSR and static generation
- **UI Library:** [React 19](https://react.dev) - Modern React with latest features
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Component Library:** [Radix UI](https://www.radix-ui.com) - Unstyled, accessible components
- **Icons:** [Lucide React](https://lucide.dev) - Beautiful icon library
- **Drag & Drop:** [@dnd-kit](https://docs.dndkit.com) - Lightweight, modular drag-and-drop toolkit
- **Utilities:** clsx, class-variance-authority, tailwind-merge

### Backend & Database

- **Database:** [MongoDB](https://www.mongodb.com) - NoSQL document database
- **ODM:** [Mongoose](https://mongoosejs.com) - MongoDB object modeling
- **Authentication:** [Better Auth](https://www.better-auth.com) - Modern authentication framework
- **API:** Next.js API Routes with TypeScript

### Development Tools

- **Language:** [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Linting:** [ESLint](https://eslint.org) - Code quality tool
- **Task Runner:** tsx for running scripts
- **Build Tool:** Next.js built-in build system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)
- MongoDB database (local or cloud)
- Environment variables configured

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asifahemmed09/job-application-tracker
   cd job-application-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   # Add other required environment variables for authentication
   ```

4. **Seed initial data (optional)**

   To populate the database with sample job applications:

   ```bash
   npm run seed:jobs
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint

# Seed the database with sample data
npm run seed:jobs
```

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── api/                      # API routes and authentication
│   ├── auth/                     # Authentication pages
│   ├── dashboard/                # Main application dashboard
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── kanban-board.tsx          # Main Kanban board component
│   ├── job-application-card.tsx  # Individual job card
│   ├── create-job-dialog.tsx     # New application dialog
│   └── navbar.tsx                # Navigation bar
├── lib/                          # Utility functions and libraries
│   ├── auth/                     # Authentication configuration
│   ├── actions/                  # Server actions
│   ├── hooks/                    # Custom React hooks
│   ├── models/                   # Database models and types
│   ├── db.ts                     # Database connection
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── scripts/                      # Utility scripts
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

## 🗄 Database Schema

### Job Application Model

- **company** (string, required) - Company name
- **position** (string, required) - Job position title
- **location** (string, optional) - Job location
- **status** (string) - Current application status
- **columnId** (ObjectId) - Associated Kanban column
- **boardId** (ObjectId) - Associated user board
- **userId** (string, required) - Application owner
- **order** (number) - Display order in column
- **notes** (string, optional) - Custom notes
- **salary** (string, optional) - Salary information
- **jobUrl** (string, optional) - Job posting URL
- **appliedDate** (Date, optional) - Date of application
- **tags** (array, optional) - Custom tags
- **description** (string, optional) - Job description
- **createdAt** (Date) - Record creation timestamp
- **updatedAt** (Date) - Record update timestamp

## 🔄 Key Features Explained

### Kanban Board Workflow

The application uses a Kanban board system with the following default columns:

1. **Applied** (Cyan) - Recently applied positions
2. **Interview Scheduled** (Purple) - Interviews lined up
3. **Offered** (Green) - Job offers received
4. **Rejected** (Red) - Applications that didn't advance

Users can create custom columns and drag applications between them to update status.

### Drag & Drop

Built with @dnd-kit, the application provides smooth drag-and-drop functionality for organizing applications without page reloads.

## 🔐 Authentication

The project uses **Better Auth**, a modern authentication framework with:

- Email-based sign-up and sign-in
- Secure session management
- Cookie-based session caching
- MongoDB integration

## 🎨 Styling

- **Tailwind CSS** for rapid UI development
- **Radix UI** for accessible, unstyled components
- **Lucide React** for consistent iconography
- CSS animations for enhanced user experience

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Vercel automatically builds and deploys on every push

### Deploy on Other Platforms

The application is a standard Next.js app and can be deployed on:

- AWS Amplify
- Netlify
- Railway
- Heroku
- Docker containers

## 🛠 Development

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Strict mode enabled for better error detection

### Best Practices

- Component-based architecture
- Server-side rendering where appropriate
- Optimized performance with Next.js built-in features
- RESTful API design patterns

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Better Auth Documentation](https://www.better-auth.com)
- [MongoDB Documentation](https://docs.mongodb.com)

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Users

- **Organize by Status:** Use the Kanban board columns to track your progress
- **Add Notes:** Include interview details, contact information, or follow-up reminders
- **Use Tags:** Categorize jobs (e.g., "remote", "startup", "fintech") for better organization
- **Track Dates:** Record application and interview dates to maintain a timeline
- **Save URLs:** Keep job posting links for easy reference

## 🐛 Troubleshooting

### Development Server Won't Start

- Ensure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again
- Clear Next.js cache: `rm -rf .next`

### Database Connection Issues

- Verify MongoDB URI in `.env.local`
- Ensure MongoDB service is running
- Check network access rules in MongoDB Atlas (if using cloud)

### Authentication Errors

- Clear browser cookies and try again
- Ensure all required environment variables are set
- Check Better Auth configuration in `lib/auth/auth.ts`

## 📧 Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Happy job hunting! 🎯**
