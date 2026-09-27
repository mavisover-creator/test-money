"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import cover from "@/public/image/訊息社群圖01.png";
import card03 from "@/public/image/咒語小卡03.png";

const results: { icon: string; image?: StaticImageData; title: string; message: string; action: string }[] = [
  {
    icon: "🌱",
    title: "播種的時刻讚",
    message: "今天適合為未來種下一顆小種子。存下一點錢、學一個新技能，小小的行動會慢慢長成大大的豐盛。",
    action: "今日練習：把今天省下的一筆錢放進存錢筒，並對它說聲「謝謝」。",
  },
  {
    icon: "💛",
    image: card03,
    title: "感恩的流動贊",
    message: "金錢喜歡被感謝。今天花出去的每一塊錢，都帶著你的祝福流向別人，也會帶著更多祝福流回你身邊。",
    action: "今日練習：付款時，在心裡默念「感謝你，願你帶著祝福回來」。",
  },
  {
    icon: "✨",
    title: "允許接收讚",
    message: "你值得被好好對待。今天請放下「我不配」的念頭，大方接受別人的讚美、幫助與禮物。",
    action: "今日練習：有人稱讚你時，微笑說「謝謝」，不要推辭。",
  },
];

export default function MoneyOracle() {
  const [index, setIndex] = useState<number | null>(null);
  const [drawing, setDrawing] = useState(false);

  const draw = () => {
    setDrawing(true);
    setIndex(null);
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * results.length));
      setDrawing(false);
    }, 1200);
  };

  const result = index === null ? null : results[index];

  return (
    <div className="mx-auto max-w-xl text-center">
      {!result && (
        <button
          onClick={draw}
          disabled={drawing}
          aria-label="抽出今天的金錢指引"
          className="mx-auto mb-8 block w-full max-w-sm transition hover:-translate-y-1 disabled:cursor-wait"
        >
          <Image
            src={cover}
            alt="金錢想給你的今日訊息"
            placeholder="blur"
            priority
            sizes="(max-width: 640px) 90vw, 384px"
            className={`w-full rounded-3xl shadow-xl shadow-gold-300/40 ${drawing ? "animate-pulse" : ""}`}
          />
        </button>
      )}

      {!result && (
        <button
          onClick={draw}
          disabled={drawing}
          className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 px-10 py-5 font-cute text-xl text-white shadow-xl shadow-gold-300/60 transition hover:scale-105 disabled:cursor-wait disabled:hover:scale-100"
        >
          <span className={drawing ? "inline-block animate-spin" : "inline-block"}>🔮</span>
          {drawing ? "正在感應你的能量…" : "抽出今天的金錢指引"}
        </button>
      )}

      {result && (
        <div className="animate-[pop_0.6s_ease-out] rounded-3xl border border-gold-300 bg-white/90 p-8 shadow-xl sm:p-10">
          {result.image && (
            <Image
              src={result.image}
              alt={result.title}
              placeholder="blur"
              sizes="(max-width: 640px) 90vw, 480px"
              className="mx-auto mb-6 w-full max-w-sm rounded-2xl shadow-lg"
            />
          )}
          <p className="text-sm tracking-[0.3em] text-gold-500">今天金錢給你的指引是</p>
          <h3 className="mt-2 font-cute text-3xl text-gold-900">
            {result.icon} {result.title}
          </h3>
          <p className="mt-5 leading-loose text-foreground/80">{result.message}</p>
          <p className="mt-5 rounded-xl bg-gold-50 p-4 text-gold-700">{result.action}</p>
          <button
            onClick={draw}
            className="mt-8 rounded-full border border-gold-500 px-8 py-3 font-bold text-gold-700 transition hover:bg-gold-100"
          >
            🔮 再抽一次
          </button>
        </div>
      )}
    </div>
  );
}
