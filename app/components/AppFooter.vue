<template>
  <footer
    class="-z-1 surface-light bg-background fixed inset-x-0 bottom-0 flex h-2/3 flex-col justify-end pb-10"
  >
    <div
      class="page-container text-foreground items-center flex text-base tracking-[0.005em] gap-0 h-10"
    >
      <div
        class="size-10 sm:size-9 shrink-0 overflow-hidden rounded-full sm:my-0.5 mr-8"
      >
        <img
          src="/images/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-1 bg-black opacity-[0.16] h-px mr-3 sm:mr-7"></div>
      <div class="flex gap-3 sm:gap-5 md:gap-7 flex-row items-center">
        <a
          href="https://www.linkedin.com/in/jack-os"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 shrink-0 items-center justify-center transition-opacity hover:opacity-60 sm:size-auto sm:justify-start sm:gap-3.5 sm:py-2"
        >
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            class="h-5 w-5 object-cover"
          />
          <span class="hidden sm:inline">LinkedIn</span>
        </a>
        <div class="w-6 sm:w-8 md:w-11 bg-black opacity-[0.16] h-px"></div>
        <a
          href="https://github.com/designwithjack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 shrink-0 items-center justify-center transition-opacity hover:opacity-60 sm:size-auto sm:justify-start sm:gap-3.5 sm:py-2"
        >
          <img
            src="/images/github.svg"
            alt="GitHub"
            class="h-5 w-5 object-cover"
          />
          <span class="hidden sm:inline">GitHub</span>
        </a>
        <div class="w-6 sm:w-8 md:w-11 bg-black opacity-[0.16] h-px"></div>
        <a
          href="mailto:hello@designwithjack.com?subject=Chat%20with%20Jack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 shrink-0 items-center justify-center transition-opacity hover:opacity-60 sm:size-auto sm:justify-start sm:gap-3.5 sm:py-2"
        >
          <img
            src="/images/email.svg"
            alt="Email"
            class="h-5 w-5 object-cover"
          />
          <span class="hidden sm:inline">Email</span>
        </a>
      </div>
    </div>
  </footer>
</template>
