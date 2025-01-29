# 🎯 Kalki UI React Toast Component Library
> 🌟 A beautiful, customizable, and accessible toast notification system for React applications

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

## ✨ Features

- 🎨 10 Beautiful variants: default, primary, secondary, success, info, warning, danger, help, light, dark
- 📱 Fully responsive with mobile-first design
- ♿ Accessible by default with ARIA attributes
- 🔄 Smooth animations and transitions
- ⚡ Auto-close functionality with customizable duration
- 🎯 6 Different positioning options
- 🔧 Highly customizable with Tailwind CSS
- 🎭 Support for custom icons
- 🏗️ Built with TypeScript for type safety

## 🚀 Installation

```bash
npm install kalki-ui-toast
# or
yarn add kalki-ui-toast
```

## 🎯 Quick Start

```tsx
import { ToastProvider, useToast, ToastContainer } from 'kalki-ui-toast';

function App() {
  return (
    <ToastProvider>
      <YourApp />
      <ToastContainer />
    </ToastProvider>
  );
}

function YourApp() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: "Hello, World! 👋",
      variant: "success",
      icon: "🎉"
    });
  };

  return (
    <button onClick={showToast}>
      Show Toast! 🔔
    </button>
  );
}
```

## 🎨 Toast Variants

| Variant    | Description                     | Use Case                        |
|------------|---------------------------------|---------------------------------|
| default    | Clean and minimal               | General notifications           |
| primary    | Bold and attention-grabbing     | Important updates              |
| secondary  | Subtle and complementary        | Secondary information          |
| success    | Positive feedback               | Successful operations          |
| info       | Informational messages          | Neutral information            |
| warning    | Cautionary alerts               | Warning messages               |
| danger     | Error notifications             | Critical errors                |
| help       | Help and guidance               | Tips and assistance            |
| light      | Light theme                     | Bright environments            |
| dark       | Dark theme                      | Dark mode support              |

## 📐 Positioning

Position your toasts anywhere on the screen:
- 📍 top-right
- 📍 top-center
- 📍 top-left
- 📍 bottom-right
- 📍 bottom-center
- 📍 bottom-left

```tsx
<ToastContainer position="top-right" />
```

## ⚙️ Configuration Options

### Toast Props

| Prop       | Type                  | Default     | Description                    |
|------------|----------------------|-------------|--------------------------------|
| message    | ReactNode            | -           | Toast content                  |
| variant    | ToastVariant         | 'default'   | Visual style variant          |
| autoClose  | number \| false      | 5000        | Auto-close duration (ms)      |
| showClose  | boolean              | true        | Show close button             |
| icon       | ReactNode            | undefined   | Custom icon                   |
| rounded    | boolean              | false       | Rounded corners               |
| className  | string               | ''          | Additional CSS classes        |
| style      | React.CSSProperties  | undefined   | Inline styles                 |

### Container Props

```tsx
interface ToastContainerProps {
  position?: ToastPosition;
  showClose?: boolean;
  rounded?: boolean;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
```

## 🎭 Custom Styling

The component uses Tailwind CSS and class-variance-authority for styling. Customize the appearance by:

1. Extending the variants:
```tsx
const toastVariants = cva(
  'your-base-classes',
  {
    variants: {
      // Your custom variants
    }
  }
);
```

2. Using className prop:
```tsx
<Toast className="your-custom-classes" />
```

## 🎯 Best Practices

1. 🎨 Choose appropriate variants for different message types
2. ⏱️ Set reasonable autoClose durations
3. 📱 Test on different screen sizes
4. ♿ Keep accessibility in mind
5. 🔄 Clean up toasts when components unmount

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Variants powered by [class-variance-authority](https://cva.style/)

---

Made with ❤️ by [Kalki UI]