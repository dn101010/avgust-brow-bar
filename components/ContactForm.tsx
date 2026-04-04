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
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
          Ваше имя
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Введите имя" })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
          placeholder="Имя"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { required: "Введите телефон" })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
          placeholder="+7 (___) ___-__-__"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-primary mb-1.5">
          Услуга
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
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
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
          Сообщение
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none"
          placeholder="Ваш вопрос или пожелания"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
      >
        {status === "loading" ? "Отправка..." : "Отправить заявку"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Ошибка отправки. Попробуйте ещё раз или напишите в Telegram.
        </p>
      )}
    </form>
  );
}
