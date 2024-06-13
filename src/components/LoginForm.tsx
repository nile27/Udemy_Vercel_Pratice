import { githubLogin, login } from "@/lib/action";

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input
          type="text"
          name="email"
          placeholder="Enter yout email"
          className="text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter yout Password"
          className="text-black"
        />
        <button>로그인</button>
      </form>
      <form action={githubLogin}>
        <button>Github 로그인</button>
      </form>
    </>
  );
}
