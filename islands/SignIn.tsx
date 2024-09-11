
export default function SignInForm() {
  return (
    <div class="items-stretch min-w-0">
      <div class="flex justify-center">
        <h2 class="my-4">Sign In</h2>
      </div>
      <form method="post" class="flex flex-col space-y-4 min-w-0">
        <input autofocus type="email" name="email" />
        <input autofocus type="password" name="password" />

        <button formAction="/api/sign-in" type="submit" class="!mt-8" > Sign In
        </button>
      </form>
    </div>
  );
}
