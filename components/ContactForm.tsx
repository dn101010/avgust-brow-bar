"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { services } from "@/data/services";

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-body text-[14px] font-normal text-ink-soft mb-1.5">
          Ваше имя
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Введите имя" })}
          className="w-full px-4 py-3 rounded-sm border border-petal bg-white text-ink font-body text-[14px] font-light focus:outline-none focus:border-gold transition placeholder:text-stone"
          placeholder="Имя"
        />
        {errors.name && (
          <p className="text-red-600 text-[12px] mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-[14px] font-normal text-ink-soft mb-1.5">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { required: "Введите телефон" })}
          className="w-full px-4 py-3 rounded-sm border border-petal bg-white text-ink font-body text-[14px] font-light focus:outline-none focus:border-gold transition placeholder:text-stone"
          placeholder="+7 (___) ___-__-__"
        />
        {errors.phone && (
          <p className="text-red-600 text-[12px] mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block font-body text-[14px] font-normal text-ink-soft mb-1.5">
          Услуга
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-3 rounded-sm border border-petal bg-white text-ink font-body text-[14px] font-light focus:outline-none focus:border-gold transition"
        >
          <option value="">Выберите услугу</option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-[14px] font-normal text-ink-soft mb-1.5">
          Сообщение
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          className="w-full px-4 py-3 rounded-sm border border-petal bg-white text-ink font-body text-[14px] font-light focus:outline-none focus:border-gold transition resize-none placeholder:text-stone"
          placeholder="Ваш вопрос или пожелания"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover disabled:opacity-60 text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
      >
        {status === "loading" ? "Отправка..." : "Отправить заявку"}
      </button>

      {status === "success" && (
        <p className="text-green-700 font-body text-[13px] text-center">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-body text-[13px] text-center">
          Ошибка отправки. Попробуйте ещё раз или напишите в Telegram.
        </p>
      )}
    </form>
  );
}
