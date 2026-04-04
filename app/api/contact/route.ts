import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  phone: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body: ContactBody = await request.json();

  if (!body.name || !body.phone) {
    return NextResponse.json(
      { error: "Имя и телефон обязательны" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return NextResponse.json(
      { error: "Сервер не настроен" },
      { status: 500 }
    );
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `👤 Имя: ${body.name}`,
    `📞 Телефон: ${body.phone}`,
    body.service ? `💅 Услуга: ${body.service}` : "",
    body.message ? `💬 Сообщение: ${body.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!res.ok) {
    console.error("Telegram API error:", await res.text());
    return NextResponse.json(
      { error: "Ошибка отправки" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
