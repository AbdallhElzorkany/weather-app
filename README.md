# Weather App

A modern, responsive weather application built with Next.js, React, and Tailwind CSS. Get current weather conditions and forecasts for any city around the world.

## 🌟 Features

- Real-time weather data for any city
- 3-day weather forecast with detailed conditions
- Responsive design that works on all devices
- Beautiful UI with weather-appropriate icons
- Fast and efficient data loading with Next.js

## 🚀 Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [date-fns](https://date-fns.org/) - Modern date utility library
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdallhElzorkany/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_API_URL=https://api.weatherapi.com/v1
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🏗️ Project Structure

```
weather-app/
├── src/
│   ├── app/                    # App routes and pages
│   │   ├── [city]/             # Dynamic route for city pages
│   │   ├── forecast/[city]     # Forecast page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── components/             # Reusable components
├── public/                     # Static files
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
└── tsconfig.json               # TypeScript configuration
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) 

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)
