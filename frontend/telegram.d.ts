// telegram.d.ts
interface TelegramWebApp {
  platform: string;
  initData: string;
  expand(): void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}