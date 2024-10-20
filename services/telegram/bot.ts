import { Bot } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "Привет! Я ваш новый бот на грамми, написанный на TypeScript!",
  );
});

bot.on("pre_checkout_query", async (ctx) => {
  const query = ctx.update.pre_checkout_query;

  console.log(query);
  // Проверьте заказ (например, проверка валидности товара, пользователя и т.д.)
  const isOrderValid = true;

  if (isOrderValid) {
    await ctx.answerPreCheckoutQuery(true); // Подтверждение заказа
  } else {
    await ctx.answerPreCheckoutQuery(false, "Order is invalid");
  }
});

bot.on("message:successful_payment", async (ctx) => {
  const payment = ctx.message.successful_payment;

  console.log(payment);

  // Здесь вы можете обработать успешный платеж
  console.log(
    `User ${ctx.from.id} successfully paid for ${payment.total_amount / 100} currency ${payment.currency}`,
  );

  // Отправьте сообщение в мини-приложение или выполните другие действия
  await ctx.reply(
    "Thank you for your payment! Your subscription has been activated.",
  );
});

bot.on("message:text", async (ctx) => {
  const chatId = ctx.chat.id;
  // Отправляем сообщение обратно пользователю
  await ctx.reply(`Ваш чат ID: ${chatId}`);
});

export default bot;
