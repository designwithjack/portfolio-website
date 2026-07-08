<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <main class="z-0 bg-none flex-1 mb-30">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
