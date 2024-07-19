import { onMounted } from 'vue';

const initTelegramWebApp = () => {
  onMounted(() => {
    const telegram = (window as any).Telegram.WebApp;
    telegram.ready();
  });
};

export default initTelegramWebApp;