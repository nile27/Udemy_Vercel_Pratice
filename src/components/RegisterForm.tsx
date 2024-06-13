export default function RegisterForm() {
  return (
    <>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter yout Name"
          className="text-black"
        />
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
    </>
  );
}
