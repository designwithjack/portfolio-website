<template>
  <footer
    class="surface-light bg-background fixed inset-x-0 bottom-0 flex h-2/3 flex-col justify-end pb-10"
  >
    <div
      class="page-container text-foreground flex items-end justify-between gap-10 text-base"
    >
      <div class="flex flex-col gap-10 sm:flex-row">
        <a
          href="mailto:hello@designwithjack.com?subject=Chat%20with%20Jack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 py-1.5 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/email.svg"
            alt="Email"
            class="h-5 w-5 object-cover"
          />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/jack-os"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 py-1.5 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            class="h-5 w-5 object-cover"
          />
          LinkedIn
        </a>

        <a
          href="https://github.com/designwithjack"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 py-1.5 transition-opacity hover:opacity-60"
        >
          <img
            src="/images/github.svg"
            alt="GitHub"
            class="h-5 w-5 object-cover"
          />
          GitHub
        </a>
      </div>
      <div class="size-10 shrink-0 overflow-hidden">
        <img
          src="/images/logo-black.svg"
          alt="Logo"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </footer>
</template>
