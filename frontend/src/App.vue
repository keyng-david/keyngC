<template>
  <div class="container py-4 h-screen d-flex flex-column">
    <RouterView />
    <Notification v-if="notification" :notification="notification" />
  </div>
</template>

<script setup lang="ts">
import type NotificationModel from '@/models/notificationModel';
import Notification from '@/components/notification/Notificaton.vue';
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";

import { ref, provide } from 'vue';
import { NotificationTypeEnum } from '@/models/notificationModel';

// Extend the global interface to include the BackButton property
declare global {
  interface TelegramWebApp {
    BackButton: {
      isVisible: boolean;
      onClick: (callback: () => void) => void;
    };
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

const notification = ref<NotificationModel>();

function createNotification(model: NotificationModel) {
  if (!model.type) model.type = NotificationTypeEnum.Success;

  notification.value = model;

  if (model.type != NotificationTypeEnum.Waiting)
    setTimeout(() => {
      notification.value = undefined;
    }, 3000);
}

provide("notification", { createNotification });

const router = useRouter();
const route = useRoute();

const goBackUsingBack = () => {
  if (router) router.back();
}

// Using the extended property BackButton
window.Telegram.WebApp.BackButton.isVisible = true;
window.Telegram.WebApp.BackButton.onClick(goBackUsingBack);
</script>