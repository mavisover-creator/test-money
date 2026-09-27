"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl bg-white/80 p-10 text-center shadow-lg">
        <p className="text-4xl">✨</p>
        <p className="mt-4 font-cute text-2xl text-gold-900">感謝你的報名！</p>
        <p className="mt-2 text-foreground/70">拉拉老師會盡快與你聯繫，豐盛已經在路上了。</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 rounded-2xl bg-white/80 p-8 shadow-lg sm:p-10"
    >
      <label className="grid gap-2">
        <span className="text-sm font-medium text-gold-900">姓名</span>
        <input
          required
          name="name"
          className="rounded-lg border border-gold-300 bg-white px-4 py-3 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-gold-900">Email</span>
        <input
          required
          type="email"
          name="email"
          className="rounded-lg border border-gold-300 bg-white px-4 py-3 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-gold-900">想報名的課程</span>
        <select
          name="course"
          className="rounded-lg border border-gold-300 bg-white px-4 py-3 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
        >
          <option>初階・金錢靈氣啟蒙</option>
          <option>進階・豐盛能量實踐</option>
          <option>一對一・個人金錢療癒</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-gold-900">想對拉拉老師說的話</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-lg border border-gold-300 bg-white px-4 py-3 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-gold-500 px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-gold-700"
      >
        送出報名
      </button>
    </form>
  );
}
