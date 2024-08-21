<template>
  <div class="mx-auto page_information flex-center flex-column text-center">
    <h1 class="text-color fs-large fw-bold">Earn</h1>
    <p class="description-color fs-small fw-bold mt-3">
      Get free coins easily by doing a series of simple tasks
    </p>
  </div>

  <section class="section_invite mt-5">
    <div @click="$router.push({ name: 'profile' })" class="mt-3 bg-card box-shadow p-2 rounded-1">
      <div class="d-flex align-items-center justify-content-between">
        <div class="flex-center">
          <div class="card_icon flex-center bg-card mr-2 rounded-1 p-2 box-shadow">
            <img class="w-full h-full" src="@/assets/images/icons/invitation.png" alt="">
          </div>
          <div class="d-flex flex-column">
            <span class="text-color fs-small fw-bold mb-2">Invite Friends Bonus</span>
            <div class="d-flex align-items-center">
              <span class="description-color fs-small fw-normal">
                Invite friends to get <b class="theme-color">{{ $filters.numberFormat(2500) }}</b> coins.
              </span>
            </div>
          </div>
        </div>
        <div class="arrow_icon flex-center bg-card rounded-1 box-shadow p-2">
          <img class="w-full h-full" src="@/assets/images/icons/arrow_right.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const $filters = inject('$filters');

if (!$filters) {
  throw new Error('The $filters injection was not found.');
}

const router = useRouter();

const navigateToProfile = () => {
  router.push({ name: 'profile' });
};
</script>

<style scoped>
.completed {
    opacity: 0.5;
}
</style>