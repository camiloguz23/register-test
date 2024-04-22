"use client";

export default function Home() {
  const isDark = window.matchMedia("color-scheme: dark");
  console.log(isDark);
  return (
    <main className={""}>
      <p>Color</p>
    </main>
  );
}
