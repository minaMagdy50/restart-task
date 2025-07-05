# Admin Dashboard - Next.js 15


A professional admin dashboard built with Next.js 15, featuring authentication, responsive design, and product management capabilities.

## Features

- 🔒 **Authentication System**
  - Login with token-based authentication
  - Protected routes with middleware
  - Cookie-based session management
- 📱 **Responsive Design**
  - Mobile-first approach
  - Collapsible sidebar for mobile
  - Adaptive layouts for all screen sizes
- 🛠️ **Product Management**
  - Full CRUD operations for products
  - Modal forms for adding/editing products
  - Real-time data updates
- ✨ **UI/UX Enhancements**
  - GSAP animations for smooth transitions
  - Notification system with success/error messages
  - Professional dashboard design with Tailwind CSS
- ⚙️ **Modern Architecture**
  - TypeScript type safety
  - Environment variables configuration
  - Component-based structure

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **State Management**: React Context API
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **API**: MockAPI.io

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/minaMagdy50/restart-task.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your API base URL:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `dev`: Starts the development server
- `build`: Creates a production build
- `start`: Starts the production server
- `lint`: Runs ESLint for code quality check

## Project Structure

```
admin-dashboard/
├── app/                  # App router directory
│   ├── dashboard/        # Protected routes
│   ├── login/            # Login page
│   ├── layout.tsx        # Main layout
│   └── page.tsx          # Home page (redirect)
├── components/           # Reusable components
│   ├── Header.tsx
│   ├── Notification.tsx
│   ├── ProductModal.tsx
│   ├── ProductTable.tsx
│   └── Sidebar.tsx
├── context/              # Context providers
│   └── AuthProvider.tsx
├── public/               # Static assets
├── types/                # TypeScript types
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── README.md             # This file
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Vercel Deployment

1. Push your code to a Git repository
2. Create a new project on [Vercel](https://vercel.com/)
3. Import your Git repository
4. Add environment variables in Vercel dashboard
5. Click Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

| Variable Name                | Description                          | Example Value                              |
|------------------------------|--------------------------------------|--------------------------------------------|
| `NEXT_PUBLIC_API_BASE_URL`   | Base URL for API requests            | `https://62fb62afe4bcaf5351837ac1.mockapi.io` |
| `NEXT_PUBLIC_ENVIRONMENT`    | Environment identifier               | `production`                               |
| `NEXT_PUBLIC_APP_VERSION`    | Application version                  | `1.0.0`                                    |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Developed with ❤️ by Mina Magdy**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mina-magdy-200a08161/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/minaMagdy50)
