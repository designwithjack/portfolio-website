<template>
  <div class="text-foreground flex min-h-screen-dynamic flex-col">
    <AppHeader />
    <main class="relative z-10 mb-[220px] flex-1 sm:mb-30">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
