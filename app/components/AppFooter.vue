<template>
  <footer
    class="-z-1 surface-light bg-background fixed inset-x-0 bottom-0 flex h-2/3 flex-col justify-end pb-[17px] sm:pb-10"
  >
    <div
      class="page-container text-foreground items-center flex text-base tracking-[0.005em] gap-[5vw] sm:gap-0 sm:h-10"
    >
      <div
        class="size-10 sm:size-9 shrink-0 overflow-hidden rounded-full sm:my-0.5 mr-auto sm:mr-8"
      >
        <img
          src="/images/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>
      <div
        class="hidden sm:flex sm:flex-1 bg-black opacity-[0.16] h-px mr-7"
      ></div>
      <div
        class="w-1/2 sm:w-fit flex flex-col gap-4 sm:gap-5 md:gap-7 sm:flex-row sm:items-center"
      >
        <a
          href="https://www.linkedin.com/in/jack-os"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 py-2 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            class="h-5 w-5 object-cover"
          />
          LinkedIn
        </a>
        <div class="w-full sm:w-8 md:w-11 bg-black opacity-[0.16] h-px"></div>
        <a
          href="https://github.com/designwithjack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 py-2 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/github.svg"
            alt="GitHub"
            class="h-5 w-5 object-cover"
          />
          GitHub
        </a>
        <div class="w-full sm:w-8 md:w-11 bg-black opacity-[0.16] h-px"></div>
        <a
          href="mailto:hello@designwithjack.com?subject=Chat%20with%20Jack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 py-2 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/email.svg"
            alt="Email"
            class="h-5 w-5 object-cover"
          />
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
